import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>BB</Link>
        
        {/* SVG Circuit Design */}
        <svg className={styles.circuitSvg} width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main horizontal line */}
          <line x1="0" y1="30" x2="60" y2="30" stroke="#f0edda" strokeWidth="2" />
          
          {/* Branch 1 - upward */}
          <line x1="20" y1="30" x2="35" y2="10" stroke="#f0edda" strokeWidth="2" />
          <circle cx="35" cy="10" r="3" fill="#f0edda" />
          
          {/* Branch 2 - downward */}
          <line x1="40" y1="30" x2="55" y2="45" stroke="#f0edda" strokeWidth="2" />
          <circle cx="55" cy="45" r="3" fill="#f0edda" />
          
          {/* Branch from Branch 1 */}
          <line x1="35" y1="10" x2="50" y2="10" stroke="#f0edda" strokeWidth="2" />
          <circle cx="50" cy="10" r="3" fill="#f0edda" />
          
          {/* Branch from Branch 2 */}
          <line x1="55" y1="45" x2="75" y2="45" stroke="#f0edda" strokeWidth="2" />
          <circle cx="75" cy="45" r="3" fill="#f0edda" />
          
          {/* End of main line */}
          <circle cx="60" cy="30" r="3" fill="#f0edda" />
          
          {/* Small dots along main line */}
          <circle cx="20" cy="30" r="2" fill="#f0edda" />
          <circle cx="40" cy="30" r="2" fill="#f0edda" />
        </svg>
      </div>
      
      <button 
        className={styles.mobileMenuButton} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? (
            // X icon when menu is open
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            // Hamburger icon when menu is closed
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>
      
      <ul className={`${styles.navItems} ${isMenuOpen ? styles.navOpen : ''}`}>
        <li className={router.pathname === "/" ? styles.active : ""}>
          <Link href="/" className={styles.navItem}>Home</Link>
        </li>
        <li className={router.pathname === "/about" ? styles.active : ""}>
          <Link href="/about" className={styles.navItem}>About</Link>
        </li>
        <li className={router.pathname === "/projects" ? styles.active : ""}>
          <Link href="/projects" className={styles.navItem}>Projects</Link>
        </li>
        <li className={router.pathname === "/blog" ? styles.active : ""}>
          <Link href="/blog" className={styles.navItem}>Blog</Link>
        </li>
        <li className={router.pathname === "/contact" ? styles.active : ""}>
          <Link href="/contact" className={styles.navItem}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}