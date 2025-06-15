"use client";
import { useEffect, useRef, useState } from "react";

const AchievementsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.25 }
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
      className='py-[50px] bg-gradient_section text-primary_700'
    >
      <div className='div-container flex flex-col gap-6'>
        <h2 className='title'>Наші досягнення</h2>
        <ul className='flex flex-col text-center gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row'>
          <AnimatedNumber
            isVisible={isVisible}
            value={26}
            label='Років на ринку України'
          />
          <AnimatedNumber
            isVisible={isVisible}
            value={1120}
            label='Активних членів спілки'
          />
          <AnimatedNumber
            isVisible={isVisible}
            value={400}
            label='Видаємо кредитів в рік'
          />
          <AnimatedNumber
            isVisible={isVisible}
            value={2}
            label='Мільйонів резервного капіталу'
          />
        </ul>
      </div>
    </section>
  );
};

interface AnimatedNumberProps {
  isVisible: boolean;
  value: number;
  label: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  isVisible,
  value,
  label,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let animationInterval: NodeJS.Timeout;

    if (isVisible) {
      const step = value / 200; // Assuming you want to reach the full value in 2 seconds (200 steps)
      let currentValue = 0;

      animationInterval = setInterval(() => {
        currentValue += step;
        setAnimatedValue(Math.min(currentValue, value)); // Ensure it doesn't exceed the target value
      }, 10); // Adjust the interval for smoother animation
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [isVisible, value]);

  return (
    <li className='md:w-[277px] lg:w-[442px]'>
      <p className='font-bold text-[32px] md:twxt-[40px]'>
        {Math.round(animatedValue)}
      </p>
      <div className='w-[50px] h-1 rounded-full bg-primary_300 my-4 mx-auto'></div>
      <p className='text-[16px] md:text-[18px] text-primary_700'>{label}</p>
    </li>
  );
};

export default AchievementsSection;
