"use client";
import { useEffect, useRef, useState } from 'react';
import SkillCard from './SkillCard';

export default function AutoScrollSkills({ skills, lang }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = 0;
    let animationId;

    const autoScroll = () => {
      if (!isVisible) {
        cancelAnimationFrame(animationId);
        return;
      }

      scrollPosition += 1 * scrollDirection; // Adjust speed here

      // Change direction when reaching edges
      if (scrollPosition >= maxScroll) {
        setScrollDirection(-1);
        scrollPosition = maxScroll;
      } else if (scrollPosition <= 0) {
        setScrollDirection(1);
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isVisible, scrollDirection]);

  const firstHalf = skills.slice(0, Math.ceil(skills.length / 2));
  const secondHalf = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="relative" ref={containerRef}>
      {/* Horizontal scrolling container with fixed height */}
      <div className="overflow-x-auto overflow-y-hidden h-[500px] pb-4 skills-scroll-container">
        <div className="flex flex-col gap-6 min-w-max">
          {/* First Row */}
          <div className="flex gap-4 sm:gap-6 skills-row-1">
            {firstHalf.map((skill, index) => (
              <div key={index} className="w-48 sm:w-56 flex-shrink-0">
                <SkillCard 
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  color={skill.color}
                  category={skill.category}
                />
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="flex gap-4 sm:gap-6 skills-row-2">
            {secondHalf.map((skill, index) => (
              <div key={index + firstHalf.length} className="w-48 sm:w-56 flex-shrink-0">
                <SkillCard 
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  color={skill.color}
                  category={skill.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicators */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-gray-600">‹</span>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-gray-600">›</span>
      </div>
    </div>
  );
} 