import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheck, FaArrowRight, FaIndustry, FaBuilding, FaCogs, FaLayerGroup,
  FaTools, FaProjectDiagram, FaUsers, FaCalendarCheck, FaRulerCombined,
  FaShieldAlt, FaClock, FaHandshake, FaMapMarkerAlt, FaStar, FaQuoteLeft,
  FaHardHat, FaDraftingCompass, FaWarehouse, FaTractor, FaRoad,
  FaGraduationCap, FaClipboardCheck, FaTruck, FaCheckCircle, FaPhoneAlt,
  FaCertificate, FaBoxes, FaLongArrowAltRight, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import StatCounter from '../components/StatCounter';
import heroIndustrialImg from '../assets/images/hero_industrial_building_1780936715270.png';
import heroImg from '../assets/images/hero_background_1780933985255.png';
import aboutImg from '../assets/images/about_section_1780933997678.png';
import projectFactory from '../assets/images/project_factory_roofing.png';
import projectWarehouse from '../assets/images/project_warehouse_peb.png';
import projectAgri from '../assets/images/project_agriculture_shed.png';
import projectIndustrial from '../assets/images/project_industrial_1780934920908.png';
import industrialImg from '../assets/images/service_industrial_roofing_1780934030238.png';
import pebImg from '../assets/images/service_peb_1780934045407.png';
import fabricationImg from '../assets/images/service_fabrication_1780934057825.png';
import sheetsImg from '../assets/images/service_roofing_sheets_1780934076469.png';
import maintenanceImg from '../assets/images/service_maintenance_1780934089962.png';
import './HomePage.css';

const HomePage = () => {

  const featuredProjects = [
    {
      image: projectAgri,
      title: 'Food Processing Unit',
      location: 'Hosur, Tamil Nadu',
      area: '60,000 Sq.Ft.',
      date: '2025',
      tag: 'Agriculture',
    },
    {
      image: projectWarehouse,
      title: 'Logistics Warehouse',
      location: 'Sriperumbudur, Tamil Nadu',
      area: '1,20,000 Sq.Ft.',
      date: '2024',
      tag: 'Warehousing',
    },
    {
      image: projectFactory,
      title: 'Automotive Manufacturing Unit',
      location: 'Oragadam, Chennai',
      area: '85,000 Sq.Ft.',
      date: '2024',
      tag: 'Manufacturing',
    },
    {
      image: projectIndustrial,
      title: 'Steel Structure Fabrication',
      location: 'Coimbatore, Tamil Nadu',
      area: '45,000 Sq.Ft.',
      date: '2024',
      tag: 'Industrial',
    },
    // Duplicate set to enable infinite scroll across all screen sizes
    {
      image: projectAgri,
      title: 'Food Processing Unit',
      location: 'Hosur, Tamil Nadu',
      area: '60,000 Sq.Ft.',
      date: '2025',
      tag: 'Agriculture',
    },
    {
      image: projectWarehouse,
      title: 'Logistics Warehouse',
      location: 'Sriperumbudur, Tamil Nadu',
      area: '1,20,000 Sq.Ft.',
      date: '2024',
      tag: 'Warehousing',
    },
    {
      image: projectFactory,
      title: 'Automotive Manufacturing Unit',
      location: 'Oragadam, Chennai',
      area: '85,000 Sq.Ft.',
      date: '2024',
      tag: 'Manufacturing',
    },
    {
      image: projectIndustrial,
      title: 'Steel Structure Fabrication',
      location: 'Coimbatore, Tamil Nadu',
      area: '45,000 Sq.Ft.',
      date: '2024',
      tag: 'Industrial',
    },
  ];

  const servicesList = [
    {
      num: '01',
      title: 'Industrial Roofing',
      desc: 'High-durability roofing systems engineered for factories, warehouses, and processing units across Tamil Nadu.',
      image: industrialImg,
    },
    {
      num: '02',
      title: 'PEB Structures',
      desc: 'Complete Pre-Engineered Building solutions offering rapid construction, durability, and layout flexibility.',
      image: pebImg,
    },
    {
      num: '03',
      title: 'Structural Steel Fabrication',
      desc: 'In-house precision engineering and fabrication of custom roof trusses, platforms, and heavy frameworks.',
      image: fabricationImg,
    },
    {
      num: '04',
      title: 'Roofing Sheet Installation',
      desc: 'Professional installation of premium JSW and TATA BlueScope sheets with thermal and waterproofing specs.',
      image: sheetsImg,
    },
    {
      num: '05',
      title: 'Roof Maintenance & Repairs',
      desc: 'Preventive inspection, leak detection, and structural maintenance to extend the lifespan of your roof.',
      image: maintenanceImg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setVisibleCards(1);
      } else if (window.innerWidth < 992) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1200) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = featuredProjects.length - visibleCards;
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [visibleCards, autoplay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = featuredProjects.length - visibleCards;
      if (prev === 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = featuredProjects.length - visibleCards;
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const industries = [
    { icon: <FaIndustry />, title: 'Manufacturing', desc: 'Factories, assembly plants & production floors' },
    { icon: <FaWarehouse />, title: 'Warehousing', desc: 'Logistics hubs, cold storage & distribution centres' },
    { icon: <FaBuilding />, title: 'Commercial', desc: 'Office complexes, retail parks & showrooms' },
    { icon: <FaTractor />, title: 'Agriculture', desc: 'Crop storage, agri-processing & farm sheds' },
    { icon: <FaRoad />, title: 'Infrastructure', desc: 'Toll plazas, bus depots & civic structures' },
    { icon: <FaGraduationCap />, title: 'Education', desc: 'Schools, colleges & institutional campuses' },
  ];

  const whyChoose = [
    {
      icon: <MdEngineering />,
      title: 'Engineering Expertise',
      proof: '10+ years structural engineering team',
    },
    {
      icon: <FaHardHat />,
      title: 'Dedicated Installation Team',
      proof: '80+ trained on-site professionals',
    },
    {
      icon: <FaCogs />,
      title: 'In-House Fabrication',
      proof: 'Own fabrication unit — faster lead times',
    },
    {
      icon: <FaBoxes />,
      title: 'Quality Materials',
      proof: 'JSW, TATA BlueScope & Tata Steel sourced',
    },
    {
      icon: <FaClock />,
      title: 'Timely Delivery',
      proof: '98% on-time completion rate',
    },
    {
      icon: <FaCertificate />,
      title: 'Safety Compliance',
      proof: 'OSHA-aligned protocols on every site',
    },
  ];

  const processSteps = [
    { step: '01', icon: <FaClipboardCheck />, title: 'Site Inspection', desc: 'Thorough site visit — dimensions, soil, load requirements.' },
    { step: '02', icon: <FaDraftingCompass />, title: 'Design & Planning', desc: 'Structural drawings, load calculations & project timeline.' },
    { step: '03', icon: <FaCogs />, title: 'Fabrication', desc: 'In-house CNC cutting, quality testing & material prep.' },
    { step: '04', icon: <FaTools />, title: 'Installation', desc: 'Safety-compliant installation with daily progress updates.' },
    { step: '05', icon: <FaCheckCircle />, title: 'Quality Check', desc: 'Multi-point inspection — waterproofing, alignment & integrity.' },
    { step: '06', icon: <FaTruck />, title: 'Handover', desc: 'As-built drawings, warranty cards & maintenance guide.' },
  ];

  const testimonials = [
    {
      name: 'Mr. Rajesh Murugan',
      designation: 'Plant Manager',
      company: 'Sree Krishna Auto Parts, Coimbatore',
      text: 'ECR completed our 85,000 sq.ft factory roofing in just 45 days — ahead of schedule. The structural quality is excellent and we\'ve had zero leakage issues through two monsoon seasons.',
      rating: 5,
      initials: 'RM',
      highlight: '85,000 Sq.Ft in 45 Days',
    },
    {
      name: 'Mr. Selvakumar Annamalai',
      designation: 'GM – Operations',
      company: 'Sri Venkateswara Logistics, Chennai',
      text: 'We needed a 1.2 lakh sq.ft warehouse with tight deadlines. ECR managed the entire PEB construction seamlessly. Their in-house fabrication cut lead times significantly.',
      rating: 5,
      initials: 'SA',
      highlight: '1.2 Lakh Sq.Ft Warehouse',
    },
    {
      name: 'Mr. Suresh Balakrishnan',
      designation: 'Director',
      company: 'Tiruppur Knitwork Exports',
      text: 'Solid workmanship and transparent communication. ECR gave us detailed drawings before starting and honored every milestone date. Zero maintenance issues in two years.',
      rating: 5,
      initials: 'SB',
      highlight: '2 Years Zero Maintenance',
    },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="home-hero" style={{ backgroundImage: `url(${heroIndustrialImg})` }}>
        <div className="home-hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="hero-subtitle-label">
                  <div className="hero-subtitle-line"></div>
                  <div className="hero-subtitle-text">Engineered for Excellence</div>
                </div>
                <h1>
                  Complete Structural<br />
                  <span className="hero-h1-accent">Roofing Solutions</span>
                </h1>
                <p className="hero-tagline">
                  Engineered for Strength. Built for Durability.
                </p>
                <p className="hero-desc">
                  End-to-end roofing, PEB buildings &amp; steel fabrication for
                  industrial and commercial projects across Tamil Nadu.
                </p>
                <div className="hero-chips">
                  <span className="hero-chip"><FaCheck /> Quality Assured</span>
                  <span className="hero-chip"><FaCheck /> On-Time Delivery</span>
                  <span className="hero-chip"><FaCheck /> 10+ Years Experience</span>
                </div>
                <div className="hero-buttons">
                  <Link to="/contact" className="btn-accent">
                    Start Your Project <FaArrowRight />
                  </Link>
                  <Link to="/projects" className="btn-outline-light-custom">
                    View Projects <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-ticker">
          <div className="ticker-track">
            {[1, 2, 3, 4].map((i) => (
              <div className="ticker-group" key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <span className="ticker-item">Industrial Roofing <span className="ticker-dot"></span></span>
                <span className="ticker-item">PEB Buildings <span className="ticker-dot"></span></span>
                <span className="ticker-item">Steel Fabrication <span className="ticker-dot"></span></span>
                <span className="ticker-item">Turnkey Execution <span className="ticker-dot"></span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST IMPACT BAR ===== */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <div className="trust-item" data-aos="zoom-in" data-aos-delay="0">
              <span className="trust-num">100<span className="trust-plus">+</span></span>
              <span className="trust-label">Projects Completed</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item" data-aos="zoom-in" data-aos-delay="80">
              <span className="trust-num">10<span className="trust-plus">+</span></span>
              <span className="trust-label">Years Experience</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item" data-aos="zoom-in" data-aos-delay="160">
              <span className="trust-num">5L<span className="trust-plus">+</span></span>
              <span className="trust-label">Sq.Ft Installed</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item" data-aos="zoom-in" data-aos-delay="240">
              <span className="trust-num">50<span className="trust-plus">+</span></span>
              <span className="trust-label">Industrial Clients</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item" data-aos="zoom-in" data-aos-delay="320">
              <span className="trust-num"><FaMapMarkerAlt style={{ fontSize: '1.2rem' }} /></span>
              <span className="trust-label">Tamil Nadu Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WELCOME / ABOUT ===== */}
      <section className="welcome-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="welcome-image-wrapper">
                <img src={aboutImg} alt="ECR Roofing Solutions" />
                <div className="welcome-experience-badge">
                  <div className="years">10+</div>
                  <div className="exp-text">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="welcome-text">
                <span className="subtitle" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '3px' }}>
                  Welcome to ECR
                </span>
                <h2>Welcome to ECR Roofing Solutions</h2>
                <div className="accent-line"></div>
                <p>
                  With extensive experience in structural roofing and steel construction,
                  ECR Roofing Solutions has established itself as a reliable partner for
                  industrial and commercial projects across Tamil Nadu.
                </p>
                <p>
                  From concept and design to fabrication and installation, our team delivers
                  roofing systems that combine durability, efficiency, and cost-effectiveness.
                </p>
                <Link to="/about" className="btn-accent" style={{ marginTop: '12px' }}>
                  Learn More About Us <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="hs-section">
        <div className="container">
          <SectionTitle
            subtitle="What We Offer"
            title="Services We Provide"
            description="Premium structural roofing and steel construction solutions customized for B2B industrial projects."
          />
          <div className="hs-grid">
            {servicesList.map((service, i) => (
              <div
                className="hs-card"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="hs-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="hs-card-overlay"></div>
                </div>
                <div className="hs-card-number">{service.num}</div>
                <div className="hs-card-body">
                  <h4 className="hs-card-title">{service.title}</h4>
                  <p className="hs-card-desc">{service.desc}</p>
                  <Link to="/services" className="hs-card-link">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS — Carousel Layout ===== */}
      <section className="fpc-section">
        <div className="container">
          <SectionTitle
            subtitle="Our Work"
            title="Featured Projects"
            description="Real projects. Real results. Structural excellence delivered across Tamil Nadu."
          />
          <div 
            className="fpc-carousel-container" 
            data-aos="fade-up"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              className="fpc-nav-btn fpc-prev"
              onClick={handlePrev}
              aria-label="Previous Project"
            >
              <FaChevronLeft />
            </button>
            <button
              className="fpc-nav-btn fpc-next"
              onClick={handleNext}
              aria-label="Next Project"
            >
              <FaChevronRight />
            </button>

            <div className="fpc-carousel-track-wrapper">
              <div
                className="fpc-carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                }}
              >
                {featuredProjects.map((project, i) => (
                  <div
                    className="fpc-carousel-slide"
                    key={i}
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div className="fpc-card">
                      <div className="fpc-card-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="fpc-card-body">
                        <h4 className="fpc-card-title">{project.title}</h4>
                        <p className="fpc-card-location">{project.location}</p>
                        
                        <div className="fpc-card-meta">
                          <div className="fpc-meta-item">
                            <span className="fpc-meta-icon"><FaRulerCombined /></span>
                            <span className="fpc-meta-text">{project.area}</span>
                          </div>
                          <div className="fpc-meta-item">
                            <span className="fpc-meta-icon"><FaCalendarCheck /></span>
                            <span className="fpc-meta-text">{project.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '48px' }} data-aos="fade-up">
            <Link to="/projects" className="btn-accent">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE — HEXAGONAL STYLE ===== */}
      <section className="ind-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="ind-overlay"></div>
        <div className="container ind-inner">
          <SectionTitle
            subtitle="Sectors We Cover"
            title="Industries We Serve"
            description="From manufacturing plants to educational campuses — if it needs a roof, we engineer it."
            light={true}
          />
          <div className="ind-grid">
            {industries.map((ind, i) => (
              <div className="ind-card" key={i} data-aos="fade-up" data-aos-delay={i * 70}>
                <div className="ind-icon">{ind.icon}</div>
                <h5 className="ind-title">{ind.title}</h5>
                <p className="ind-desc">{ind.desc}</p>
                <div className="ind-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CLIENTS CHOOSE ECR ===== */}
      <section className="wce-section">
        <div className="container">
          <SectionTitle
            subtitle="Why Us"
            title="Why Clients Choose ECR"
            description="Not generic promises — real proof. Every strength backed by numbers and execution."
          />
          <div className="wce-grid">
            {whyChoose.map((item, i) => (
              <div className="wce-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="wce-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="wce-icon-ring">
                  {item.icon}
                </div>
                <h5 className="wce-title">{item.title}</h5>
                <div className="wce-proof">
                  <FaCheckCircle className="wce-proof-check" />
                  <span>{item.proof}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECT PROCESS — ASYMMETRIC SPLIT SCREEN ===== */}
      <section className="proc-section">
        <div className="container">
          <div className="row g-5">
            {/* Left Column: Sticky Title & CTA */}
            <div className="col-lg-4" data-aos="fade-right">
              <div className="proc-sticky-sidebar">
                <span className="subtitle-label">How We Work</span>
                <h2 className="proc-sidebar-title">Our 6-Step Execution Process</h2>
                <div className="accent-line-orange"></div>
                <p className="proc-sidebar-desc">
                  From the initial site survey to the final structural inspection and handover, 
                  we follow a rigorous, safety-first workflow to ensure structural integrity, 
                  code compliance, and on-time project completion.
                </p>
                <div style={{ marginTop: '30px' }}>
                  <Link to="/contact" className="btn-accent">
                    Get Free Site Inspection <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column: Cards Grid */}
            <div className="col-lg-8" data-aos="fade-left">
              <div className="proc-split-grid">
                {processSteps.map((step, i) => (
                  <div
                    className="proc-split-card"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    <div className="proc-split-card-accent"></div>
                    <div className="proc-split-card-header">
                      <div className="proc-split-card-icon">{step.icon}</div>
                      <span className="proc-split-card-step">Step {step.step}</span>
                    </div>
                    <h5 className="proc-split-card-title">{step.title}</h5>
                    <p className="proc-split-card-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS PARALLAX ===== */}
      <section className="stats-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <StatCounter end={100} suffix="+" label="Projects Completed" icon={<FaProjectDiagram />} />
            </div>
            <div className="col-6 col-md-3">
              <StatCounter end={50} suffix="+" label="Industrial Clients" icon={<FaUsers />} />
            </div>
            <div className="col-6 col-md-3">
              <StatCounter end={10} suffix="+" label="Years Experience" icon={<FaCalendarCheck />} />
            </div>
            <div className="col-6 col-md-3">
              <StatCounter end={500000} suffix="+" label="Sq. Ft. Installed" icon={<FaRulerCombined />} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENT TESTIMONIALS ===== */}
      <section className="test-section">
        <div className="container">
          <SectionTitle
            subtitle="Client Voices"
            title="Trusted by Industrial Leaders"
            description="Industrial clients trust other industrial clients. Hear what project leaders say about working with ECR."
          />
          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div className="test-card" key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="test-highlight-chip">{t.highlight}</div>
                <FaQuoteLeft className="test-quote" />
                <p className="test-text">{t.text}</p>
                <div className="test-stars">
                  {[...Array(t.rating)].map((_, si) => (
                    <FaStar key={si} />
                  ))}
                </div>
                <div className="test-author">
                  <div className="test-avatar">{t.initials}</div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.designation}</div>
                    <div className="test-company">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Start Your Next Project?</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Get expert guidance and a free site inspection for your roofing and structural needs across Tamil Nadu.
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="btn-cta-white">
              Get a Free Consultation <FaArrowRight />
            </Link>
            <a href="tel:+919876543210" className="btn-cta-outline">
              <FaPhoneAlt /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
