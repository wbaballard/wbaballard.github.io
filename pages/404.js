import Link from 'next/link'
import Meta from '@components/Meta'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import styles from '@styles/404.module.css'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Meta title="404 - Page Not Found | Ben Ballard" />
      
      <Navbar />
      
      <main className={styles.main}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        
        <p className={styles.description}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/" className={styles.homeButton}>Return to Home</Link>
      </main>
      
      <Footer />
    </div>
  )
}