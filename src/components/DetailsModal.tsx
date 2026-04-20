'use client';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    date: string;
    desc: string;
    images?: string[];
  } | null;
}

export default function DetailsModal({ isOpen, onClose, data }: DetailsModalProps) {
  if (!data) return null;

  return (
    <div className={`silhouette-modal ${isOpen ? 'open' : ''}`} id="exp-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-sheet">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-content">
          <h3 id="modal-title">{data.title}</h3>
          <span id="modal-date" className="modal-date">{data.date}</span>
          <hr className="modal-divider" />
          <p id="modal-desc" className="modal-desc">{data.desc}</p>
          <div id="modal-gallery" className="modal-gallery">
            {data.images?.map((url, i) => (
              <img key={i} src={url} alt={`${data.title} showcase ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
