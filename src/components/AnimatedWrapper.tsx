'use client';

import type { ReactNode } from 'react';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  animation: string;
  delay?: number; // in ms
  threshold?: number;
}

export function AnimatedWrapper({
  children,
  className,
  animation,
  delay = 0,
  threshold = 0.1,
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animation,
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
}
