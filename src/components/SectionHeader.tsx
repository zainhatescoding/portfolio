'use client';

import Logo from './Logo';

interface SectionHeaderProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionHeader({ title, className, style }: SectionHeaderProps) {
  return (
    <div className={`section-header reveal-up ${className || ''}`} style={style}>
      <Logo className="section-logo" />
      <h2 className="section-title reveal-text">{title}</h2>
    </div>
  );
}
