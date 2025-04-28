// === src/views/HomeView.vue ===
<template>
  <div class="portfolio">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <h1 class="logo">Dean Berg</h1>
          <nav class="navigation">
            <ul>
              <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
              <li><a href="#experience" @click.prevent="scrollTo('experience')">Experience</a></li>
              <li><a href="#projects" @click.prevent="scrollTo('projects')">Projects</a></li>
              <li><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-icon">
          <font-awesome-icon :icon="['fas', 'briefcase']" size="3x" />
        </div>
        <h2 class="title">Software/Data Engineer</h2>
        <p class="description">
            Computer science graduate with experience in embedded systems and a passion for innovative software solutions.
        </p>
        <div class="social-links">
          <a href="https://github.com/DeanB27/" target="_blank" class="social-button">
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dean-berg/" target="_blank" class="social-button">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
            <div class="photo-container">
            <div class="photo-frame">
                <img src="/Users/deanberg/Documents/GitHub/Portfolio/frontpic.jpeg" alt="Your Name" class="profile-photo">
            </div>
            </div>
          <div class="about-text">
            <p>
                I have a growing passion for computers and electrical systems, built upon my experience in the automotive industry where I designed wiring harnesses and implemented CAN BUS communication across multiple vehicle platforms. 
                I have recently completed my Computer Science degree at Grand Valley State University, where I continued to expand my programming skills in Python, C, C++, and HTML.             </p>
            <p>
                Currently, I'm applying what I've learned by creating data visualization solutions as an intern at Vibracoustic. 
                I'm always eager to further my technical knowledge and take on new challenges.

            </p>
            <div class="skills">
              <h3>Skills</h3>
              <div class="skill-tags">
                <span class="skill-tag">Power BI</span>
                <span class="skill-tag">Visual Basic</span>
                <span class="skill-tag">HTML</span>
                <span class="skill-tag">CSS</span>
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Responsive Design</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">C++</span>
                <span class="skill-tag">Wire Harness</span>
                <span class="skill-tag">Motorsport Applications</span>
                <span class="skill-tag">Database</span>
                <span class="skill-tag">Project Management</span>
                <span class="skill-tag">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <!-- Job 1 -->
          <div class="timeline-item">
            <div class="job-title">
              <h3>Data Engineer</h3>
              <span class="company">Vibracoustic</span>
            </div>
            <p class="job-period">May 2024 - Present</p>
            <ul class="job-description">
              <li>I develop automated data systems with dynamic visualizations in Power BI and Power Apps that refresh weekly with new information. These solutions save 8+ hours weekly through streamlined reporting. 
                I've also created a centralized documentation portal that serves as a single access point for all reports, eliminating the need for permission requests and further enhancing team efficiency.
            </li>
              <li>Currently have created four published and active Power BI reports, and an ongoing Power Apps Application:</li>
              <ul>
                <li>Automated Deliverables Report</li>
                    <li>Automated LLR Report</li>
                    <li>Automated IRR Report</li>
                    <li>Purchasing Analytics Report</li>
                    <li>Ongoing Power Apps Application for Process Documentation portal for storage, creation, and management.</li>
                </ul>
              
            </ul>
          </div>

          <!-- Job 2 -->
          <div class="timeline-item">
            <div class="job-title">
              <h3>Software Engineer</h3>
              <span class="company">Racing Tech</span>
            </div>
            <p class="job-period">April 2023 - March 2024</p>
            <ul class="job-description">
              <li>Apprenticing and working on software applications as well as motorsport wire harnesses for customer vehicles. 
                Have experienced race day work at NASCAR and NASA races for company and private teams.</li>
              <li>Wire Harness Applications include:
                <ul><li>Lotus Exige Full Design and Creation of entire chassis, accessory, and engine harness, including calibration and software implementation with ECUMaster ECU and PDM.</li>
                    <li>Porsche Cayman GT4 Clubsport Design and Creation of accessory harness with ECUMaster PDM.</li>
                    <li>BMW M2 CSR Design and Creation of Chassis and Accessory harness with ECUMaster PDM.</li>
                    <li>Drag Dodge Motorsports Challenger Hurricrate Engine Chassis and Accessory Harness Design and Creation with ECUMaster PDM for Roadkill Nights Event.</li>
                </ul>
                </li>
            </ul>
          </div>
          <!-- Job 3 -->
          <div class="timeline-item">
            <div class="job-title">
              <h3>Electrical Team Lead</h3>
              <span class="company">GVSU Laker Racing FSAE</span>
            </div>
            <p class="job-period">March 2023 - Jan 2024</p>
            <ul class="job-description">
              <li>Electrical team lead for the GVSU FSAE team. Manage projects, organized and lead 6-10 group members, 
                and help take on larger tasks such as wiring and engine calibration/setup.</li>
              <li>Notable Accomplishments:
                <ul><li>Wire harness Redesign and Creation for Competition Car.</li>
                    <li>FSAE Competition at MIS, leading electrical team through tech inspections and Raceday.</li>
                </ul>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">School/Personal Projects</h2>
        <div class="project-grid">
          <!-- Project 1 -->
          <div class="project-card">
            <div class="project-image white">
                <!-- icon with an image -->
                <img src="/Users/deanberg/Documents/GitHub/Portfolio/Array of Engineers Logo.png.avif" alt="LLM Application" class="project-thumbnail">
            </div>
            <div class="project-info">
                <h3 class="project-title">LLM Document Assistant</h3>
                <p class="project-description">
                Capstone team project that created a localized, internal LLM RAG document application for Array of Engineers to query sensitive information against a Language Model with a Vue.JS front end.
                </p>
                <div class="project-tags">
                <span class="project-tag">Python</span>
                <span class="project-tag">RAG</span>
                <span class="project-tag">API</span>
                <span class="project-tag">Git</span>
                </div>
                <!-- Update project URL -->
            </div>
            </div>

          <!-- Project 2 -->
          <div class="project-card">
            <div class="project-image white">
                <!-- icon with an image -->
                <img src="/Users/deanberg/Documents/GitHub/Portfolio/Vue_Logo.png" alt="Portfolio" class="project-thumbnail">
            </div>
            <div class="project-info">
                <h3 class="project-title">This Web Page!</h3>
                <p class="project-description">
                    This web page was created with the intention to be used as an aid during my job application journey, and utilizes javascript and vue.js with github pages for deployment.
                </p>
                <div class="project-tags">
                <span class="project-tag">Javascript</span>
                <span class="project-tag">Vue</span>
                <span class="project-tag">Git</span>
                </div>
                <!-- Update project URL -->
                <a href="https://github.com/DeanB27/Portfolio" class="project-link">
                View Project
                <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                </a>
            </div>
            </div>

          <!-- Project 3 -->
          <div class="project-card">
            <div class="project-image white">
                <!-- icon with an image -->
                <img src="/Users/deanberg/Documents/GitHub/Portfolio/Vibify_Logo.jpeg" alt="Vibify" class="project-thumbnail">
            </div>
            <div class="project-info">
                <h3 class="project-title">Vibify</h3>
                <p class="project-description">
                Spotify playlist analyzer using Spotify API and Python, created by myself and 3 of my friends at GVSU. Will analyze your playlist, aswell as provide recommendations along with analytical data.
                </p>
                <div class="project-tags">
                <span class="project-tag">Python</span>
                <span class="project-tag">APIs</span>
                <span class="project-tag">Git</span>
                </div>
                <!-- Update project URL -->
                <a href="https://vibify.streamlit.app" class="project-link">
                View Project
                <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                </a>
            </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="contact-description">
          Feel free to reach out if you're looking to connect:
        </p>
        <div class="contact-links">
          <a href="mailto:dberg2703@gmail.com" class="contact-button">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            Email
          </a>
          <a href="https://www.linkedin.com/in/dean-berg/" target="_blank" class="contact-button">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            LinkedIn Profile
          </a>
          <a href="https://github.com/DeanB27/" target="_blank" class="contact-button">
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Dean Berg. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style>
/* Global Styles */
:root {
  --primary-color: rgb(37, 99, 235);
  --dark-color: rgb(30, 41, 59);
  --light-color: rgb(248, 250, 252);
  --text-color: rgb(51, 65, 85);
  --accent-color: rgb(28, 84, 208);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--light-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

/* Header */
.header {
  background-color: var(--dark-color);
  color: white;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.navigation ul {
  display: flex;
  gap: 1.5rem;
}

.navigation a {
  color: white;
  transition: color 0.3s;
}

.navigation a:hover {
  color: rgb(147, 197, 253);
}

/* Hero Section */
.hero {
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-icon {
  background-color: var(--accent-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.hero .title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero .description {
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  color: var(--primary-color);
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.social-button:hover {
  background-color: rgb(239, 246, 255);
}

/* Section Styles */
section {
  padding: 4rem 0;
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

/* About Section */
.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-container {
  margin-bottom: 1.5rem;
}

.photo-frame {
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  overflow: hidden; 
  background-color: rgb(226, 232, 240); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.about-text p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.skills {
  margin-top: 1.5rem;
}

.skills h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: rgb(226, 232, 240);
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
}

/* Experience Section */
.experience {
  background-color: rgb(241, 245, 249);
}

.timeline {
  max-width: 48rem;
  margin: 0 auto;
}

.timeline-item {
  padding-left: 1.5rem;
  border-left: 4px solid var(--primary-color);
  margin-bottom: 3rem;
}

.job-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.job-title h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.company {
  color: rgb(100, 116, 139);
}

.job-period {
  color: rgb(100, 116, 139);
  margin-bottom: 1rem;
}

.job-description {
  list-style-type: disc;
  padding-left: 1.25rem;
}

.job-description li {
  margin-bottom: 0.5rem;
}

/* Projects Section */
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.project-thumbnail {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.project-image.blue {
  background-color: rgb(191, 219, 254);
  color: rgb(30, 64, 175);
}

.project-image.green {
  background-color: rgb(187, 247, 208);
  color: rgb(21, 128, 61);
}

.project-image.purple {
  background-color: rgb(216, 180, 254);
  color: rgb(107, 33, 168);
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.project-description {
  color: rgb(100, 116, 139);
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tag {
  background-color: rgb(241, 245, 249);
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.project-link {
  color: var(--primary-color);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.3s;
}

.project-link:hover {
  color: rgb(30, 64, 175);
}

/* Contact Section */
.contact {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}

.contact-description {
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto 2rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contact-button {
  background-color: white;
  color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s;
  min-width: 16rem;
  justify-content: center;
}

.contact-button:hover {
  background-color: rgb(239, 246, 255);
}

/* Footer */
.footer {
  background-color: var(--dark-color);
  color: white;
  text-align: center;
  padding: 2rem 0;
}

/* Media Queries */
@media (min-width: 768px) {
  .header-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .logo {
    margin-bottom: 0;
  }

  .about-content {
    flex-direction: row;
    align-items: flex-start;
  }

  .photo-container {
    width: 33.333%;
    margin-bottom: 0;
  }

  .about-text {
    width: 66.667%;
    padding-left: 3rem;
  }

  .job-title {
    flex-direction: row;
    align-items: center;
  }

  .company {
    margin-left: 1rem;
  }

  .project-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .contact-links {
    flex-direction: row;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .hero .title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>