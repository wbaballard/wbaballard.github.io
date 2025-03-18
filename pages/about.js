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
                  <h3>Technical & Linguistic</h3>
                  <ul>
                    <li>Cybersecurity Tools: Kali, Caldera, Wireshark, IDA, ELK Stack, SecurITree, ATT&CK Navigator</li>
                    <li>Programming: C++, Python, HTML5, CSS, Javascript</li>
                    <li>Data Analysis: STATA, RStudio, Gephi, NodeXL</li>
                    <li>Threat Hunting</li>
                    <li>Threat Modeling</li>
                    <li>Social Network Analysis</li>
                    <li>French: Advanced Low (ACTFL Certified)</li>
                    <li>Spanish: Basic</li>
                  </ul>
                </div>
                
                <div className={styles.skillCategory}>
                  <h3>Research</h3>
                  <ul>
                    <li>Law and Policy Analysis</li>
                    <li>Drafting Legislation</li>
                    <li>International Security Frameworks</li>
                    <li>Strategy Development</li>
                    <li>Cyber Threat Intelligence</li>
                    <li>Threat Assessment</li>
                    <li>Risk Assessment</li>
                    <li>Critical Infrastructure Assessment and Protection</li>
                    <li>Project Management (Both Technical and Non-Technical Teams)</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className={styles.section}>
              <h2>Accomplishments</h2>
              <div className={styles.accomplishmentsGrid}>
                <div className={styles.accomplishmentItem}>
                  <h3>The Atlantic Council - Cyber 9/12 Strategy Challenge</h3>
                  <p><strong>First Place</strong> in this cyber strategy competition responding to simulated cyber crisis (Fall 2019)</p>
                  <p><strong>Judged</strong> three subsequent competitions (NYC 2023, Cape Town 2024, DC 2025)</p>
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
              <ul className={styles.publications}>
              <li className={styles.publicationItem}>
                      <p>
                        <a href="https://center-for-threat-informed-defense.github.io/threat-modeling-with-attack/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.pubTitleLink}>
                          Threat Modeling with ATT&CK
                        </a>
                        . Schechter, Tyler, Ben Ballard, Kyle Wallace, Courtney Hassenfeldt, and Tiffany Bergeron. CT0122, Center for Threat Informed Defense, MITRE Engenuity, 2024.
                      </p>
                    </li>
                    <li className={styles.publicationItem}>
                      <p>
                        <a href="https://www.usenix.org/system/files/soups2024_poster19_abstract-katcher_final.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.pubTitleLink}>
                          The PANOPTIC™ Privacy Threat Model
                        </a>
                        . Katcher, Samantha, Ben Ballard, Cara Bloom, Katie Isaacson, Julie McEwen, Stuart Shapiro, Shelby Slotter, Mark Paes, and Ryan Xu. USENIX, 2024.
                      </p>
                    </li>
                    <li className={styles.publicationItem}>
                      <p>
                        <a href="https://www.usenix.org/system/files/soups2024_poster19-katcher_final.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.pubTitleLink}>
                          Privacy Threat Modeling for Everyone: MITRE PANOPTIC
                        </a>
                        . Katcher, Samantha, Ben Ballard, Katie Isaacson, Julie McEwen, Stuart Shapiro, and Shelby Slotter. USENIX, 2024.
                      </p>
                    </li>
                    <li className={styles.publicationItem}>
                      <p>
                        <a href="https://ptmworkshop.gitlab.io/static/media/WPTM_Summary_2024.a3e8d575a4b8c20102bd.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.pubTitleLink}>
                          Privacy Threat Modeling Workshop Summary 2024
                        </a>
                        . Ballard, Ben, et al. SOUPS Workshop on Privacy Threat Modeling, USENIX, 2024.
                      </p>
                    </li>
                    <li className={styles.publicationItem}>
                      <p>
                        <a href="https://ptmworkshop.gitlab.io/wptm22/static/media/PTM-Workshop-Summary.d0d710a693619cff9705.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.pubTitleLink}>
                          Privacy Threat Modeling Workshop Summary 2022
                        </a>
                        . Bloom, Cara, Ben Ballard, et al. SOUPS Workshop on Privacy Threat Modeling, USENIX, 2022.
                      </p>
                    </li>
                <li className={styles.publicationItem}>
                      <p>
                        <a href="https://policyreview.info/articles/analysis/mixed-traditions-evaluating-telecommunications-transparency" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.pubTitleLink}>
                          Mixed traditions: evaluating telecommunications transparency
                        </a>
                        . Ballard, Ben, and Parsons, Christopher. Internet Policy Review 11.1 (2022). Web.
                      </p>
                    </li>
                <li className={styles.publicationItem}>
                    <p>
                      <a href="https://utoronto.scholaris.ca/items/12ddb02f-0996-4602-9d5d-c052eef3977b" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.pubTitleLink}>
                        Pandemic Privacy: A Preliminary Analysis of Collection Technologies, Data Collection Laws, and Legislative Reform during COVID-19
                      </a>
                      . Ballard, Ben et al. Scholaris, University of Toronto, 2021. Web.
                    </p>
                  </li>
                  <li className={styles.publicationItem}>
                    <p>
                      <a href="https://www.eff.org/deeplinks/2019/08/ipandetec-rates-panamas-isps-its-first-quien-defiende-tus-datos-report" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.pubTitleLink}>
                        IPANDETEC Rates Panama's ISPs in Its First "¿Quién Defiende Tus Datos?" Report
                      </a>
                      . Ballard, Ben. Electronic Frontier Foundation, 13 Aug. 2019.
                    </p>
                  </li>
                  <li className={styles.publicationItem}>
                    <p>
                      <a href="https://www.eff.org/deeplinks/2019/07/chile-hears-who-has-their-data-thanks-years-quien-defiende-tus-datos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.pubTitleLink}>
                        Chile Hears Who Has Their Data, Thanks to Years of "¿Quién Defiende Tus Datos?"
                      </a>
                      . Ballard, Ben. Electronic Frontier Foundation, 31 Jul. 2019.
                    </p>
                  </li>
                  <li className={styles.publicationItem}>
                    <p>
                      <a href="https://www.fletcherforum.org/the-rostrum/2018/12/14/voter-data-microtargeting-and-the-digitization-of-elections" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.pubTitleLink}>
                        Voter Data, Microtargeting, and the Digitization of Elections
                      </a>
                      . Ballard, Ben. The Fletcher Forum of World Affairs, The Fletcher School of Law and Diplomacy, 14 Dec. 2018.
                    </p>
                  </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}