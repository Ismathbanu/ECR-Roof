import { Link } from 'react-router-dom';
import {
  FaIndustry, FaWarehouse, FaBuilding, FaSeedling,
  FaGraduationCap, FaRoad, FaArrowRight
} from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import SectionTitle from '../components/SectionTitle';
import heroImg from '../assets/images/hero_background_1780933985255.png';
import industrialImg from '../assets/images/service_industrial_roofing_1780934030238.png';
import warehouseImg from '../assets/images/project_warehouse_1780934934690.png';
import commercialImg from '../assets/images/project_commercial_1780934946406.png';
import pebImg from '../assets/images/service_peb_1780934045407.png';
import fabricationImg from '../assets/images/service_fabrication_1780934057825.png';
import steelImg from '../assets/images/project_steel_1780934962336.png';
import heroIndustrialImg from '../assets/images/hero_industrial_building_1780936715270.png';
import './IndustriesPage.css';

const IndustriesPage = () => {
  const industries = [
    {
      icon: <FaIndustry />,
      image: industrialImg,
      title: 'Manufacturing Industries',
      desc: 'Reliable roofing systems designed for heavy industrial operations, ensuring protection and operational efficiency for manufacturing plants.',
    },
    {
      icon: <FaWarehouse />,
      image: warehouseImg,
      title: 'Warehousing & Logistics',
      desc: 'Large-span roofing solutions optimized for storage and logistics facilities with superior load-bearing capacity.',
    },
    {
      icon: <FaBuilding />,
      image: commercialImg,
      title: 'Commercial Buildings',
      desc: 'Functional and aesthetically pleasing roofing systems for offices, retail spaces, and commercial complexes.',
    },
    {
      icon: <FaSeedling />,
      image: pebImg,
      title: 'Agriculture',
      desc: 'Durable structures for agricultural storage, processing facilities, and farm buildings designed to withstand rural environments.',
    },
    {
      icon: <FaGraduationCap />,
      image: fabricationImg,
      title: 'Educational Institutions',
      desc: 'Cost-effective roofing solutions for schools, colleges, and training centers with focus on safety and longevity.',
    },
    {
      icon: <FaRoad />,
      image: steelImg,
      title: 'Infrastructure Projects',
      desc: 'Structural roofing systems for public and private infrastructure developments with engineering precision.',
    },
  ];

  return (
    <>
      <HeroBanner
        title="Industries We Serve"
        subtitle="Delivering specialized roofing solutions across diverse industry sectors."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {/* ===== INDUSTRIES GRID ===== */}
      <section className="industries-section">
        <div className="container">
          <SectionTitle
            subtitle="Our Sectors"
            title="Industries We Serve"
            description="We bring our expertise to a wide range of industries, providing tailored roofing and structural solutions."
          />
          <div className="row g-4">
            {industries.map((industry, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="industry-card">
                  <div className="industry-card-image">
                    <img src={industry.image} alt={industry.title} />
                    <div className="industry-icon-badge">{industry.icon}</div>
                  </div>
                  <div className="industry-card-body">
                    <h4>{industry.title}</h4>
                    <p>{industry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="industries-cta" style={{ backgroundImage: `url(${heroIndustrialImg})` }}>
        <div className="industries-cta-overlay"></div>
        <div className="container industries-cta-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7 text-start" data-aos="fade-right">
              <span className="cta-subtitle">HAVE A PROJECT IN MIND?</span>
              <h2>Let's Build Something Strong Together.</h2>
              <p>
                Get expert advice, custom solutions, and a free site consultation from our structural roofing specialists.
              </p>
            </div>
            <div className="col-lg-5 text-lg-end text-start" data-aos="fade-left">
              <div className="cta-actions">
                <Link to="/contact" className="btn-accent cta-btn">
                  GET FREE CONSULTATION <FaArrowRight />
                </Link>
                <Link to="/projects" className="btn-outline-light-custom cta-btn">
                  VIEW OUR PROJECTS <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;
