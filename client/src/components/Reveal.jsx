import { useEffect, useRef, useState } from 'react';

/**
 * Wraps children and adds a "reveal" fade/slide-up animation the first time
 * the element scrolls into view. Respects prefers-reduced-motion (handled
 * globally in animations.css) and only animates once per element.
 *
 * Usage: <Reveal><div>content</div></Reveal>
 *        <Reveal delay={1}>...</Reveal>  → staggers by 80ms per step
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay * 80}ms` }}
    >
      {children}
    </Tag>
  );
}
