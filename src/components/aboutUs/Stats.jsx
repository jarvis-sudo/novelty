import React, { useEffect, useState } from 'react';

function Counter({ target, label, startDelay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
      return () => clearInterval(timer);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [target, startDelay]);

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
    { target: 22, label: 'States Covered' },
    { target: 3, label: 'Divisions' },
    { target: 1000, label: 'Happy Clients' },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32"
      style={{
        backgroundImage: "url('/pharmacist.jpg')",
        backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll', // Mobile fallback
      }}
    >
      {/* Orange overlay */}
      <div className="absolute inset-0 bg-orange-500 opacity-60"></div>

      {/* Stats content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
        {stats.map((stat, i) => (
          <Counter key={stat.label} {...stat} startDelay={i * 300} />
        ))}
      </div>
    </section>
  );
}
