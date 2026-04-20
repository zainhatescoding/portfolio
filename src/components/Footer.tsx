import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer reveal-up">
      {/* Top Grid */}
      <div className="footer-grid">
        <div className="footer-col">
          <Link href="tel:+923244897599" className="footer-link">
            <div className="link-content">
              <span className="default-text">92 324 4897599 <span className="btn-arrow">&rarr;</span></span>
              <span className="hover-text">Call me <span className="btn-arrow">&rarr;</span></span>
              <div className="link-underline"></div>
            </div>
            <div className="cube corner top-left"></div>
            <div className="cube corner top-right"></div>
            <div className="cube corner bottom-left"></div>
            <div className="cube corner bottom-right"></div>
          </Link>
        </div>
        <div className="footer-col">
          <Link href="mailto:mzaftw@gmail.com" className="footer-link">
            <div className="link-content">
              <span className="default-text">mzaftw@gmail.com <span className="btn-arrow">&rarr;</span></span>
              <span className="hover-text">Contact via email <span className="btn-arrow">&rarr;</span></span>
              <div className="link-underline"></div>
            </div>
            <div className="cube corner top-left"></div>
            <div className="cube corner top-right"></div>
            <div className="cube corner bottom-left"></div>
            <div className="cube corner bottom-right"></div>
          </Link>
        </div>
        <div className="footer-col">
          <Link href="#collab" className="footer-link">
            <div className="link-content">
              <span className="default-text">Start collaboration <span className="btn-arrow">&rarr;</span></span>
              <span className="hover-text">Lets Get to Work <span className="btn-arrow">&rarr;</span></span>
              <div className="link-underline"></div>
            </div>
            <div className="cube corner top-left"></div>
            <div className="cube corner top-right"></div>
            <div className="cube corner bottom-left"></div>
            <div className="cube corner bottom-right"></div>
          </Link>
        </div>
        <div className="footer-col">
        </div>
      </div>

      {/* Banner */}
      <div className="footer-banner">
        <h2>zainftw</h2>
      </div>

      {/* Bottom Grid */}
      <div className="footer-bottom-grid">
        <div className="f-bot-col">
          <p>Building for agencies<br />& brands</p>
        </div>
        <div className="f-bot-col">
          <p>Availability from<br />May &apos;26</p>
        </div>
        <div className="f-bot-col">
          <p>Instagram<br />@archiveofzain</p>
        </div>
        <div className="f-bot-col">
          <p>LinkedIn<br />@Zain Athar</p>
        </div>
      </div>
    </footer>
  );
}
