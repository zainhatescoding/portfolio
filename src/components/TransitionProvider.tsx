'use client';

import { useEffect, useRef, useState, createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import Logo from './Logo';

interface TransitionContextType {
  transitionTo: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error('useTransition must be used within a TransitionProvider');
  return context;
};

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const transitionTo = (href: string) => {
    if (isTransitioning || pathname === href) return;
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    // Animation out (Cover screen)
    tl.to(curtainRef.current, {
      scaleY: 1,
      duration: 0.8,
      ease: 'power4.inOut',
    })
    .to(logoRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, "-=0.4");
  };

  useEffect(() => {
    // Animation in (Reveal screen)
    // This runs whenever the pathname changes
    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false),
    });

    tl.set(curtainRef.current, { scaleY: 1 })
      .set(logoRef.current, { opacity: 1 })
      .to(logoRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      })
      .to(curtainRef.current, {
        scaleY: 0,
        duration: 0.8,
        ease: 'power4.inOut',
      }, "-=0.2");
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ transitionTo }}>
      {children}
      <div
        ref={overlayRef}
        className="transition-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: isTransitioning ? 'all' : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          ref={curtainRef}
          className="transition-curtain"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#0b0b0b',
            transformOrigin: 'top',
            transform: 'scaleY(0)',
          }}
        />
        <div
          ref={logoRef}
          className="transition-logo"
          style={{
            position: 'relative',
            zIndex: 10000,
            opacity: 0,
            color: 'var(--text-primary)',
          }}
        >
          <Logo style={{ width: 80, height: 80 }} />
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
