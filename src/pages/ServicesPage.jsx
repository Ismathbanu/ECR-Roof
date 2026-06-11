import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import heroImg from '../assets/images/hero_background_1780933985255.png';
import industrialImg from '../assets/images/service_industrial_roofing_1780934030238.png';
import pebImg from '../assets/images/service_peb_1780934045407.png';
import fabricationImg from '../assets/images/service_fabrication_1780934057825.png';
import sheetsImg from '../assets/images/service_roofing_sheets_1780934076469.png';
import maintenanceImg from '../assets/images/service_maintenance_1780934089962.png';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      num: '01',
      tag: 'Industrial',
      title: 'Industrial Roofing',
      desc: 'Industrial facilities require roofing systems that provide maximum protection against environmental conditions while maintaining structural integrity. We offer customized industrial roofing solutions suitable for factories, manufacturing plants, and processing units.',
      image: industrialImg,
      features: [
        'Corrosion-resistant materials',
        'Weatherproof roofing systems',
        'Energy-efficient solutions',
        'Long service life',
        'Custom design options',
        'Safety compliant',
      ],
    },
    {
      num: '02',
      tag: 'PEB',
      title: 'PEB Structures',
      desc: 'Our Pre-Engineered Building solutions offer rapid construction, reduced costs, and enhanced flexibility for industrial and commercial applications.',
      image: pebImg,
      features: [
        'Warehouses',
        'Manufacturing Units',
        'Logistics Centers',
        'Commercial Buildings',
        'Quick installation',
        'Cost-effective design',
      ],
    },
    {
      num: '03',
      tag: 'Fabrication',
      title: 'Structural Steel Fabrication',
      desc: 'We specialize in fabricating steel structures designed to meet project-specific requirements with precision engineering and quality materials.',
      image: fabricationImg,
      features: [
        'Roof Trusses',
        'Columns & Beams',
        'Industrial Frameworks',
        'Steel Platforms',
        'Custom fabrication',
        'Quality tested',
      ],
    },
    {
      num: '04',
      tag: 'Installation',
      title: 'Roofing Sheet Installation',
      desc: 'We supply and install premium-quality roofing sheets suitable for industrial and commercial structures with expert craftsmanship.',
      image: sheetsImg,
      features: [
        'Excellent weather resistance',
        'Thermal insulation options',
        'Lightweight construction',
        'Low maintenance',
        'Multiple profiles available',
        'Warranty backed',
      ],
    },
    {
      num: '05',
      tag: 'Maintenance',
      title: 'Roof Maintenance & Repairs',
      desc: 'Regular maintenance ensures the longevity and safety of your roofing system. Our experienced team provides comprehensive maintenance services.',
      image: maintenanceImg,
      features: [
        'Roof inspections',
        'Leak detection & repair',
        'Sheet replacement',
        'Structural repairs',
        'Preventive maintenance',
        'Emergency services',
      ],
    },
  ];

  return (
    <>
      <HeroBanner
        title="Our Services"
        subtitle="Comprehensive roofing and steel construction solutions tailored to your needs."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* ===== SERVICE BLOCKS — Alternating Rows ===== */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-list-wrapper">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  className={`service-detail-row ${isEven ? 'row-normal' : 'row-reversed'}`}
                  key={index}
                  id={`service-${service.num}`}
                >
                  {/* Content column */}
                  <div className="service-col-content" data-aos={isEven ? "fade-right" : "fade-left"}>
                    <div className="service-content-card">
                      <div className="service-tag-badge">
                        <span className="badge-number">{service.num}</span>
                        <span className="badge-tag">{service.tag}</span>
                      </div>
                      <h2>{service.title}</h2>
                      <div className="service-accent-bar"></div>
                      <p className="service-description">{service.desc}</p>
                      
                      <div className="service-features-title">Technical Specifications & Scope</div>
                      <ul className="service-features-grid">
                        {service.features.map((feat, i) => (
                          <li key={i} className="service-feature-item">
                            <span className="feature-icon"><FaCheck /></span>
                            <span className="feature-text">{feat}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to="/contact" className="service-inquire-btn">
                        Inquire Now <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image column */}
                  <div className="service-col-image" data-aos={isEven ? "fade-left" : "fade-right"}>
                    <div className="service-image-container">
                      <img src={service.image} alt={service.title} className="service-main-image" />
                      <div className="service-image-border-decoration"></div>
                      <div className="service-image-accent-glow"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="services-cta">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 data-aos="fade-up">Need a Custom Roofing Solution?</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Our team of experts will design and deliver a solution perfectly suited to your requirements.
          </p>
          <Link to="/contact" className="btn-accent" data-aos="fade-up" data-aos-delay="200">
            Request a Consultation <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
