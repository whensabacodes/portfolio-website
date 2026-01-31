import '../styles/home.scss';

function Home() {
  return (
    <>
      <section className="home" id="home">
        <h1>Hi, I'm Z</h1>
        <h2>Frontend Developer & UI Engineer</h2>
        <p>
          I create beautiful and functional user interfaces with a focus on clean design and great user experience.
        </p>
      </section>

      <section id="about">
        <div className="split-section">
          <div className="left-side">
            <h2>About Me</h2>
            <p>
              I'm a frontend developer and UI engineer with a focus on clean design and great user experience. I build interfaces that are both functional and enjoyable to use.
            </p>
            <ul>
              <li>React, JavaScript, HTML & CSS</li>
              <li>Responsive design and accessibility</li>
              <li>UI/UX thinking and iteration</li>
              <li>Collaboration and clear communication</li>
              <li>Curiosity and continuous learning</li>
            </ul>
          </div>
          <div className="right-side">
            <div className="split-section__placeholder split-section__placeholder--circle" />
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="split-section">
          <div className="left-side">
            <h2>Projects</h2>
            <p>
              A selection of work spanning frontend development and UI design.
            </p>
            <ul className="projects-list">
              <li>
                <strong>Project Alpha</strong> — A responsive web app with modern tooling.
              </li>
              <li>
                <strong>Project Beta</strong> — UI components and design system.
              </li>
              <li>
                <strong>Project Gamma</strong> — Interactive dashboard and data viz.
              </li>
            </ul>
          </div>
          <div className="right-side">
            <div className="split-section__placeholder split-section__placeholder--square" />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="split-section">
          <div className="left-side">
            <h2>Let's Connect</h2>
            <p>
              I'm open to collaboration, new projects, and conversations. Reach out anytime.
            </p>
            <ul className="contact-list">
              <li><a href="mailto:hello@example.com">Email</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className="right-side">
            <div className="split-section__placeholder split-section__placeholder--circle" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
