
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  stagger = 0, 
  as: Component = 'div',
  style
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
    });

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const staggerClass = stagger > 0 ? `stagger-${stagger}` : "";

  return (
    <Component
      ref={domRef as any}
      style={style}
      className={`reveal ${isVisible ? 'active' : ''} ${staggerClass} ${className}`}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
