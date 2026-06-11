const SectionTitle = ({ subtitle, title, description, light = false, align = 'center' }) => {
  return (
    <div
      className="section-title"
      style={{ textAlign: align }}
      data-aos="fade-up"
    >
      {subtitle && (
        <span className="subtitle" style={light ? { color: 'rgba(255,255,255,0.7)' } : {}}>
          {subtitle}
        </span>
      )}
      <h2 style={light ? { color: '#ffffff' } : {}}>{title}</h2>
      {description && (
        <p style={light ? { color: 'rgba(255,255,255,0.6)' } : {}}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
