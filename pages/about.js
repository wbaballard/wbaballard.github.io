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
            src="/banner-image.jpg" 
            alt="Hiroshi Yoshida"
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
                src="/about-image.jpg" 
                alt="Ben Ballard decorating a Christmas tree with his cat" 
                className={styles.actualImage}
              />
            </div>
          </div>
          
          <div className={styles.textContent}>
            <section className={styles.section}>
              <h2>Background</h2>
              <p>
              I'm a senior cybersecurity engineer at the MITRE Corporation, where I support and manage a range of projects alongside teams from multiple government agencies on diverse cybersecurity challenges. My work spans international cyber capacity building, risk assessment and management, threat modeling, adversary emulation, privacy engineering, and cyber deception.
              </p>
              <p>
              I've worn a lot of hats over my career. My background is in policy. I went to school for international affairs and still look at my work through an international lens. I was always fascinated by how digital structures shape us and how policy can be used as a tool to redefine those structures. Now an engineer, I'm able to influence those structures through my work. Take a look below and at the Projects page to see some of my work.
              </p>
            </section>
            
            <section className={styles.section}>
              <h2>Experience</h2>
              <div className={styles.experienceItem}>
                <h3>MITRE Corporation</h3>
                <p className={styles.role}>Cybersecurity Engineer (August 2021 - Present)</p>
                <p>Contributing to cybersecurity projects for various U.S. government agencies, addressing a diverse set of security challenges across cybersecurity, risk assessment, and privacy research.</p>
              </div>
              
              <div className={styles.experienceItem}>
                <h3>The Citizen Lab, University of Toronto</h3>
                <p className={styles.role}>Cybersecurity Fellow (June 2020 - July 2021)</p>
                <p>Researched transparency reporting practices of ISPs and Internet platforms in Canada, the US, Europe, and South America. Published reports on law enforcement data sharing policies of companies operating in these markets.</p>
              </div>

              <div className={styles.experienceItem}>
                <h3>National Security Innovation Network</h3>
                <p className={styles.role}>X-Force Fellow (June 2020 - August 2020)</p>
                <p>Assessed the efficacy of the DoD SBIR/STTR programs' Commercialization Achievement Index for this US DoD program office that creates new communities of innovators to solve national security problems.</p>
              </div>
              
              <div className={styles.experienceItem}>
                <h3>Electronic Frontier Foundation</h3>
                <p className={styles.role}>Google Public Policy Fellow (June 2019 - August 2019)</p>
                <p>Conducted research and published articles on state surveillance, online censorship, data privacy, and user protection. Coordinated with international partner organizations to analyze ISP consumer privacy practices. Drafted advocacy briefs for imprisoned bloggers and technologists.</p>
              </div>
              
            </section>
            
            <section className={styles.section}>
              <h2>Education</h2>
              <ul className={styles.education}>
                <li>
                  <strong>M.A. in Law and Diplomacy</strong> - The Fletcher School, Tufts University (2020)
                  <p className={styles.educationDetail}>Specialization: Technology Policy & Security Studies</p>
                  <p className={styles.educationDetail}><em>Thesis: A Comparative Analysis of Facial Recognition Technologies Used by Law Enforcement in Chicago and Nice, France</em></p>
                </li>
                <li>
                  <strong>B.A. in International Relations</strong> - Connecticut College (2016)
                  <p className={styles.educationDetail}>Minor in History</p>
                  <p className={styles.educationDetail}>Selected Scholar: Toor Cummings Center for International Study and the Liberal Arts</p>
                  <p className={styles.educationDetail}>Honors: Pi Sigma Alpha (National Honor Society for Political Science)</p>
                </li>
              </ul>
            </section>
            
            <section className={styles.section}>
              <h2>Skills & Credentials</h2>
              <div className={styles.skills}>
                <div className={styles.skillCategory}>
                  <h3>Technical</h3>
                  <ul>
                    <li>Cybersecurity Tools: Wireshark, IDA, ELK Stack, SecurITree, ATT&CK Navigator</li>
                    <li>Programming: C++, Python, HTML5, CSS, Javascript</li>
                    <li>Data Analysis: STATA, RStudio, Gephi, NodeXL</li>
                    <li>Vulnerability Assessment</li>
                    <li>Security Architecture</li>
                  </ul>
                </div>
                
                <div className={styles.skillCategory}>
                  <h3>Research & Languages</h3>
                  <ul>
                    <li>Privacy Analysis</li>
                    <li>Surveillance Technology</li>
                    <li>International Security Frameworks</li>
                    <li>Policy Development</li>
                    <li>French: Advanced Low (ACTFL Certified)</li>
                    <li>Spanish: Basic</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className={styles.section}>
              <h2>Accomplishments</h2>
              <div className={styles.accomplishmentsGrid}>
                <div className={styles.accomplishmentItem}>
                  <h3>The Atlantic Council - Cyber 9/12 Strategy Challenge</h3>
                  <p><strong>First Place</strong> in this cyber strategy competition responding to simulated cyber crises (Fall 2019)</p>
                </div>
                <div className={styles.accomplishmentItem}>
                  <h3>PAMmie Award - Rising Star in Privacy and Cybersecurity</h3>
                  <p>Recognized with a Privacy at MITRE (PAMmie) award for contributions to internally funded research and external projects, including the Department of Veterans Affairs' first privacy/cybersecurity assessment (2025)</p>
                </div>
                <div className={styles.accomplishmentItem}>
                  <h3>Recognition - The MITRE Corporation</h3>
                  <p>x2 Trailblazer Awards</p>
                  <p>Synergist Award</p>
                  <p>x9 Spark Awards</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Publications</h2>
              <div className={styles.accomplishmentsGrid}>
                <div className={styles.accomplishmentItem}>
                  <h3>Articles</h3>
                  <h4>MITRE Engenuity</h4>
                  <p><strong>First Place</strong> in this cyber strategy competition responding to simulated cyber crises (Fall 2019)</p>
                </div>
                <div className={styles.accomplishmentItem}>
                  <h3>PAMmie Award - Rising Star in Privacy and Cybersecurity</h3>
                  <p>Recognized with a Privacy at MITRE (PAMmie) award for contributions to internally funded research and external projects, including the Department of Veterans Affairs' first privacy/cybersecurity assessment (2025)</p>
                </div>
                <div className={styles.accomplishmentItem}>
                  <h3>Recognition - The MITRE Corporation</h3>
                  <p>x2 Trailblazer Awards</p>
                  <p>Synergist Award</p>
                  <p>x9 Spark Awards</p>
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