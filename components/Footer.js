import Link from "next/link"
import styles from '../styles/Footer.module.css'

const Footer = () => {

  const newDate = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.bar}`}>
            <p>© {newDate} Atelier Gerbrand</p>
            <nav className={styles.navegator}>
              <Link key="news" href="/news">News</Link>
              <Link key="/schilderijen" href="/schilderijen">Paintings</Link>
              <Link key="/moreArt" href="/moreArt">More art</Link>
              <Link key="/artists" href="/artists">The Artists</Link>
              <Link key="/location" href="/location">Location</Link>
              <Link key="/contact" href="/contact">Contact</Link>
            </nav>            
        </div>
    </footer>
  )
}

export default Footer