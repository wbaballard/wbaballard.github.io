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
        <title>Ben Ballard | Policy * Privacy * Security</title>
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
              <h1 className={styles.title}><i>Ben Ballard</i></h1>
              <h2 className={styles.subtitle}>Policy | Privacy | Security</h2>
            </div>
          </div>
        </div>
        
        <div className={styles.bioSection}>
          <div className={styles.card} style={{ width: "calc(100% - 4rem)" }}>
            <p><b>Ben Ballard</b> is a cybersecurity engineer at the MITRE Corporation. Ben has served as a Google Public Policy Fellow at the Electronic Frontier Foundation, an X-Force Fellow with the National Security Innovation Network, and a cybersecurity fellow at the Citizen Lab at the Munk School of Global Affairs & Public Policy, University of Toronto. His research centers around the international governance of information security and privacy, especially data appropriation, surveillance, and deception. At work, he supports hardware security projects, cyber resilience efforts, risk assessments, international capacity building, and privacy attacks research.</p>
          </div>
        </div>
        
        {/* Rest of your page content */}
      </main>

      <Footer />
    </div>
  )
}