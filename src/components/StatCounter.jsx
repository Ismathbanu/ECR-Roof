import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ end, suffix = '', prefix = '', label, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="stat-counter-item text-center" ref={ref} data-aos="fade-up">
      {icon && <div className="stat-icon">{icon}</div>}
      <div className="stat-number">
        {prefix}
        {inView ? (
          <CountUp end={end} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatCounter;
