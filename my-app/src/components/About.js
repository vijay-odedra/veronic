import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Navbar for About page */}
      <nav className="navbar" id="mainNavbar">
        <div className="nav-left">
          <div className="logo-image">
            <Link to="/">
              <img src={require("../images/lolo1.png")} alt="logo" />
              <span>veronic</span>
            </Link>
          </div>
        </div>
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/about" className="active">About</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#digital-journey">Digital Journey</Link>
          <Link to="/#testimonials">Clients</Link>
          <Link to="/#contact">Contact</Link>
        </div>
        <div className="nav-right">
          <button className="btn-demo" onClick={() => alert('📅 Demo booking')}>
            <i className="fa-regular fa-calendar-check" style={{marginRight: '6px'}}></i>
            Book demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Veronic</h1>
          <p className="about-hero-subtitle">Building Smart Digital Systems for Modern Businesses</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-main-content">
        {/* Our Story Section */}
        <section className="about-section story-section">
          <div className="about-container">
            <div className="story-grid">
              <div className="story-image">
                <img src={require("../images/image2.png")} alt="Our Story" />
              </div>
              <div className="story-content">
                <h2 className="section-title">Our Story</h2>
                <p>Veronic is an IT consulting and software development company based in Rajkot, Gujarat. We design scalable web platforms, mobile applications, and automation-driven business systems that help startups and SMEs grow with clarity and confidence.</p>
                <p>Founded in 2020, we've grown from a small team of passionate developers to a full-service digital transformation partner. Our journey has been defined by our commitment to excellence and our focus on solving real operational challenges through clean engineering, intelligent automation, and performance-driven digital solutions.</p>
                <div className="story-stats">
                  <div className="stat-box">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">8</span>
                    <span className="stat-label">Partners</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="about-section mission-section">
          <div className="about-container">
            <h2 className="section-title text-center">Our Mission & Vision</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>To be the most trusted technology partner for businesses seeking digital transformation, known for our technical excellence and client-centric approach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-section values-section">
          <div className="about-container">
            <h2 className="section-title text-center">Our Core Values</h2>
            <div className="values-grid">
              {[
                { icon: "fa-lightbulb", title: "Innovation", desc: "We embrace creativity and innovation in every line of code we write." },
                { icon: "fa-handshake", title: "Partnership", desc: "We build lasting relationships based on trust and mutual success." },
                { icon: "fa-medal", title: "Excellence", desc: "We deliver quality without compromise in every project." },
                { icon: "fa-comments", title: "Transparency", desc: "We maintain open and honest communication at all times." }
              ].map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon"><i className={`fa-solid ${value.icon}`}></i></div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="about-section team-section">
          <div className="about-container">
            <h2 className="section-title text-center">Our Leadership Team</h2>
            <div className="team-grid">
              {[
                { name: "John Doe", role: "Founder & CEO", bio: "15+ years in enterprise software architecture", image: "JD" },
                { name: "Jane Smith", role: "Technical Lead", bio: "Full-stack expert, cloud architecture specialist", image: "JS" },
                { name: "Mike Johnson", role: "Head of AI", bio: "PhD in Machine Learning, 8+ years in AI/ML", image: "MJ" },
                { name: "Sarah Williams", role: "Client Success Manager", bio: "Ensuring exceptional client experiences", image: "SW" }
              ].map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-avatar">{member.image}</div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-section why-choose-section">
          <div className="about-container">
            <h2 className="section-title text-center">Why Choose Veronic?</h2>
            <div className="why-choose-grid">
              {[
                { icon: "fa-code", title: "Expert Developers", desc: "Senior-level engineers with deep full-stack expertise" },
                { icon: "fa-headset", title: "24/7 Support", desc: "Round-the-clock monitoring and assistance" },
                { icon: "fa-shield-halved", title: "Secure Systems", desc: "Zero-trust architecture, encrypted by default" },
                { icon: "fa-clock", title: "On-Time Delivery", desc: "Agile sprints, clear milestones, predictable releases" },
                { icon: "fa-chart-line", title: "Scalable Solutions", desc: "Built to grow from startup to enterprise" },
                { icon: "fa-rocket", title: "Innovation First", desc: "Cutting-edge technologies and best practices" }
              ].map((item, index) => (
                <div key={index} className="why-choose-card">
                  <div className="why-choose-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="about-container">
            <h2>Ready to Start Your Digital Journey?</h2>
            <p>Let's discuss how we can help transform your business</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => alert('Contact us')}>
                <i className="fa-regular fa-handshake"></i> Get in Touch
              </button>
              <button className="btn-outline" onClick={() => alert('Book demo')}>
                <i className="fa-regular fa-calendar-check"></i> Book a Demo
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="https://placehold.co/40x40/1B4332/2ECC71?text=V+" alt="V" />
              <span>veronic</span>
            </div>
            <p>scalable · secure · intelligent</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <p><button className="footer-link" onClick={() => alert('Cloud')}>Cloud</button></p>
            <p><button className="footer-link" onClick={() => alert('Cybersecurity')}>Cybersecurity</button></p>
            <p><button className="footer-link" onClick={() => alert('AI & Automation')}>AI & Automation</button></p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <p><Link to="/about" className="footer-link">About us</Link></p>
            <p><button className="footer-link" onClick={() => alert('Careers')}>Careers</button></p>
            <p><Link to="/#contact" className="footer-link">Contact</Link></p>
          </div>
          <div className="footer-col">
            <h4>Message us</h4>
            <div className="message-box">
              <textarea placeholder="Your message..."></textarea>
              <button onClick={() => alert('Message sent')}>
                <i className="fa-regular fa-paper-plane"></i> Send
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>🎨 stencil · deep teal · emerald · forest night · sand light</span>
        </div>
      </footer>
    </div>
  );
};

export default About;