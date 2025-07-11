import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import styles from '@styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Ben Ballard</title>
        <meta name="description" content="Get in touch with Ben Ballard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className={styles.main}>
        <h1 className={styles.title}>Contact</h1>
        
        <div className={styles.imageContainer}>
          <img 
            src="/contact-image.jpg" 
            alt="Contact header image" 
            className={styles.headerImage}
          />
        </div>
        
        {/* You can add more content here later */}
      </main>

      <Footer />
    </div>
  )
}