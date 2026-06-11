import { Link } from 'react-router-dom';
import {
  FaEye, FaBullseye, FaCheck, FaProjectDiagram, FaUsers,
  FaCalendarCheck, FaRulerCombined, FaArrowRight, FaQuoteLeft,
  FaAward, FaHardHat, FaHandshake, FaClock, FaUserShield, FaGem, 
  FaLightbulb, FaSeedling, FaShieldAlt, FaFileContract
} from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import StatCounter from '../components/StatCounter';
import heroImg from '../assets/images/hero_background_1780933985255.png';
import aboutHeroImg from '../assets/images/about_hero_steel_structure_1780940334952.png';
import aboutImg from '../assets/images/about_section_1780933997678.png';
import mdImg from '../assets/images/md_portrait_1780934010304.png';
import './AboutPage.css';

const partnersList = [
  {
    name: 'TVS',
    logo: (
      <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="15" y="36" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-style="italic" font-size="36" fill="#0b3c8a" letter-spacing="-1.5">TVS</text>
      </svg>
    )
  },
  {
    name: 'Saint-Gobain',
    logo: (
      <svg viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 22 C55 8, 105 8, 135 22" stroke="#0f4c9c" strokeWidth="3" strokeLinecap="round" />
        <line x1="45" y1="18" x2="45" y2="26" stroke="#f26522" strokeWidth="2.5" />
        <line x1="53" y1="15" x2="53" y2="26" stroke="#f7931e" strokeWidth="2.5" />
        <line x1="61" y1="13" x2="61" y2="26" stroke="#ffc20e" strokeWidth="2.5" />
        <line x1="69" y1="12" x2="69" y2="26" stroke="#8dc63f" strokeWidth="2.5" />
        <line x1="77" y1="11" x2="77" y2="26" stroke="#00a89f" strokeWidth="2.5" />
        <line x1="85" y1="11" x2="85" y2="26" stroke="#00aeef" strokeWidth="2.5" />
        <line x1="93" y1="12" x2="93" y2="26" stroke="#0054a6" strokeWidth="2.5" />
        <line x1="101" y1="13" x2="101" y2="26" stroke="#2e3192" strokeWidth="2.5" />
        <line x1="109" y1="15" x2="109" y2="26" stroke="#662d91" strokeWidth="2.5" />
        <line x1="117" y1="18" x2="117" y2="26" stroke="#ec008c" strokeWidth="2.5" />
        <text x="80" y="44" font-family="'Outfit', sans-serif" font-weight="800" font-size="12" fill="#133c7a" text-anchor="middle" letter-spacing="1">SAINT-GOBAIN</text>
      </svg>
    )
  },
  {
    name: 'Daikin',
    logo: (
      <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(5, 5)">
          <path d="M0 28 L10 6 L30 18 L18 32 Z" fill="#00aeef" />
          <path d="M10 6 L30 18 L24 20 L6 8 Z" fill="#0072bc" opacity="0.35" />
          <text x="38" y="27" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-size="24" fill="#0054a6" letter-spacing="0.5">DAIKIN</text>
        </g>
      </svg>
    )
  },
  {
    name: 'JSW',
    logo: (
      <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 10 C45 4, 75 6, 85 14 C65 12, 48 12, 30 16 Z" fill="#e8382c" />
        <text x="15" y="38" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-style="italic" font-size="34" fill="#005ea6" letter-spacing="-1">JSW</text>
      </svg>
    )
  },
  {
    name: 'Tata Steel',
    logo: (
      <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" font-family="'Outfit', sans-serif" font-weight="900" font-size="22" fill="#005691" letter-spacing="0.5">TATA STEEL</text>
      </svg>
    )
  },
  {
    name: 'peb steel',
    logo: (
      <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="36" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" fill="#0f4c9c" letter-spacing="-1">peb</text>
        <circle cx="13" cy="11" r="3.5" fill="#e8382c" />
        <circle cx="37" cy="11" r="3.5" fill="#e8382c" />
        <text x="62" y="20" font-family="'Inter', sans-serif" font-weight="800" font-size="10" fill="#e8382c" letter-spacing="0.5">steel</text>
        <text x="62" y="31" font-family="'Inter', sans-serif" font-weight="600" font-size="9" fill="#58595b" letter-spacing="0.2">metal</text>
        <text x="62" y="41" font-family="'Inter', sans-serif" font-weight="600" font-size="9" fill="#58595b" letter-spacing="0.2">buildings</text>
      </svg>
    )
  },
  {
    name: 'Kirby',
    logo: (
      <svg viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(5, 7)">
          <circle cx="15" cy="15" r="14" stroke="#005ea6" strokeWidth="2.5" />
          <path d="M5 15 C10 21, 20 21, 25 15" stroke="#939598" strokeWidth="1.8" />
          <path d="M5 9 C10 4, 20 4, 25 9" stroke="#939598" strokeWidth="1.8" />
          <line x1="15" y1="1" x2="15" y2="29" stroke="#939598" strokeWidth="1.8" />
          <text x="38" y="25" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-style="italic" font-size="26" fill="#005ea6" letter-spacing="-0.5">Kirby</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Essar',
    logo: (
      <svg viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="36" font-family="'Outfit', sans-serif" font-weight="900" font-size="30" fill="#1d1d1d" letter-spacing="0.5">ESSAR</text>
        <g transform="translate(112, 14)">
          <rect x="5" y="0" width="4" height="15" fill="#e8382c" rx="1" />
          <rect x="0" y="5" width="14" height="4" fill="#e8382c" rx="1" />
        </g>
      </svg>
    )
  }
];

const certificationsList = [
  {
    icon: <FaFileContract />,
    title: 'GST Registered',
    description: 'Fully compliant with state and national tax frameworks, providing official GST-ready invoicing.'
  },
  {
    icon: <FaAward />,
    title: 'MSME Registered',
    description: 'Registered under the Ministry of MSME, Govt of India, offering structural flexibility and compliance trust.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safety Compliance',
    description: 'Zero-accident site guidelines, safety harnesses, mandatory PPE, and continuous safety audits.'
  },
  {
    icon: <FaCheck />,
    title: 'Quality Assurance Process',
    description: 'Rigorous quality check gates at steel sourcing, shop welding, and final site erection phases.'
  },
  {
    icon: <FaRulerCombined />,
    title: 'Industry Standards Followed',
    description: 'Structures strictly conform to IS (Indian Standard) design codes and structural loading specifications.'
  }
];

const AboutPage = () => {
  const missionPoints = [
    'Deliver innovative and durable roofing solutions.',
    'Maintain the highest standards of quality and safety.',
    'Foster long-term relationships with clients.',
    'Continuously improve through technology and innovation.',
    'Create sustainable structures that stand the test of time.',
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHeroImg})` }}>
        <div className="about-hero-content">
          <div className="container">
            <h1 data-aos="fade-up">About Us</h1>
            <div className="about-hero-divider" data-aos="fade-up" data-aos-delay="100"></div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="about-content-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-image-wrapper">
                <img src={aboutImg} alt="About ECR Roofing Solutions" />
                <div className="about-image-accent"></div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-text">
                <h2>About ECR Roofing Solutions</h2>
                <div className="accent-line"></div>
                <p>
                  ECR Roofing Solutions is a leading structural roofing and steel construction
                  company dedicated to providing innovative and durable roofing systems for
                  industrial, commercial, and infrastructure projects.
                </p>
                <p>
                  Established with a vision to deliver quality roofing solutions, we have
                  built a reputation based on trust, reliability, and engineering excellence.
                  Our expertise spans across industrial roofing, warehouse construction,
                  steel fabrication, PEB structures, and turnkey project execution.
                </p>
                <p>
                  We work closely with our clients to understand their requirements and
                  develop practical solutions that maximize value and performance.
                </p>
                <Link to="/services" className="btn-accent" style={{ marginTop: '12px' }}>
                  Explore Our Services <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="row g-4">
            {/* Vision Card */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="vm-card-premium">
                <div className="vm-header">
                  <div className="vm-icon-circle">
                    <FaEye />
                  </div>
                  <div className="vm-title-area">
                    <span className="vm-subtitle">OUR FOUNDATION</span>
                    <h3>OUR VISION</h3>
                  </div>
                </div>
                <p className="vm-text">
                  To become one of the most trusted structural roofing and steel construction
                  companies by consistently delivering excellence in quality, safety, and
                  customer satisfaction.
                </p>
                <div className="vm-bottom-line"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="col-md-6" data-aos="fade-up">
              <div className="vm-card-premium">
                <div className="vm-header">
                  <div className="vm-icon-circle">
                    <FaBullseye />
                  </div>
                  <div className="vm-title-area">
                    <span className="vm-subtitle">OUR ROADMAP</span>
                    <h3>OUR MISSION</h3>
                  </div>
                </div>
                <ul className="vm-list">
                  {missionPoints.map((point, i) => (
                    <li key={i}>
                      <span className="vm-check-icon"><FaCheck /></span>
                      <span className="vm-point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MD MESSAGE ===== */}
      <section className="md-section-premium">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 col-md-6" data-aos="fade-right">
              <div className="md-photo-wrapper">
                <img src={mdImg} alt="A.K. Sumthaz - Managing Director" />
                <div className="md-dots-accent"></div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6" data-aos="fade-left">
              <div className="md-message-content">
                <span className="md-section-subtitle">MANAGING DIRECTOR'S MESSAGE</span>
                <div className="md-quote-symbol">"</div>
                <div className="md-paragraphs">
                  <p>
                    At ECR Roofing Solutions, we believe that quality construction begins with strong foundations and dependable roofing systems. Our commitment is to provide every client with solutions that are engineered for durability, safety, and long-term performance.
                  </p>
                  <p>
                    We take pride in delivering projects that not only meet expectations but exceed them through professional service, technical expertise, and unwavering dedication to quality.
                  </p>
                </div>
                
                <div className="md-signature-block">
                  <div className="md-signature-handwritten">A.K. Sumthaz</div>
                  <div className="md-signature-name">A.K. Sumthaz</div>
                  <div className="md-signature-title">Managing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR CORE VALUES ===== */}
      <section className="core-values-section">
        <div className="container">
          <SectionTitle
            subtitle="Core Values"
            title="OUR CORE VALUES"
          />
          <div className="values-row-wrapper">
            <div className="value-box-item" data-aos="fade-up" data-aos-delay="0">
              <div className="value-icon-circle">
                <FaUserShield />
              </div>
              <h4>Integrity</h4>
              <p>We conduct our business with honesty and transparency.</p>
            </div>
            
            <div className="value-box-item" data-aos="fade-up" data-aos-delay="100">
              <div className="value-icon-circle">
                <FaUsers />
              </div>
              <h4>Teamwork</h4>
              <p>We believe in collaboration and mutual respect.</p>
            </div>
            
            <div className="value-box-item" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon-circle">
                <FaGem />
              </div>
              <h4>Excellence</h4>
              <p>We strive for the highest standards in everything we do.</p>
            </div>
            
            <div className="value-box-item" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon-circle">
                <FaLightbulb />
              </div>
              <h4>Innovation</h4>
              <p>We embrace new technologies and better ways of working.</p>
            </div>
            
            <div className="value-box-item" data-aos="fade-up" data-aos-delay="400">
              <div className="value-icon-circle">
                <FaSeedling />
              </div>
              <h4>Sustainability</h4>
              <p>We build structures that stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS & COMPLIANCE ===== */}
      <section className="compliance-section-premium bg-off-white">
        <div className="container">
          <SectionTitle
            subtitle="Verified Standards"
            title="CERTIFICATIONS & COMPLIANCE"
          />
          <div className="compliance-grid">
            {certificationsList.map((cert, idx) => (
              <div 
                key={idx} 
                className="compliance-card-premium"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="compliance-icon-box">
                  {cert.icon}
                </div>
                <h4>{cert.title}</h4>
                <div className="compliance-divider"></div>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS & PARTNERS — Infinite Carousel ===== */}
      <section className="partners-section-premium">
        <div className="container">
          <SectionTitle
            subtitle="Our Network"
            title="CLIENTS & PARTNERS"
          />
        </div>
        <div className="logo-carousel-container">
          <div className="logo-carousel-track">
            {/* First set of logos */}
            {partnersList.map((partner, idx) => (
              <div className="logo-slide" key={`first-${idx}`}>
                <div className="partner-logo-svg-wrap">
                  {partner.logo}
                </div>
              </div>
            ))}
            {/* Second set of logos for seamless infinite looping */}
            {partnersList.map((partner, idx) => (
              <div className="logo-slide" key={`second-${idx}`}>
                <div className="partner-logo-svg-wrap">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
