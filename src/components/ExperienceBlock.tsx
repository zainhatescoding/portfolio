'use client';

interface ExperienceBlockProps {
  company: string;
  skills: string;
  date: string;
  description: string;
  logoUrl?: string;
  onOpen: (data: { title: string; date: string; desc: string }) => void;
}

export default function ExperienceBlock({ company, skills, date, description, logoUrl, onOpen }: ExperienceBlockProps) {
  return (
    <div className="exp-block">
      <div className="cube corner top-left"></div>
      <div className="cube corner top-right"></div>
      <div className="cube corner bottom-left"></div>
      <div className="cube corner bottom-right"></div>
      
      {logoUrl && (
        <div className="exp-logo-wrap">
          <img src={logoUrl} alt={`${company} logo`} className="exp-logo" />
        </div>
      )}
      <h4 className="company-name">{company}</h4>
      <div className="skills-tag">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3z"/></svg>
        Skills: {skills}
      </div>
      <div className="exp-date" style={{ marginBottom: '2rem' }}>{date}</div>
      <button 
        className="view-details-btn" 
        onClick={() => onOpen({ title: company, date, desc: description })}
      >
        View details <span className="btn-arrow">&rarr;</span>
      </button>
    </div>
  );
}
