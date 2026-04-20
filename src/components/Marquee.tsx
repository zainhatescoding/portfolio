'use client';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

interface MarqueeProps {
  testimonials: Testimonial[];
}

export default function Marquee({ testimonials }: MarqueeProps) {
  return (
    <div className="marquee-container">
      {/* Row 1 (Scrolling Left) */}
      <div className="marquee-track track-left">
        {[...Array(4)].map((_, i) => (
          testimonials.map((t, index) => (
            <div key={`${i}-${index}`} className="testimonial-card">
              <div className="cube corner top-left"></div>
              <div className="cube corner top-right"></div>
              <div className="cube corner bottom-left"></div>
              <div className="cube corner bottom-right"></div>
              <div className="quote-icon">“</div>
              <p>{t.text}</p>
              <div className="ts-author-info">
                <img src={t.avatar} alt={t.author} />
                <div className="ts-author-details">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>

      {/* Row 2 (Scrolling Right) */}
      <div className="marquee-track track-right">
        {[...Array(4)].map((_, i) => (
          testimonials.map((t, index) => (
            <div key={`${i}-${index}`} className="testimonial-card">
              <div className="cube corner top-left"></div>
              <div className="cube corner top-right"></div>
              <div className="cube corner bottom-left"></div>
              <div className="cube corner bottom-right"></div>
              <div className="quote-icon">“</div>
              <p>{t.text}</p>
              <div className="ts-author-info">
                <img src={t.avatar} alt={t.author} />
                <div className="ts-author-details">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
}
