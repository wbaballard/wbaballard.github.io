import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export default function Navbar() {
  const router = useRouter()
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>BB</a>
        </Link>
      </div>
      <ul className={styles.navItems}>
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