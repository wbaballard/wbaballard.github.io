import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Image from 'next/image'
import styles from '@styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Ben Ballard</title>
        <meta name="description" content="About Ben Ballard - Cybersecurity Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      {/* Wide banner image with overlaid title */}
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImage}>
          <img
            src="/banner-image.jpg" // Temporary placeholder - replace with your banner
            alt="Cybersecurity Banner"
            className={styles.bannerImg}
          />
          <div className={styles.bannerOverlay}></div>
          <h1 className={styles.overlayTitle}>About Me</h1>
        </div>
      </div>
      
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.profileImage}>
              <img 
                src="/about-image.png" 
                alt="Ben Ballard decorating a Christmas tree with his cat" 
                className={styles.actualImage}
              />
            </div>
          </div>
          
          <div className={styles.textContent}>
            <section className={styles.section}>
              <h2>Background</h2>
              <p>
                I'm a cybersecurity engineer with a focus on the intersection of technology, policy, and security. My journey in cybersecurity began during my undergraduate studies and has led me through various roles in research, policy development, and technical implementation.
              </p>
            </section>
            
            <section className={styles.section}>
              <h2>Experience</h2>
              <div className={styles.experienceItem}>
                <h3>MITRE Corporation</h3>
                <p className={styles.role}>Cybersecurity Engineer</p>
                <p>Working on hardware security projects, cyber resilience efforts, risk assessments, and privacy research.</p>
              </div>
              
              <div className={styles.experienceItem}>
                <h3>Electronic Frontier Foundation</h3>
                <p className={styles.role}>Google Public Policy Fellow</p>
                <p>Researched and contributed to policy development on digital rights and privacy protection.</p>
              </div>
              
              <div className={styles.experienceItem}>
                <h3>Citizen Lab, University of Toronto</h3>
                <p className={styles.role}>Cybersecurity Fellow</p>
                <p>Conducted research on surveillance technologies and their implications for global security and human rights.</p>
              </div>
            </section>
            
            <section className={styles.section}>
              <h2>Education</h2>
              <ul className={styles.education}>
                <li>
                  <strong>M.S. in Computer Science</strong> - Specialized in Cybersecurity
                </li>
                <li>
                  <strong>B.S. in Information Technology</strong> - Minor in International Relations
                </li>
              </ul>
            </section>
            
            <section className={styles.section}>
              <h2>Skills</h2>
              <div className={styles.skills}>
                <div className={styles.skillCategory}>
                  <h3>Technical</h3>
                  <ul>
                    <li>Hardware Security Analysis</li>
                    <li>Vulnerability Assessment</li>
                    <li>Penetration Testing</li>
                    <li>Risk Management</li>
                    <li>Security Architecture</li>
                  </ul>
                </div>
                
                <div className={styles.skillCategory}>
                  <h3>Research</h3>
                  <ul>
                    <li>Privacy Analysis</li>
                    <li>Surveillance Technology</li>
                    <li>International Security Frameworks</li>
                    <li>Policy Development</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}