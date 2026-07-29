import "./index.css";

function App() {
return ( <div> <nav className="navbar"> <h2>Camila Figueiredo</h2>

    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section className="hero">
    <div className="hero-content">
      <p className="tag">Software Engineering Portfolio</p>

      <h1>Hi, I'm Camila Figueiredo 👋</h1>

      <p>
        Software Engineer focused on Full-Stack Development,
        Cloud Technologies, Embedded Systems, and Web Engineering.
      </p>

      <div className="buttons">
        <a
          href="https://github.com/camiqf1"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/camilaqfigueiredo"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>

  <section id="about" className="section">
    <h2>About Me</h2>

    <p>
      I build web applications using React, Java, Quarkus, Node.js,
      MySQL, and AWS while also exploring embedded systems,
      microcontroller programming, PCB layouts, and cloud deployment.
    </p>
  </section>

  <section id="projects" className="section">
    <h2>Featured Projects</h2>

    <div className="grid">
      <div className="card">
        <h3>🎮 GameBoxx</h3>

        <p>
          Full-stack game rating platform built with React, Quarkus,
          MySQL, and AWS. Features user authentication, game reviews,
          and ratings.
        </p>

        <small>
          ⚠️ Currently under active development. Some features may be
          incomplete.
        </small>

        <br />
        <br />

        <a
          href="https://cs320-project-camilafigueiredo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Live Demo
        </a>

        <span>React • Java • Quarkus • MySQL • AWS</span>
      </div>

      <div className="card">
        <h3>🤖 AI Grading Application</h3>

        <p>
          Product Owner for an AI-powered grading proof of concept
          leading a 5-person engineering team.
        </p>

        <span>AI • GitHub • Canvas • Project Management</span>
      </div>

      <div className="card">
        <h3>⚡ Embedded Systems</h3>

        <p>
          Experience with microcontroller programming, PCB layouts,
          circuit board testing, and engineering documentation.
        </p>

        <span>Microcontrollers • PCB • Testing</span>
      </div>
    </div>
  </section>

  <section id="experience" className="section">
    <h2>Experience</h2>

    <div className="card">
      <h3>Microcontroller Programmer — Design Criteria Inc.</h3>

      <p>
        Programmed microcontrollers, tested circuit boards,
        documented test data, and supported schematic and PCB work.
      </p>
    </div>

    <div className="card">
      <h3>Web Assistant — Ensign College</h3>

      <p>
        Updated website content using Brightspot CMS, improved SEO
        with metadata and Schema.org, and used HTML/CSS for styling.
      </p>
    </div>
  </section>

  <section className="section">
    <h2>Technical Skills</h2>

    <div className="skills">
      <span>Java</span>
      <span>JavaScript</span>
      <span>C++</span>
      <span>Python</span>
      <span>React</span>
      <span>Next.js</span>
      <span>Node.js</span>
      <span>Quarkus</span>
      <span>AWS</span>
      <span>Docker</span>
      <span>Maven</span>
      <span>Gradle</span>
      <span>MySQL</span>
      <span>GitHub</span>
    </div>
  </section>

  <section id="contact" className="section contact">
    <h2>Let's Connect</h2>

    <p>
      Currently exploring opportunities in software engineering,
      full-stack development, cloud technologies, and embedded systems.
    </p>

    <a href="mailto:qcamila.figueiredo@gmail.com">
      Email Me
    </a>
  </section>

  <footer>
    <p>© 2026 Camila Figueiredo</p>
  </footer>
</div>

);
}

export default App;

