import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Errorpage.module.css'

const Errorpage = () => {
  return (
         <div className={styles.errorPage}>
             <Link href="/news"><Image width={200} height={74} src='/img/Logo.png' alt="Logo image" /></Link>
            <h1>Page not found! </h1>
            <p><Link href="/news">Go back to our main page</Link></p>
        </div>
  )
}

export default Errorpage