'use client';

interface ProjectCardProps {
  title: string;
  role: string;
  imageUrl: string;
  isWide?: boolean;
}

export default function ProjectCard({ title, role, imageUrl, isWide }: ProjectCardProps) {
  return (
    <div className={`brutal-card ${isWide ? 'wide-card' : ''}`}>
      <div className="brutal-image-wrap">
        <div 
          className="brutal-image" 
          style={{ background: `url('${imageUrl}') no-repeat center center / cover` }}
        ></div>
        <button className="view-details-btn">View details <span className="btn-arrow">&rarr;</span></button>
      </div>
      <div className="brutal-info">
        <h3>{title}</h3>
        <span className="brutal-role">{role}</span>
      </div>
    </div>
  );
}
