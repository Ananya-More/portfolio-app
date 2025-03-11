import React, { useState, useEffect, useRef } from 'react';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});

  const sections = [
    { id: 'about', title: '👤 ABOUT ME' },
    { id: 'experience', title: '💼 PROFESSIONAL EXPERIENCE' },
    { id: 'projects', title: '🚀 PROJECTS' },
    { id: 'publications', title: '📚 PUBLICATIONS' },
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
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
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
      }, 100); // Delay scroll detection for smoother transitions
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
        <section
          id="about"
          className="section about"
          ref={(el) => (sectionRefs.current['about'] = el)}
        >
          <div className="section-divider"></div>
          <h2>ABOUT ME</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="about-image">
                <img
                  src="https://maxm-imggenurl.web.val.run/professional-headshot"
                  alt="Profile"
                />
              </div>
              <div className="about-text">
                <p>
                  A passionate professional with a diverse skill set and a drive
                  for innovation. My journey is defined by continuous learning,
                  creative problem-solving, and a commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="section experience"
          ref={(el) => (sectionRefs.current['experience'] = el)}
        >
          <div className="section-divider"></div>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          <div className="experience-container">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <p>Tech Innovations Inc. | 2020 - Present</p>
              </div>
              <div className="experience-content">
                <img
                  src="https://maxm-imggenurl.web.val.run/tech-innovations"
                  alt="Tech Innovations"
                  className="experience-image"
                />
                <ul>
                  <li>Led cross-functional teams in developing scalable web applications</li>
                  <li>Implemented cutting-edge technologies to optimize performance</li>
                  <li>Designed and maintained complex software architectures</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>
            {/* Repeat for next experience... */}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        {/* ... Repeat the same structure for Projects, Publications, Certifications, Contact ... */}
      </main>
    </div>
  );
}

export default PortfolioApp;
