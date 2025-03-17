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
      <div className={styles.logo}>
        <Link href="/">
          <a>BB</a>
        </Link>
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
          <Link href="/"><a>Home</a></Link>
        </li>
        <li className={router.pathname === "/about" ? styles.active : ""}>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li className={router.pathname === "/projects" ? styles.active : ""}>
          <Link href="/projects"><a>Projects</a></Link>
        </li>
        <li className={router.pathname === "/blog" ? styles.active : ""}>
          <Link href="/blog"><a>Blog</a></Link>
        </li>
        <li className={router.pathname === "/contact" ? styles.active : ""}>
          <Link href="/contact"><a>Contact</a></Link>
        </li>
      </ul>
    </nav>
  )
}