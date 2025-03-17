import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import styles from '@styles/Projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: "Hardware Security Analysis Framework",
      description: "Developed a comprehensive framework for evaluating and testing hardware security components in embedded systems, with a focus on identifying vulnerabilities in supply chain processes.",
      tech: ["Security Testing", "Hardware Analysis", "Risk Assessment"],
      year: "2023"
    },
    {
      title: "Privacy-Preserving Data Analytics",
      description: "Researched and implemented privacy-enhancing technologies to enable secure data analysis without compromising sensitive personal information.",
      tech: ["Differential Privacy", "Homomorphic Encryption", "Python"],
      year: "2022"
    },
    {
      title: "Cyber Resilience Assessment Tool",
      description: "Created an assessment methodology and supporting tool to help organizations evaluate and improve their cyber resilience posture against emerging threats.",
      tech: ["Risk Management", "Web Development", "JavaScript"],
      year: "2021"
    },
    {
      title: "Surveillance Technology Mapping Initiative",
      description: "Contributed to an international effort to document and analyze the proliferation of surveillance technologies and their impact on civil liberties.",
      tech: ["Open Source Intelligence", "Data Visualization", "Research"],
      year: "2020"
    },
    {
      title: "International Cybersecurity Capacity Building",
      description: "Developed training materials and methodologies for international partners to enhance their cybersecurity capabilities and foster cross-border collaboration.",
      tech: ["Training Development", "Policy Analysis", "Knowledge Transfer"],
      year: "2019"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Ben Ballard</title>
        <meta name="description" content="Cybersecurity projects and research by Ben Ballard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className={styles.main}>
        <h1 className={styles.title}>Projects & Research</h1>
        <p className={styles.subtitle}>Selected work in cybersecurity, privacy, and digital rights</p>
        
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectYear}>{project.year}</div>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.moreProjects}>
          <h2>More Work</h2>
          <p>
            This is a selection of my recent work. I've contributed to many other projects related to 
            cybersecurity policy, privacy research, and technical security analysis. 
            Please <a href="/contact">contact me</a> for more information about my research and 
            professional work.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}