import '../styles/hero.scss';
import '../styles/about.scss';
import '../styles/projects.scss';
import '../styles/contact.scss';
import '../styles/home.scss';

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero__heading-wrap">
          <h1>Hi, I'm Z.</h1>
        </div>
        <h2>Frontend Developer & UI Engineer</h2>
        <p>
          I design and develop fast, scalable, and visually refined user interfaces. My work blends clean engineering, thoughtful design, and an obsession with user experience — to create products that feel effortless and work flawlessly.
        </p>
      </section>

      <section id="about" className="about">
        <div className="split-section">
          <div className="left-side">
            <h2>About Me</h2>
            <p>
              I'm a frontend engineer specializing in clean UI architecture, design systems, and seamless user journeys. I combine creativity, structured thinking, and engineering precision to build modern interfaces that feel intuitive and look refined.
            </p>
            <p>
              With 4+ years of experience across VWO Insights, SuperDeli, InstaCEI, and internal CMS platforms, I've worked on high-impact features such as heatmaps, session recordings, surveys, funnels, and dashboard interfaces. My work focuses on performance, UX clarity, and maintainable component systems.
            </p>
            <ul>
              <li>Strong experience with React, Angular, JavaScript/TypeScript, SCSS</li>
              <li>Built data visualization modules (Heatmaps, Funnels, Recordings)</li>
              <li>Collaborated with design teams to refine UI/UX at scale</li>
              <li>Led UI architecture discussions and mentored interns</li>
              <li>Improved performance, refactored legacy code, and ensured production stability</li>
            </ul>
          </div>
          <div className="right-side">
            <div className="about__visual">
              <div className="about__placeholder" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="projects__inner">
          <h2 className="projects__heading">Projects</h2>
          <div className="projects__grid">
            <article className="project-card">
              <h3>VWO Insights – Analytics UI Modules</h3>
              <p className="project-card__description">
                Enterprise-level UI features for analyzing user behavior and improving product conversion flows.
              </p>
              <p className="project-card__tech">Angular, TypeScript, SCSS</p>
              <ul>
                <li>Developed and optimized Heatmaps, Session Recordings, Surveys, Funnels, and Form Analytics</li>
                <li>Improved performance and responsiveness across the analytics dashboard</li>
                <li>Led design–dev discussions for more intuitive user flows</li>
              </ul>
            </article>
            <article className="project-card">
              <h3>SuperDeli – Customer-Facing Web App</h3>
              <p className="project-card__description">
                Modern e-commerce storefront with smooth UX and conversion-focused UI.
              </p>
              <p className="project-card__tech">React, JavaScript, SCSS</p>
              <ul>
                <li>Built responsive interfaces for product browsing and order flows</li>
                <li>Collaborated closely with designers to refine UI components</li>
                <li>Ensured cross-device performance and accessibility</li>
              </ul>
            </article>
            <article className="project-card">
              <h3>InstaCEI – Construction Management UI</h3>
              <p className="project-card__description">
                Dashboard UI for managing construction workflows and project operations.
              </p>
              <p className="project-card__tech">Angular, JavaScript</p>
              <ul>
                <li>Implemented clean dashboard layouts and modular UI components</li>
                <li>Designed and coded several data-driven UI screens</li>
                <li>Worked cross-functionally with backend + design teams</li>
              </ul>
            </article>
            <article className="project-card">
              <h3>Appventurez CMS Panel</h3>
              <p className="project-card__description">
                Internal CMS interface for managing case studies and content.
              </p>
              <p className="project-card__tech">React, HTML/CSS</p>
              <ul>
                <li>Built reusable UI components for structured content</li>
                <li>Designed clean form layouts and content organization workflows</li>
                <li>Improved UX for editors and content teams</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact__inner">
          <h2 className="contact__heading">Contact</h2>
          <p className="contact__intro">
            Let's build something meaningful together. I'm open to internship roles in frontend development, UI engineering, and creative digital experiences.
          </p>
          <nav className="contact__links">
            <a href="mailto:hello@example.com">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Home;
