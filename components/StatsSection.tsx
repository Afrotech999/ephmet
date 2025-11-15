"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "Year Founded", value: 2014 },
  { label: "Active Employees", value: 2000, suffix: "+" },
  { label: "Production Line", value: 30, suffix: "+" },
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  isVisible,
}: {
  stat: { label: string; value: number; suffix?: string };
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 30));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(counter);
  }, [isVisible, stat.value]);

  return (
    <div className="p-4">
      <h3 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-2">
        {count.toLocaleString()}
        {stat.suffix ?? ""}
      </h3>
      <p className="text-gray-500 dark:text-gray-300 font-medium">
        {stat.label}
      </p>
    </div>
  );
}
