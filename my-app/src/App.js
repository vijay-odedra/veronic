import React, { useEffect, useRef, useState } from 'react';
import './App.css';




import lolo1 from "./images/lolo1.png";
import image2 from "./images/image2.png";
import s1 from "./images/s1.png";
import s2 from "./images/s2.png";
import s3 from "./images/s3.png";
import s4 from "./images/s4.png";
import s5 from "./images/s5.png";
import s6 from "./images/s6.png";
import secondImage from "./images/second_image.png";
import image3 from "./images/image3.png";

const tabs = [
  {
    id: 'product',
    label: 'Transition to a product-based approach',
    description: 'Move from a project-based to product-based approach and elevate digital experiences that are integral success drivers.'
  },
  {
    id: 'cloud',
    label: 'Achieve seamless cloud migration',
    description: 'Accelerate your cloud journey with our comprehensive migration strategies and cloud-native solutions.'
  },
  {
    id: 'data',
    label: 'Unlock potential with data & AI',
    description: 'Harness the power of data and artificial intelligence to drive innovation and informed decision-making.'
  },
  {
    id: 'infra',
    label: 'Improve infrastructure management',
    description: 'Optimize your IT infrastructure for better performance, scalability, and cost-efficiency.'
  },
  {
    id: 'process',
    label: 'Optimize business processes',
    description: 'Streamline your operations and enhance productivity through intelligent process automation.'
  }
];

 const technologies = [
    'REACT',
    'NODE.JS',
    'PYTHON',
    'JAVA',
    'ANGULAR',
    'VUE.JS',
    'MONGODB',
    'POSTGRESQL',
    'AWS',
    'DOCKER',
    'KUBERNETES',
    'TENSORFLOW'
  ];


function App() {
  // Refs for DOM elements
  const navbarRef = useRef(null);
  const canvasRef = useRef(null);
  const typingElementRef = useRef(null);
  const carouselRef = useRef(null);
  const dotsRef = useRef(null);
  
  // State for carousel
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const totalCards = 5;

  // State for digital journey tabs
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Typing effect
  useEffect(() => {
    const el = typingElementRef.current;
    if (!el) return;

    const phrases = ["Engineering the Future", "Deep teal intelligence", "Emerald scalability", "Forest night security"];
    let i = 0, j = 0, deleting = false;
    let txt = '';

    function type() {
      const full = phrases[i];
      txt = deleting ? full.substring(0, j - 1) : full.substring(0, j + 1);
      j = deleting ? j - 1 : j + 1;
      el.textContent = txt;

      if (!deleting && j === full.length) {
        deleting = true;
        setTimeout(type, 2000);
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % phrases.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, deleting ? 50 : 100);
      }
    }

    type();
  }, []);

  // Navbar hide/show on scroll
  useEffect(() => {
    const navbar = navbarRef.current;
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
      const current = window.scrollY;
      if (current > 50) navbar.classList.add('nav-solid');
      else navbar.classList.remove('nav-solid');

      if (current > 80 && current > lastScrollY) navbar.classList.add('nav-hidden');
      else navbar.classList.remove('nav-hidden');

      lastScrollY = current;
      ticking = false;
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateNavbar();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h;
    let mouseX = -1000, mouseY = -1000;
    let points = [];
    const NUM = 60;
    const CONNECT = 200;

    function initPoints() {
      points = [];
      for (let i = 0; i < NUM; i++) {
        points.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          rad: 2 + Math.random() * 4
        });
      }
    }

    function resizeCanvas() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      initPoints();
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();

    function drawCanvas() {
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);

      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        let dx = mouseX - p.x;
        let dy = mouseY - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          let force = (1 - dist / 180) * 0.15;
          p.x -= dx * force;
          p.y -= dy * force;
        }
      }

      ctx.lineWidth = 1.2;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let dx = points[i].x - points[j].x;
          let dy = points[i].y - points[j].y;
          let d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            let a = 0.25 * (1 - d / CONNECT);
            ctx.strokeStyle = `rgba(46, 204, 113, ${a})`;
            ctx.stroke();
          }
        }
      }

      for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad, 0, 2 * Math.PI);
        ctx.fillStyle = '#E9EDC9';
        ctx.shadowColor = '#2ECC71';
        ctx.shadowBlur = 12;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      requestAnimationFrame(drawCanvas);
    }

    const animationId = requestAnimationFrame(drawCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Carousel logic
  useEffect(() => {
    function updateVisible() {
      if (window.innerWidth <= 650) setVisibleCards(1);
      else if (window.innerWidth <= 1000) setVisibleCards(2);
      else setVisibleCards(3);
    }

    updateVisible();
    window.addEventListener('resize', updateVisible);

    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // Update carousel position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;

    const gap = 32;
    const w = cards[0].offsetWidth;
    carousel.style.transform = `translateX(-${carouselIndex * (w + gap)}px)`;
  }, [carouselIndex]);

  // Update dots
  useEffect(() => {
    const dotsContainer = dotsRef.current;
    if (!dotsContainer) return;

    const maxIndex = Math.max(0, totalCards - visibleCards);
    let html = '';
    for (let i = 0; i <= maxIndex; i++) {
      html += `<div class="dot ${i === carouselIndex ? 'active' : ''}" data-index="${i}"></div>`;
    }
    dotsContainer.innerHTML = html;

    const dotElements = document.querySelectorAll('.dot');
    dotElements.forEach(dot => {
      dot.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        setCarouselIndex(index);
      });
    });
  }, [carouselIndex, visibleCards]);

  // Scroll reveal animation
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle demo button click
  const handleDemoClick = () => {
    alert('📅 Demo booking — interactive prototype (mock)');
  };

  // Handle message send
  const handleMessageSend = () => {
    alert('✉️ Message sent (demo)');
  };

  // Handle carousel navigation
  const handlePrevClick = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const handleNextClick = () => {
    const maxIndex = Math.max(0, totalCards - visibleCards);
    if (carouselIndex < maxIndex) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  // Handle anchor clicks
  const handleAnchorClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar" id="mainNavbar" ref={navbarRef}>
        <div className="nav-left">
          <div className="logo-image">
            <img src={lolo1} alt="logo" />
            <span>veronic</span>
          </div>
        </div>
        <div className="nav-center">
          <a href="#home" onClick={(e) => handleAnchorClick(e, 'home')}>Home</a>
          <a href="../src/components/About.js" onClick={(e) => handleAnchorClick(e, 'about-highlight')}>About</a>
          <a href="#services" onClick={(e) => handleAnchorClick(e, 'services')}>Services</a>
          <a href="#digital-journey" onClick={(e) => handleAnchorClick(e, 'digital-journey')}>Digital Journey</a>
          <a href="#testimonials" onClick={(e) => handleAnchorClick(e, 'testimonials')}>Clients</a>
          <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')}>Contact</a>
        </div>
        <div className="nav-right">
          <button className="btn-demo" id="demoTrigger" onClick={handleDemoClick}>
            <i className="fa-regular fa-calendar-check" style={{marginRight: '6px'}}></i>
            Book demo
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
        <div className="lines-container">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>
        <canvas id="interactiveCanvas" ref={canvasRef}></canvas>
        <div className="hero-content">
          <div className="typing-wrapper">
            <span className="static-headline">🚀</span>
            <span className="typing-text" id="typingElement" ref={typingElementRef}></span>
          </div>
          <p>Veronic · AI–driven infrastructure · the network pulses with your movement.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => alert('Explore Services')}>
              Explore Services <i className="fa-regular fa-compass"></i>
            </button>
            <button className="btn-outline" onClick={() => alert('Request Consultation')}>
              Request Consultation <i className="fa-regular fa-handshake"></i>
            </button>
          </div>
        </div>
        <button className="scroll-arrow" onClick={(e) => handleAnchorClick(e, 'about-highlight')}>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </section>

      {/* About */}
      <section className="about-highlight fade-up" id="about-highlight">
        <div className="about-container">
          <div className="about-image-single">
            <img src={image2} alt="Veronic" />
          </div>
          <div className="about-content">
            <h2>Building Smart Digital Systems for Modern Businesses</h2>
            <div className="about-intro-text">
              <p>Veronic is an IT consulting and software development company based in Rajkot, Gujarat. We
                design scalable web platforms, mobile applications, and automation-driven business systems
                that help startups and SMEs grow with clarity and confidence.</p>
              <p>We focus on solving real operational challenges through clean engineering, intelligent
                automation, and performance-driven digital solutions.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Partners</span>
              </div>
            </div>
            <div className="about-buttons">
              <button className="btn-primary" onClick={() => alert('Our story')}>
                <i className="fa-regular fa-circle-right"></i> Our story
              </button>
              <button className="btn-ghost" onClick={() => alert('Meet the team')}>
                <i className="fa-regular fa-handshake"></i> Meet the team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="services-section fade-up" id="services">
        <div className="services-container">
          <h2>Our Services</h2>
          <div className="services-intro">
            Application Development, Brand Marketing, and more — images have a blackish filter, only the image area is darkened.
          </div>
          <div className="services-grid">
            {[
              { name: "Application Development", desc: "Custom software, mobile & web applications.", img: s1, bg: "1B4332" },
              { name: "Brand Marketing", desc: "SEO, digital strategy & brand presence.", img: s2, bg: "0E7C7B" },
              { name: "Custom Software", desc: "Bespoke, scalable enterprise solutions.", img: s3, bg: "3A5A40" },
              { name: "Mobile Apps", desc: "Native & cross‑platform mobile applications.", img: s4, bg: "1B4332" },
              { name: "Web Development", desc: "Modern, responsive high‑performance web platforms.", img: s5, bg: "0E7C7B" },
              { name: "SEO", desc: "Search engine optimization & content strategy.", img: s6, bg: "111827" }
            ].map((service, index) => (
              <button key={index} className="service-card" onClick={() => alert(service.name)}>
                <img
                  className="card-image"
                  src={service.img}
                  alt={service.name.toLowerCase()}
                />
                <div className="card-hover">
                  <span className="service-name">{service.name}</span>
                  <p className="service-desc">{service.desc}</p>
                  <small>click to visit →</small>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Journey Section */}
      <section className="digital-journey-section fade-up" id="digital-journey">
        <div className="subtitle">We empower you to rise above any challenge.</div>
        <h1 className="title">Customized For You and Your Digital Journey</h1>
        
        <div className="content-grid">
          {/* Left: Tab List */}
          <div className="tab-list">
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                className={`tab-item ${activeTab.id === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="tab-icon">›</span>
                {tab.label}
              </div>
            ))}
          </div>

          {/* Middle: Image */}
          <div className="image-container">
            <img 
              src={secondImage}
              alt="Digital Journey Abstract"
              className="main-image"
            />
          </div>

          {/* Right: Description */}
          <div className="description-container">
            <p className="description-text">
              {activeTab.description}
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS CAROUSEL */}
      <section className="testimonials-section fade-up" id="testimonials">
        <div className="testimonials-container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-intro">
            Real stories from founders, CTOs, and marketing leads who scaled with Veronic.
          </div>
          <div className="carousel-wrapper">
            <div className="testimonials-carousel" id="testimonialCarousel" ref={carouselRef}>
              {[
                { initials: "JD", name: "Jessie Dan", title: "CTO, Loomi Analytics", text: "Veronic didn't just build our platform — they became our strategic tech backbone. The team's deep knowledge of cloud infrastructure saved us months.", rating: 5 },
                { initials: "MP", name: "Marco P.", title: "Founder, Vellum Studio", text: "From the first consultation to the final deployment, Veronic delivered a polished, performant web app. Their design sense and attention to detail are rare.", rating: 5 },
                { initials: "SL", name: "Sofia Liu", title: "Head of Product, Nexis", text: "Our legacy system was slow and unreliable. Veronic rebuilt it with modern Kubernetes architecture — now we scale effortlessly and uptime is 99.99%.", rating: 4.5 },
                { initials: "TR", name: "Tessa Rivera", title: "Tech Lead, Solace", text: "The team is incredibly responsive. They migrated us to serverless in under two weeks with zero downtime.", rating: 5 },
                { initials: "KW", name: "Kevin Wang", title: "CMO, Elevate", text: "We partnered for a complete brand overhaul and web presence. 40% increase in conversion in three months.", rating: 4 }
              ].map((client, index) => (
                <div key={index} className="testimonial-card">
                  <div className="quote-icon"><i className="fa-solid fa-quote-right"></i></div>
                  <div className="testimonial-text">“{client.text}”</div>
                  <div className="client-info">
                    <div className="client-avatar">{client.initials}</div>
                    <div className="client-details">
                      <h4>{client.name}</h4>
                      <p>{client.title}</p>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={i < Math.floor(client.rating) ? "fa-solid fa-star" : i < client.rating ? "fa-solid fa-star-half-alt" : "fa-regular fa-star"}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <div className="carousel-arrow" id="prevArrow" onClick={handlePrevClick}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="carousel-dots" id="carouselDots" ref={dotsRef}></div>
            <div className="carousel-arrow" id="nextArrow" onClick={handleNextClick}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </section>

    
    


      {/* WHY CHOOSE VERONIC */}
      <section className="why-section fade-up" id="why-choose">
        <div className="why-container">
          <div className="why-content">
            <h2>Why Choose Veronic?</h2>
            <div className="why-grid">
              {[
                { icon: "fa-code", title: "Expert Developers", desc: "Senior‑level engineers with deep full‑stack & cloud expertise." },
                { icon: "fa-headset", title: "24/7 Support", desc: "Round‑the‑clock monitoring and assistance." },
                { icon: "fa-shield-halved", title: "Secure Systems", desc: "Zero‑trust architecture, encrypted by default." },
                { icon: "fa-clock", title: "On‑Time Delivery", desc: "Agile sprints, clear milestones, predictable releases." },
                { icon: "fa-chart-line", title: "Scalable Solutions", desc: "Built to grow from startup to enterprise." }
              ].map((item, index) => (
                <div key={index} className="why-item">
                  <div className="why-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                  <div className="why-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-image">
          <img 
            src={image3}
            alt="Why Veronic team"
          />
          </div>
        </div>
      </section>

          <section className="technologies-section">
        <h2 className="section-title">TECHNOLOGIES WE WORK WITH</h2>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {technologies.map((tech, index) => (
              <React.Fragment key={index}>
                <span 
                  className={`marquee-item ${index % 2 === 0 ? 'outline-text' : 'filled-text'}`}
                >
                  {tech}
                </span>
                <span className="marquee-star-outline">★</span>
              </React.Fragment>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="marquee-content" aria-hidden="true">
            {technologies.map((tech, index) => (
              <React.Fragment key={`dup-${index}`}>
                <span 
                  className={`marquee-item ${index % 2 === 0 ? 'outline-text' : 'filled-text'}`}
                >
                  {tech}
                </span>
                <span className="marquee-star-outline">★</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>


      <section className="lets-create-section">
        <div className="content-container">
          <h1 className="main-heading">
            LET'S
            <span className="create-word">CREATE</span>
          </h1>
          
          <p className="description">
            Ready to transform your brand? Let's talk about your project.
          </p>
          
          <button className="cta-button">
            START A PROJECT
          </button>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="https://placehold.co/40x40/1B4332/2ECC71?text=V+" alt="V" />
              <span>veronic</span>
            </div>
            <p>scalable · secure · intelligent</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <p><button className="footer-link" onClick={() => alert('Cloud')}><i className="fa-regular fa-circle-right"></i>Cloud</button></p>
            <p><button className="footer-link" onClick={() => alert('Cybersecurity')}><i className="fa-regular fa-circle-right"></i>Cybersecurity</button></p>
            <p><button className="footer-link" onClick={() => alert('AI & Automation')}><i className="fa-regular fa-circle-right"></i>AI & Automation</button></p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <p><button className="footer-link" onClick={() => alert('About us')}><i className="fa-regular fa-circle-right"></i>About us</button></p>
            <p><button className="footer-link" onClick={() => alert('Careers')}><i className="fa-regular fa-circle-right"></i>Careers</button></p>
            <p><button className="footer-link" onClick={() => alert('Contact')}><i className="fa-regular fa-circle-right"></i>Contact</button></p>
          </div>
          <div className="footer-col">
            <h4>Message us</h4>
            <div className="message-box">
              <textarea placeholder="Your message..."></textarea>
              <button onClick={handleMessageSend}>
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
}

export default App;