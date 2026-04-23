'use client';

interface CaseStudyCardProps {
  title: string;
  readTime: string;
  date: string;
  author: string;
  imageUrl: string;
}

export default function CaseStudyCard({ title, readTime, date, author, imageUrl }: CaseStudyCardProps) {
  return (
    <div className="cs-item">
      <div className="cs-image-wrap">
        <img
          src={imageUrl}
          alt={title}
          className="cs-image"
          style={{ objectFit: 'cover' }}
        />
        <button className="view-details-btn">View details <span className="btn-arrow">&rarr;</span></button>
      </div>
      <div className="cs-info">
        <h4>{title}</h4>
        <p>{readTime}, {date}<br />Author: {author}</p>
      </div>
    </div>
  );
}
