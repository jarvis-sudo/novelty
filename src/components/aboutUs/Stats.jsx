{/*
import React, { useEffect, useRef, useState,useMemo } from 'react';

const Counter = React.memo(function Counter({ target, label, startDelay = 0, trigger })  {
  const [count, setCount] = useState(0);



useEffect(() => {
  if (!trigger) return;

  let start = 0;
  const increment = Math.max(1, Math.floor(target / 60)); // smoother steps
  let animationId;

  const animate = () => {
    start += increment;
    if (start >= target) {
      setCount(target);
      cancelAnimationFrame(animationId);
    } else {
      setCount(start);
      animationId = requestAnimationFrame(animate);
    }
  };

  animationId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationId);
}, [trigger, target]);

  return (
    <div className="text-center text-white">
      <div className="text-3xl md:text-5xl font-bold">{count}+</div>
      <div className="text-sm md:text-base mt-1">{label}</div>
    </div>
  );
})

export default function Stats() {
  const stats = useMemo(() =>  [
    { target: 16, label: 'Years of Experience' },
  
    { target: 3, label: 'Divisions' },
    { target: 1000, label: 'Happy Clients' },
  ],[]);

  const [bgAttachment, setBgAttachment] = useState('scroll');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  
  useEffect(() => {
    const handleResize = () => {
      setBgAttachment(window.innerWidth >= 768 ? 'fixed' : 'scroll');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
//  useEffect(() => {
//   /* const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
 //   ); 
    

    const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) setInView(true);
  },
  { threshold: 0.6 } // only trigger when 60% visible
);

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center bg-[length:180%] sm:bg-[length:140%] md:bg-cover py-16 sm:py-20 md:py-32"
      style={{
        backgroundImage: "url('/pharmacist.jpg')",
        backgroundAttachment: bgAttachment,
      }}
    >
      
      <div className="absolute inset-0 bg-red-700 opacity-60"></div>

      
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        {stats.map((stat, i) => (
          <Counter key={stat.label} {...stat} startDelay={i * 300} trigger={inView} />
        ))}
      </div>
    </section>
  );
}

*/}

import React, { useEffect, useRef, useState, useMemo } from 'react';

// CRITICAL: Use innerHTML instead of React state for counter to avoid re-renders
const Counter = React.memo(function Counter({ target, label, startDelay = 0, trigger }) {
  const countDivRef = useRef(null);
  const rafRef = useRef();
  const animatingRef = useRef(false);

  useEffect(() => {
    if (!trigger || animatingRef.current) return;

    animatingRef.current = true;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const animationDuration = 2000;
    let startTime = null;

    const timeout = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        // Easing function
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * target);

        // Direct DOM manipulation - NO React re-render
        if (countDivRef.current) {
          countDivRef.current.textContent = currentCount + '+';
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          if (countDivRef.current) {
            countDivRef.current.textContent = target + '+';
          }
          animatingRef.current = false;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [trigger, target, startDelay]);

  return (
    <div className="text-center text-white">
      <div ref={countDivRef} className="text-3xl md:text-5xl font-bold tabular-nums">0+</div>
      <div className="text-sm md:text-base mt-1">{label}</div>
    </div>
  );
});

Counter.displayName = 'Counter';

export default function Stats() {
  const stats = useMemo(() => [
    { target: 16, label: 'Years of Experience' },
    { target: 3, label: 'Divisions' },
    { target: 1000, label: 'Happy Clients' },
  ], []);

  const [bgAttachment, setBgAttachment] = useState('scroll');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();
  const hasTriggered = useRef(false);

  // Optimized: Only update on desktop/mobile change
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    setBgAttachment(isDesktop ? 'fixed' : 'scroll');

    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 768;
      const newAttachment = newIsDesktop ? 'fixed' : 'scroll';
      setBgAttachment(prev => prev !== newAttachment ? newAttachment : prev);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Single intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center py-16 sm:py-20 md:py-32"
      style={{
        backgroundImage: "url('/pharmacist.jpg')",
        backgroundAttachment: bgAttachment,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-red-700 opacity-60" />

      {/* Content - optimized grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
          {stats.map((stat, i) => (
            <Counter 
              key={stat.label} 
              target={stat.target}
              label={stat.label}
              startDelay={i * 300} 
              trigger={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}