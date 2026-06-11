import { useState } from 'react';
import {
  FaArrowRight, FaRulerCombined, FaCalendarAlt, FaWrench,
  FaTh, FaIndustry, FaBuilding, FaWarehouse, FaCogs,
  FaMapMarkerAlt, FaShoppingBag
} from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import SectionTitle from '../components/SectionTitle';
import heroImg from '../assets/images/hero_background_1780933985255.png';
import industrialImg from '../assets/images/project_industrial_1780934920908.png';
import warehouseImg from '../assets/images/project_warehouse_1780934934690.png';
import commercialImg from '../assets/images/project_commercial_1780934946406.png';
import steelImg from '../assets/images/project_steel_1780934962336.png';
import serviceIndustrial from '../assets/images/service_industrial_roofing_1780934030238.png';
import servicePeb from '../assets/images/service_peb_1780934045407.png';
import serviceFab from '../assets/images/service_fabrication_1780934057825.png';
import serviceSheets from '../assets/images/service_roofing_sheets_1780934076469.png';
import serviceMaint from '../assets/images/service_maintenance_1780934089962.png';
import './ProjectsPage.css';

const categories = [
  { id: 'all', label: 'All Projects', icon: <FaTh /> },
  { id: 'industrial', label: 'Industrial Roofing', icon: <FaIndustry /> },
  { id: 'peb', label: 'PEB Buildings', icon: <FaBuilding /> },
  { id: 'warehouse', label: 'Warehouse', icon: <FaWarehouse /> },
  { id: 'commercial', label: 'Commercial', icon: <FaShoppingBag /> },
  { id: 'steel', label: 'Steel Fabrication', icon: <FaCogs /> },
];

const projects = [
  {
    id: 1,
    category: 'industrial',
    categoryLabel: 'Industrial Roofing',
    image: industrialImg,
    title: 'Automotive Manufacturing Unit',
    location: 'Oragadam, Chennai, Tamil Nadu',
    area: '85,000 Sq.ft',
    year: '2024',
    scope: 'Roofing Works',
  },
  {
    id: 2,
    category: 'warehouse',
    categoryLabel: 'Warehouse',
    image: warehouseImg,
    title: 'Logistics Warehouse',
    location: 'Sriperumbudur, Tamil Nadu',
    area: '1,20,000 Sq.ft',
    year: '2024',
    scope: 'PEB Structure',
  },
  {
    id: 3,
    category: 'industrial',
    categoryLabel: 'Industrial Roofing',
    image: serviceIndustrial,
    title: 'Food Processing Unit',
    location: 'Hosur, Tamil Nadu',
    area: '60,000 Sq.ft',
    year: '2023',
    scope: 'Roofing Works',
  },
  {
    id: 4,
    category: 'steel',
    categoryLabel: 'Steel Fabrication',
    image: steelImg,
    title: 'Structural Steel Framework',
    location: 'Coimbatore, Tamil Nadu',
    area: '45,000 Sq.ft',
    year: '2023',
    scope: 'Fabrication & Erection',
  },
  {
    id: 5,
    category: 'warehouse',
    categoryLabel: 'Warehouse',
    image: serviceMaint,
    title: 'Cold Storage Warehouse',
    location: 'Tiruchirappalli, Tamil Nadu',
    area: '75,000 Sq.ft',
    year: '2023',
    scope: 'Turnkey Project',
  },
  {
    id: 6,
    category: 'commercial',
    categoryLabel: 'Commercial',
    image: commercialImg,
    title: 'Commercial Complex',
    location: 'Cuddalore, Tamil Nadu',
    area: '38,000 Sq.ft',
    year: '2022',
    scope: 'PEB + Finishing',
  },
  {
    id: 7,
    category: 'industrial',
    categoryLabel: 'Industrial Roofing',
    image: serviceSheets,
    title: 'Textile Manufacturing Unit',
    location: 'Erode, Tamil Nadu',
    area: '55,000 Sq.ft',
    year: '2022',
    scope: 'Roofing Works',
  },
  {
    id: 8,
    category: 'steel',
    categoryLabel: 'Steel Fabrication',
    image: serviceFab,
    title: 'Heavy Structure Fabrication',
    location: 'Chennai, Tamil Nadu',
    area: '70,000 Sq.ft',
    year: '2022',
    scope: 'Fabrication',
  },
  {
    id: 9,
    category: 'peb',
    categoryLabel: 'PEB Building',
    image: servicePeb,
    title: 'Pharma Manufacturing Unit',
    location: 'Ranipet, Tamil Nadu',
    area: '50,000 Sq.ft',
    year: '2021',
    scope: 'PEB Structure',
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <HeroBanner
        title="Our Projects"
        subtitle="Every project reflects our commitment to quality and engineering excellence."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'Projects' }]}
      />

      {/* ===== OUR WORK SECTION ===== */}
      <section className="projects-section">
        <div className="container">
          <SectionTitle
            subtitle="Our Work"
            title="Completed Projects"
            description="Explore our diverse portfolio of roofing and structural projects across Tamil Nadu."
          />

          {/* Filter Tabs */}
          <div className="project-filter-bar" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                <span className="filter-tab-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="projects-grid">
            {filtered.map((project, index) => (
              <div
                className="project-card"
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                {/* Image */}
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category-badge">{project.categoryLabel}</div>
                </div>

                {/* Info */}
                <div className="project-card-body">
                  <div className="project-card-top">
                    <h3 className="project-card-title">{project.title}</h3>
                    <a className="project-card-arrow" href="#">
                      <FaArrowRight />
                    </a>
                  </div>
                  <div className="project-card-location">
                    <FaMapMarkerAlt className="location-icon" />
                    {project.location}
                  </div>
                  <div className="project-card-meta">
                    <div className="meta-chip">
                      <FaRulerCombined className="meta-icon" />
                      <div>
                        <span className="meta-label">Area</span>
                        <span className="meta-value">{project.area}</span>
                      </div>
                    </div>
                    <div className="meta-chip">
                      <FaCalendarAlt className="meta-icon" />
                      <div>
                        <span className="meta-label">Year</span>
                        <span className="meta-value">{project.year}</span>
                      </div>
                    </div>
                    <div className="meta-chip">
                      <FaWrench className="meta-icon" />
                      <div>
                        <span className="meta-label">Scope</span>
                        <span className="meta-value">{project.scope}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
