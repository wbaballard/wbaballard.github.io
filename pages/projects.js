import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import styles from '@styles/Projects.module.css'

export default function Projects() {
  // State to track which video is currently being played
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      title: "Global Cyber Capacity Building - MITRE",
      description: "MITRE's global cyber capacity building team supports the US State Department's Bureau of Cyberspace and Digital Policy. We work with US partners around the world to bolster national cyber capabilities, address gaps in national cybersecurity legislation, impliment national cybersecurity strategies, and share subject matter expertise with security professionals in the field.",
      tech: ["International Cyber Capacity Building", "Legislative Assessment", "Strategy"],
      year: "2023-Present",
      url: "https://industrialcyber.co/threat-landscape/two-new-mitre-programs-central-to-strengthening-cyber-defense-work-on-building-global-cyber-capacity/" // Added URL property
    },
    {
      title: "Health-Cyber REST Lab - MITRE",
      description: "MITRE's Health Innovation Center supports federal and state agencies building cybersecurity resilience within the healthcare sector. We've researched cyber capacity building at rural hospitals, performed table top exercises at major hospitals, and studied cyber attacks against healthcare infrastructure",
      tech: ["Threat Modeling", "Adversary Emulation", "Healthcare"],
      year: "2023-Present",
      url: "https://www.mitre.org/our-impact/mitre-labs/health-and-society-innovation-center" // Add your actual URL here
    },
    {
      title: "PANOPTIC Privacy Threat Model - MITRE",
      description: "MITRE PANOPTIC™, the Pattern and Action Nomenclature Of Privacy Threats In Context, is a publicly available privacy threat taxonomy for breaking down and describing privacy attacks against individuals and groups of individuals.",
      tech: ["Privacy Engineering", "Threat Modeling", "Privacy Threats"],
      year: "2021-Present",
      url: "https://ptmworkshop.gitlab.io/#/panoptic" // Add your actual URL here
    },
    {
      title: "Threat Modeling with MITRE ATT&CK",
      description: "Threat Modeling with ATT&CK provides a recommended approach that integrates MITRE ATT&CK® – the common language that security operations teams rely upon – into their organization’s threat modeling practices.",
      tech: ["Cyber Threat Intelligence", "Threat Modeling", "MITRE ATT&CK"],
      year: "2024",
      url: "https://center-for-threat-informed-defense.github.io/threat-modeling-with-attack/" // Add your actual URL here
    },
    {
      title: "Pandemic Privacy - Citizen Lab",
      description: "We compared how various information technologies were deployed to collect data during COVID-19. We examined whether Canadian health, privacy, or emergency laws hindered pandemic response efforts, and assessed the potential implications of reforming data protection laws to permit broader collection, use, or disclosure of personal information in future health emergencies.",
      tech: ["Comparative Analysis", "International Law", "Healthcare"],
      year: "2021",
      url: "https://citizenlab.ca/2021/09/pandemic-privacy-collection-technologies-data-collection-laws-and-legislative-reform-during-covid-19/" // Add your actual URL here
    },
    {
      title: "Is Your Face Really Your Own - TEDxTufts",
      description: "In this talk I focus on facial recognition technology and its implications for privacy and civil liberties. I discuss how facial recognition has rapidly advanced and become integrated into various aspects of our lives, from unlocking our phones to surveillance systems in public spaces.",
      tech: ["Surveillance", "TEDx", "Policing"],
      year: "2020",
      url: "https://www.youtube.com/watch?v=KmZ7T2tL3Og",
      videoId: "KmZ7T2tL3Og", // YouTube video ID
      type: "video" // Specify this is a video project
    }
  ];

  // Function to handle clicking on a video thumbnail
  const handleVideoClick = (videoId) => {
    setActiveVideo(videoId);
  };

  // Function to close video modal
  const closeVideo = () => {
    setActiveVideo(null);
  };

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
              
              {/* Modified title rendering based on project type */}
              <h2 className={styles.projectTitle}>
                {project.type === "video" ? (
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleVideoClick(project.videoId);
                    }}
                    className={`${styles.projectLink} ${styles.videoLink}`}
                  >
                    {project.title}
                  </a>
                ) : (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {project.title}
                  </a>
                )}
              </h2>

              {/* Video thumbnail for video projects */}
              {project.type === "video" && (
                <div 
                  className={styles.videoThumbnail}
                  onClick={() => handleVideoClick(project.videoId)}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${project.videoId}/mqdefault.jpg`} 
                    alt={`Thumbnail for ${project.title}`} 
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              
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
            policy, privacy, and security. 
            For more information about my research and professional work, please check my 
            LinkedIn or GitHub profiles linked in the footer.
          </p>
        </div>
      </main>

      {/* Video Modal that appears when a video is selected */}
      {activeVideo && (
        <div className={styles.videoModal} onClick={closeVideo}>
          <div 
            className={styles.videoContainer}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button className={styles.closeButton} onClick={closeVideo}>×</button>
            <iframe
              className={styles.videoIframe} // Added CSS class here
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}