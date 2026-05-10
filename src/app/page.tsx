'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ExperienceBlock from '@/components/ExperienceBlock';
import Marquee from '@/components/Marquee';
import DetailsModal from '@/components/DetailsModal';
import SectionHeader from '@/components/SectionHeader';
import CaseStudyCard from '@/components/CaseStudyCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    author: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=150"
  },
  {
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    author: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://images.unsplash.com/photo-1560159905-ebdd4851ab48?q=80&w=150"
  },
  {
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    author: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://images.unsplash.com/photo-1592501062608-8e62241cf03f?q=80&w=150"
  }
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; date: string; desc: string; images?: string[] } | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const openModal = (data: { title: string; date: string; desc: string; images?: string[] }) => {
    setModalData(data);
    setModalOpen(true);
  };
  useEffect(() => {
    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => observer.observe(el));

    // Footer observer for floating button
    const footer = document.querySelector('.site-footer');
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsFooterVisible(entry.isIntersecting);
      });
    }, { threshold: 0, rootMargin: "0px" });

    if (footer) footerObserver.observe(footer);

    // GSAP Parallax
    gsap.utils.toArray<HTMLElement>('.brutal-image').forEach(image => {
      gsap.to(image, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: image.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <main className="container">
      <Navbar />

      <a href="mailto:mzaftw@gmail.com" className={`floating-contact ${isFooterVisible ? 'hidden' : ''}`}>
        Get in touch <span className="btn-arrow">&rarr;</span>
      </a>

      {/* Hero Section */}
      <section className="hero hero-bottom-centered">
        <div className="hero-video-wrapper">
          <video
            id="hero-bg-video"
            src="/newvid.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/poster.jpg"
            preload="metadata"
            className="video-loading"
          />
          <div className="hero-fade-overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-frame reveal-up">
            <div className="cube corner top-left"></div>
            <div className="cube corner top-right"></div>
            <div className="cube corner bottom-left"></div>
            <div className="cube corner bottom-right"></div>

            <div className="hero-text-content">
              <h1 className="hero-headline reveal-text">Muhammad Zain.</h1>
              <h2 className="hero-sub reveal-text" style={{ transitionDelay: '0.1s' }}>
                Design speaks, so do I.
              </h2>
              <div className="hero-sub-bottom reveal-text" style={{ transitionDelay: '0.2s' }}>
                Few Years of Design, Experienced by me.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="work" className="works">
        <SectionHeader title="My Work" />

        <div className="works-row">
          <div className="works-row-header">
            <div className="header-empty"></div>
            <div className="header-empty"></div>
            <div className="header-text">
              <p>My showcase<br /><b>the best i&apos;ve ever built</b></p>
            </div>
          </div>
          <div className="brutalist-grid">
            <ProjectCard title="Orchids For Peace" role="Web Design." imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" />
            <ProjectCard title="Email Verify" role="Component Design." imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" />
            <ProjectCard title="Vyxr Labs" role="Website Overhaul." imageUrl="https://images.unsplash.com/photo-1550859491-19011afb96f5?q=80&w=1600&auto=format&fit=crop" isWide />
          </div>
        </div>

        <div className="works-row reveal-up">
          <div className="brutalist-grid">
            <ProjectCard title="Vyxr Labs Social" role="Media Design." imageUrl="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop" />
            <ProjectCard title="Limited Shinigami" role="Header Design." imageUrl="https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=800&auto=format&fit=crop" />
            <ProjectCard title="Identity (Taqi)" role="Identity Design." imageUrl="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1600&auto=format&fit=crop" isWide />
          </div>
        </div>
      </section>

      {/* Motto */}
      <section id="my-motto" className="my-motto" style={{ margin: '0 auto' }}>
        <SectionHeader title="My Motto" style={{ justifyContent: 'center' }} />
        <div className="manifesto-line" style={{ margin: '0 auto' }}>
          <div className="cube"></div>
          <p style={{ textAlign: 'center' }}>Simplicity is the ultimate sophistication.<br />Designing with intent and crystal like precision.</p>
          <div className="cube"></div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="exp-container" style={{ width: '100%' }}>
          <SectionHeader title="Experience" />
          <div className="exp-grid">
            <ExperienceBlock
              company="Paymo" skills="Design Systems, UI/UX" date="2025 Apr — 2025 Jun"
              logoUrl="/Paymo.svg"
              description="Lead the art direction and interactive design for high-profile architecture agencies. Built complete brutalist UI systems from the ground up, directing motion, typography, and frontend aesthetics. Handled large scale deployment and continuous iteration loops with stakeholders."
              onOpen={openModal}
            />
            <ExperienceBlock
              company="Vyxr Labs" skills="Product Design" date="2025 Jun — 2025 Dec"
              logoUrl="/Vyxr.svg"
              description="Conceptual digital platform utilizing stark contrasts and deep motion language. Integrated advanced WebGL interactions and GSAP scrolling behaviors. Architected robust frontend state flow for seamless dynamic routing without hard reloads."
              onOpen={openModal}
            />
            <ExperienceBlock
              company="Clustox" skills="UI/UX, Product Design" date="2025 Dec — Present"
              logoUrl="/Clustox.svg"
              description="Minimalist mobile banking FinTech startup exploring zero-border components and typography-forward layouts. Designed user flows to minimize latency and friction when tracking expenses. Built a scalable component library consumed by the native iOS teams."
              onOpen={openModal}
            />
            <ExperienceBlock
              company="The Services Tree" skills="Video Asset Design" date="2025 Sept — 2025 Nov"
              logoUrl="/TheServicesTree.svg"
              description="A boutique experimental film studio focusing on avant-garde narrative and visual exploration. Managed post-production graphical overlays. Assisted in storyboard conception and experimental video manipulation workflows."
              onOpen={openModal}
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="case-studies">
        <SectionHeader title="Case Studies" />
        <div className="cs-grid">
          <CaseStudyCard
            title="When is it time for a Rebrand?"
            readTime="4m read-time"
            date="Mon 9 March '26"
            author="Muhammad Zain"
            imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
          />
          <CaseStudyCard
            title="Process of a R—K project"
            readTime="3m read-time"
            date="Fri 20 February '26"
            author="Muhammad Zain"
            imageUrl="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop"
          />
          <CaseStudyCard
            title="Presence as a brand cornerstone"
            readTime="3m read-time"
            date="Fri 9 January '26"
            author="Muhammad Zain"
            imageUrl="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop"
          />
          <CaseStudyCard
            title="Creation of the R—K brand"
            readTime="5m read-time"
            date="Fri 5 December '25"
            author="Muhammad Zain"
            imageUrl="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </section>

      <section id="testimonials">
        <SectionHeader title="Testimonials" style={{ justifyContent: 'center' }} />
        <Marquee testimonials={testimonials} />
      </section>

      {/* About Me */}
      <section id="about" className="about-me reveal-up">
        <div className="about-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
          <SectionHeader title="About Me" style={{ marginBottom: '2rem', padding: '0', justifyContent: 'center' }} />
          <div className="about-narrative-box">
            <h2 className="bio-lead">
              I am a multidisciplinary designer and developer crafted for the future.
            </h2>
            <p className="bio-sub" style={{ margin: '0 auto', maxWidth: '600px' }}>
              Merging brutalist precision with sophisticated motion, I craft interfaces that don&apos;t just function, they resonate. Based in the digital landscape, I work at the intersection of aesthetics and utility.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <a href="mailto:mzaftw@gmail.com" className="floating-contact" style={{ position: 'relative', bottom: 'auto', left: 'auto', display: 'inline-block' }}>
                Get in touch <span className="btn-arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <DetailsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />
    </main>
  );
}
