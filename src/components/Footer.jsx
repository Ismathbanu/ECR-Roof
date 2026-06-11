import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/industries', label: 'Industries' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const services = [
    { path: '/services', label: 'Industrial Roofing' },
    { path: '/services', label: 'PEB Structures' },
    { path: '/services', label: 'Steel Fabrication' },
    { path: '/services', label: 'Roofing Sheets' },
    { path: '/services', label: 'Maintenance & Repairs' },
  ];

  return (
    <>
      <footer className="footer-ecr">
        <div className="footer-top">
          <div className="container">
            <div className="row g-4">
              {/* Brand Column */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-brand">
                  <div className="brand-logo-footer">ECR</div>
                  <h4>ECR Roofing Solutions</h4>
                  <p className="tagline">Complete Structural Roofing Solutions</p>
                </div>
                <p className="footer-about-text">
                  Industrial Roofing | PEB Structures | Steel Fabrication | Roofing Installation | Maintenance Services
                </p>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <h5 className="footer-heading">Quick Links</h5>
                <ul className="footer-links">
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="col-lg-3 col-md-6">
                <h5 className="footer-heading">Our Services</h5>
                <ul className="footer-links">
                  {services.map((service, i) => (
                    <li key={i}>
                      <Link to={service.path}>{service.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <h5 className="footer-heading">Contact Info</h5>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="footer-contact-text">
                    No.T-1, SIDCO Industrial Estate,<br />
                    Semmandalam, Cuddalore - 607001
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="footer-contact-text">
                    <a href="tel:+918680802244">+91 86808 02244</a><br />
                    <a href="tel:+919489228526">+91 94892 28526</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="footer-contact-text">
                    <a href="mailto:info@evercoolroofing.com">info@evercoolroofing.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="footer-bottom-text">
                  © {new Date().getFullYear()} ECR Roofing Solutions. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p className="footer-quote">
                  "Engineering Stronger Roofs for Stronger Businesses."
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaChevronUp />
      </button>
    </>
  );
};

export default Footer;
