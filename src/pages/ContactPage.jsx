import { useState } from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaBuilding,
  FaPaperPlane, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import heroImg from '../assets/images/hero_background_1780933985255.png';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[+]?\d{10,15}$/.test(formData.phone.replace(/\s/g, '')))
      newErrors.phone = 'Enter a valid phone number';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <>
      <HeroBanner
        title="Contact Us"
        subtitle="Ready to discuss your project? Get in touch with our team."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section">
        <div className="container">
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-info-wrapper">
                <div className="contact-info-card">
                  <h3>Get In Touch</h3>
                  <p className="contact-info-subtitle">
                    Whether you're planning a new project or upgrading an existing facility,
                    we're ready to assist you.
                  </p>

                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <div className="contact-detail-label">Our Location</div>
                      <div className="contact-detail-value">
                        No.T-1, SIDCO Industrial Estate,<br />
                        Semmandalam, Cuddalore - 607001
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <div className="contact-detail-label">Phone Numbers</div>
                      <div className="contact-detail-value">
                        <a href="tel:+918680802244">+91 86808 02244</a><br />
                        <a href="tel:+919489228526">+91 94892 28526</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="contact-detail-label">Email Address</div>
                      <div className="contact-detail-value">
                        <a href="mailto:info@evercoolroofing.com">info@evercoolroofing.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-person">
                    <div className="contact-person-name">
                      <FaUser style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                      A.K. Sumthaz
                    </div>
                    <div className="contact-person-title">Managing Director</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7" data-aos="fade-left">
              <div className="contact-form-wrapper">
                {submitted ? (
                  <div className="form-success">
                    <div className="form-success-icon">
                      <FaCheckCircle />
                    </div>
                    <h4>Thank You!</h4>
                    <p>Your enquiry has been submitted successfully. Our team will get back to you shortly.</p>
                    <button
                      className="btn-accent"
                      style={{ margin: '20px auto 0' }}
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', company: '', phone: '', email: '', requirement: '', message: '' });
                      }}
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3>Send Us an Enquiry</h3>
                    <p className="contact-form-subtitle">
                      Fill out the form below and our team will respond within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-floating-custom">
                            <label htmlFor="name">Name *</label>
                            <input
                              type="text"
                              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Full Name"
                            />
                            {errors.name && <div className="form-error">{errors.name}</div>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating-custom">
                            <label htmlFor="company">Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Company"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating-custom">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                              type="tel"
                              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 XXXXX XXXXX"
                            />
                            {errors.phone && <div className="form-error">{errors.phone}</div>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating-custom">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="email"
                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                            />
                            {errors.email && <div className="form-error">{errors.email}</div>}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating-custom">
                            <label htmlFor="requirement">Project Requirement</label>
                            <select
                              className="form-select"
                              id="requirement"
                              name="requirement"
                              value={formData.requirement}
                              onChange={handleChange}
                            >
                              <option value="">Select a service</option>
                              <option value="Industrial Roofing">Industrial Roofing</option>
                              <option value="PEB Structures">PEB Structures</option>
                              <option value="Steel Fabrication">Steel Fabrication</option>
                              <option value="Roofing Sheet Installation">Roofing Sheet Installation</option>
                              <option value="Maintenance & Repairs">Maintenance & Repairs</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating-custom">
                            <label htmlFor="message">Message *</label>
                            <textarea
                              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your project..."
                              rows="4"
                            ></textarea>
                            {errors.message && <div className="form-error">{errors.message}</div>}
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn-submit">
                            <FaPaperPlane /> Submit Enquiry
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="map-section" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.3!2d79.7!3d11.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ1JzAwLjAiTiA3OcKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ECR Roofing Solutions Location"
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
