import React, { useEffect, useRef, useState } from 'react';

function Counter({ target, label, startDelay = 0, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
  if (!trigger) {
    setCount(0); 
    return;
  }

  const timeout = setTimeout(() => {
    let start = 0;
    const increment = Math.ceil(target / 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(start);
      }
    }, 20);
  }, startDelay);

  return () => clearTimeout(timeout);
}, [target, startDelay, trigger]);


  return (
    <div className="text-center text-white">
      <div className="text-3xl md:text-5xl font-bold">{count}+</div>
      <div className="text-sm md:text-base mt-1">{label}</div>
    </div>
  );
}

export default function StatsWithParallax() {
  const stats = [
    { target: 16, label: 'Years of Experience' },
  
    { target: 3, label: 'Divisions' },
    { target: 1000, label: 'Happy Clients' },
  ];

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

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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

