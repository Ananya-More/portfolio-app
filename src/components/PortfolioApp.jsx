import React, { useState, useEffect, useRef } from 'react';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});

  const sections = [
    { id: 'about', title: '👤 ABOUT ME' },
    { id: 'experience', title: '💼 EXPERIENCE' },
    { id: 'projects', title: '🚀 PROJECTS' },
    { id: 'publications', title: '📚 RESEARCH & PUBLICATIONS' },
    { id: 'certifications', title: '🏆 CERTIFICATIONS' },
    { id: 'contact', title: '📞 CONTACT' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 50; // Adjust this based on your navbar height
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust sensitivity
  
      sections.forEach((section) => {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
  
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);
  
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={activeSection === section.id ? 'active' : ''}
          >
            {section.title}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="portfolio-content">

        {/* ABOUT SECTION */}
        <section id="about" className="section about" ref={(el) => (sectionRefs.current['about'] = el)}>
          <div className="section-divider"></div>
          <h2>ABOUT ME</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="about-image">
                <img src="/my_image.jpg" alt="Profile" />
              </div>
              <div className="about-text">
                <p>A passionate professional with a diverse skill set and a drive for innovation. My journey is defined by continuous learning, creative problem-solving, and a commitment to excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section experience" ref={(el) => (sectionRefs.current['experience'] = el)}>
          <div className="section-divider"></div>
          <h2>EXPERIENCE</h2>
          <div className="experience-container">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <p>Tech Innovations Inc. | 2020 - Present</p>
              </div>
              <div className="experience-content">
                <img src="https://maxm-imggenurl.web.val.run/tech-innovations" alt="Tech Innovations" className="experience-image" />
                <ul>
                  <li>Led cross-functional teams in developing scalable web applications</li>
                  <li>Implemented cutting-edge technologies to optimize performance</li>
                  <li>Designed and maintained complex software architectures</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section projects" ref={(el) => (sectionRefs.current['projects'] = el)}>
          <div className="section-divider"></div>
          <h2>PROJECTS</h2>
          <div className="projects-container">
            <div className="project-card">
              <h3>Project Title</h3>
              <p>Short description of your project...</p>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS SECTION */}
        <section id="publications" className="section publications" ref={(el) => (sectionRefs.current['publications'] = el)}>
          <div className="section-divider"></div>
          <h2>RESEARCH & PUBLICATIONS</h2>
          <div className="publications-container">
            <div className="publication-card">
              <h3>Publication Title</h3>
              <p>Short description of your publication...</p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="section certifications" ref={(el) => (sectionRefs.current['certifications'] = el)}>
          <div className="section-divider"></div>
          <h2>CERTIFICATIONS</h2>
          <div className="certifications-container">
            <div className="certification-card">
              <h3>Certification Name</h3>
              <p>Details about the certification...</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact" ref={(el) => (sectionRefs.current['contact'] = el)}>
          <div className="section-divider"></div>
          <h2>CONTACT</h2>
          <div className="contact-container">
            <p>Email: your-email@example.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default PortfolioApp;
