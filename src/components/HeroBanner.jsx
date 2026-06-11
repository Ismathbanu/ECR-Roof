import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './HeroBanner.css';

const HeroBanner = ({ title, subtitle, backgroundImage, breadcrumbs = [] }) => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-deco hero-deco-1"></div>
      <div className="hero-deco hero-deco-2"></div>
      <div className="page-hero-content">
        <div className="container">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {breadcrumbs.length > 0 && (
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  <FaChevronRight className="separator" size={10} />
                  {crumb.path ? (
                    <Link to={crumb.path}>{crumb.label}</Link>
                  ) : (
                    <span className="current">{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
