'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [time, setTime] = useState('00:00:00');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const timer = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll);

    updateTime();
    handleScroll();

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-wrapper">
      <div className={`nav-gradient-overlay ${isScrolled ? 'opacity-0' : ''}`} />

      {/* Hero Navigation - Visible at top */}
      <nav className={`hero-nav ${isScrolled ? 'hidden' : ''}`}>
        <div className="nav-logo">
          <Link href="/" className="logo-link">
            <Logo style={{ width: 44, height: 44 }} />
          </Link>
        </div>

        <div className="nav-columns">
          <div className="nav-col">
            <span className="nav-title">▶ Quick Links</span>
            <Link href="#work" className="nav-link">My Work</Link>
            <Link href="#insights" className="nav-link">Experience</Link>
          </div>
          <div className="nav-col">
            <span className="nav-title">▶ Narrative</span>
            <Link href="#about" className="nav-link">About Me</Link>
            <Link href="#connect" className="nav-link">Connect</Link>
          </div>
          <div className="nav-col">
            <span className="nav-title">▶ POC</span>
            <Link href="#brands" className="nav-link">Testimonials</Link>
            <Link href="#agencies" className="nav-link">Case Studies</Link>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-time">
            <span className="time-box">{time}</span>
            <div className="time-label">
              <span>CET</span>
              <span>ENS</span>
            </div>
          </div>
          <Link href="/discover" className="nav-link discover-link">Discover</Link>
        </div>
      </nav>

      {/* Compact Navigation - Slides down on scroll */}
      <nav className={`compact-nav ${isScrolled ? 'visible' : ''}`}>
        <div className="nav-logo">
          <Link href="/" className="logo-link">
            <Logo style={{ width: 32, height: 32 }} />
          </Link>
        </div>

        <div className="nav-columns">
          <div className="nav-col">
            <button className="nav-title">
              Work <ChevronDown size={12} className="chevron-icon" />
            </button>
            <div className="nav-dropdown">
              <Link href="#work" className="nav-link">My Work</Link>
              <Link href="#insights" className="nav-link">Experience</Link>
            </div>
          </div>

          <div className="nav-col">
            <button className="nav-title">
              About <ChevronDown size={12} className="chevron-icon" />
            </button>
            <div className="nav-dropdown">
              <Link href="#about" className="nav-link">About Me</Link>
              <Link href="#connect" className="nav-link">Connect</Link>
            </div>
          </div>

          <div className="nav-col">
            <button className="nav-title">
              POC <ChevronDown size={12} className="chevron-icon" />
            </button>
            <div className="nav-dropdown">
              <Link href="#brands" className="nav-link">Testimonials</Link>
              <Link href="#agencies" className="nav-link">Case Studies</Link>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <Link href="/discover" className="nav-link discover-link">Discover</Link>
        </div>
      </nav>
    </div>
  );
}
