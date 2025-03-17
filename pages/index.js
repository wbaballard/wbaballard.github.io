import Head from 'next/head'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ben Ballard | Cybersecurity Engineer</title>
        <meta name="description" content="Personal website of Ben Ballard, a cybersecurity engineer at the MITRE Corporation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.profileImageContainer}>
              {/* Replace with your actual image in the public folder */}
              <Image 
                src="/profile-photo.jpg" 
                alt="Ben Ballard" 
                width={150} 
                height={150} 
                className={styles.profileImage}
              />
            </div>
            
            <div className={styles.heroText}>
              <h1 className={styles.title}>Ben Ballard</h1>
              <h2 className={styles.subtitle}>Cybersecurity Engineer</h2>
              
              <div className={styles.cta}>
                <Link href="/projects">
                  <a className={styles.button}>View Projects</a>
                </Link>
                <Link href="/contact">
                  <a className={styles.buttonOutline}>Get In Touch</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bioSection}>
          <div className={styles.card}>
            <p>Ben Ballard is a cybersecurity engineer at the MITRE Corporation. Ben has served as a Google Public Policy Fellow at the Electronic Frontier Foundation, an X-Force Fellow with the National Security Innovation Network, and a cybersecurity fellow at the Citizen Lab at the Munk School of Global Affairs & Public Policy, University of Toronto. His research centers around the international governance of information security and privacy, especially data appropriation, surveillance, and deception. At work, he supports hardware security projects, cyber resilience efforts, risk assessments, international capacity building, and privacy attacks research.</p>
          </div>
        </div>
        
        <div className={styles.highlightsSection}>
          <h2>Research Highlights</h2>
          <div className={styles.highlights}>
            <div className={styles.card}>
              <h3>Hardware Security</h3>
              <p>Working on cutting-edge hardware security projects to protect against emerging threats.</p>
            </div>
            <div className={styles.card}>
              <h3>Cyber Resilience</h3>
              <p>Developing frameworks and methodologies to enhance organizational cyber resilience.</p>
            </div>
            <div className={styles.card}>
              <h3>Privacy Research</h3>
              <p>Investigating privacy attacks and defense mechanisms in modern computing environments.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}