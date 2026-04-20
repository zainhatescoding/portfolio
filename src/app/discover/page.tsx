'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DetailsModal from '@/components/DetailsModal';
import SectionHeader from '@/components/SectionHeader';
import Logo from '@/components/Logo';
import Link from 'next/link';

const accolades = [
  { title: "Project Alpha", role: "Web Development", date: "2026", desc: "A high-performance web application designed for data visualization.", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" },
  { title: "Beta Branding", role: "Brand Identity", date: "2026", desc: "Minimalist branding for a sustainable fashion label.", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800" },
  { title: "Gamma UI", role: "UI Engineering", date: "2025", desc: "Advanced UI kit for modern internal dashboards.", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800" },
  { title: "Delta Motion", role: "Motion Graphics", date: "2025", desc: "Seamless motion design for a tech startup reveal.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" },
  { title: "Epsilon Web", role: "E-commerce", date: "2025", desc: "E-commerce revolution for luxury watches.", image: "https://images.unsplash.com/photo-1541462608141-ad4d157ee78a?q=80&w=800" },
  { title: "Zeta App", role: "App Design", date: "2024", desc: "A lifestyle app focused on mental well-being.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
  { title: "Eta Studio", role: "Frontend Dev", date: "2024", desc: "Creative studio website with brutalist elements.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800" },
  { title: "Theta VR", role: "VR Design", date: "2024", desc: "Virtual reality experience for architectural walkthroughs.", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800" }
];

export default function Discover() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; date: string; desc: string; images?: string[] } | null>(null);

  const openModal = (data: { title: string; date: string; desc: string; image?: string }) => {
    setModalData({ ...data, images: data.image ? [data.image] : [] });
    setModalOpen(true);
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="container">
      <nav className="hero-nav">
        <div className="nav-logo">
          <Logo style={{ width: 40, height: 40 }} />
        </div>
        <div className="nav-right">
          <Link href="/" className="nav-link discover-link">Home</Link>
        </div>
      </nav>

      <section className="discover-projects" style={{ marginTop: '15vh' }}>
        <SectionHeader title="Everything, by me." style={{ justifyContent: 'center' }} />

        <div className="cs-row" style={{ marginBottom: '2rem' }}>
          <div className="cs-grid">
            {accolades.slice(0, 4).map((item, i) => (
              <div key={i} className="cs-item">
                <div className="cs-image-wrap">
                  <div className="cs-image" style={{ background: `url('${item.image}') no-repeat center center / cover` }}></div>
                  <button className="view-details-btn cs-btn" onClick={() => openModal(item)}>
                    View details <span className="btn-arrow">&rarr;</span>
                  </button>
                  <div className="cube corner top-left"></div>
                  <div className="cube corner top-right"></div>
                  <div className="cube corner bottom-left"></div>
                  <div className="cube corner bottom-right"></div>
                </div>
                <div className="cs-info">
                  <h4>{item.title}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-row" style={{ marginBottom: '2rem' }}>
          <div className="cs-grid">
            {accolades.slice(4, 8).map((item, i) => (
              <div key={i} className="cs-item">
                <div className="cs-image-wrap">
                  <div className="cs-image" style={{ background: `url('${item.image}') no-repeat center center / cover` }}></div>
                  <button className="view-details-btn cs-btn" onClick={() => openModal(item)}>
                    View details <span className="btn-arrow">&rarr;</span>
                  </button>
                  <div className="cube corner top-left"></div>
                  <div className="cube corner top-right"></div>
                  <div className="cube corner bottom-left"></div>
                  <div className="cube corner bottom-right"></div>
                </div>
                <div className="cs-info">
                  <h4>{item.title}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer reveal-up">
        <div className="footer-banner">
          <h2>zainftw</h2>
        </div>
      </footer>

      <DetailsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />
    </main>
  );
}
