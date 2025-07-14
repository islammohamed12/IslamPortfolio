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

  // Dynamically determine number of rows based on skills count
  const getNumberOfRows = (skillsCount) => {
    if (skillsCount <= 8) return 1;
    if (skillsCount <= 16) return 2;
    return 3;
  };

  const numberOfRows = getNumberOfRows(skills.length);
  const skillsPerRow = Math.ceil(skills.length / numberOfRows);

  // Distribute skills across the determined number of rows
  const rows = [];
  for (let i = 0; i < numberOfRows; i++) {
    const startIndex = i * skillsPerRow;
    const endIndex = startIndex + skillsPerRow;
    rows.push(skills.slice(startIndex, endIndex));
  }

  // Calculate height based on number of rows
  const cardHeight = 80; // Approximate height of each card
  const rowGap = 12; // gap-3 = 12px
  const containerHeight = (cardHeight * numberOfRows) + (rowGap * (numberOfRows - 1)) + 16; // 16px for bottom padding

  return (
    <div className="relative" ref={containerRef}>
      {/* Horizontal scrolling container with dynamic height */}
      <div 
        className="overflow-x-auto overflow-y-hidden pb-4 skills-scroll-container"
        style={{ height: `${containerHeight}px` }}
      >
        <div className="flex flex-col gap-3 min-w-max">
          {rows.map((rowSkills, rowIndex) => (
            <div key={rowIndex} className="flex gap-3 sm:gap-4">
              {rowSkills.map((skill, skillIndex) => (
                <div key={skillIndex + rowIndex * skillsPerRow} className="w-40 sm:w-44 flex-shrink-0">
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
          ))}
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