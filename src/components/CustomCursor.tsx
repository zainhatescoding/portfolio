'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const glowPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateGlow = () => {
      const { x: targetX, y: targetY } = mouseRef.current;
      const { x: currentX, y: currentY } = glowPosRef.current;

      const nextX = currentX + (targetX - currentX) * 0.1;
      const nextY = currentY + (targetY - currentY) * 0.1;

      glowPosRef.current = { x: nextX, y: nextY };

      if (glowRef.current) {
        glowRef.current.style.left = `${nextX}px`;
        glowRef.current.style.top = `${nextY}px`;
      }

      requestRef.current = requestAnimationFrame(animateGlow);
    };

    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
      requestRef.current = requestAnimationFrame(animateGlow);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} style={{
        position: 'fixed',
        width: '6px',
        height: '6px',
        background: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)'
      }} />
      <div id="cursor-glow" ref={glowRef} style={{
        position: 'fixed',
        width: '40px',
        height: '40px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s, height 0.3s, background 0.3s'
      }} />
    </>
  );
}
