import Head from 'next/head'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import SideBar from './SideBar'
import MobileMenu from './MobileMenu'

const Layout = ({children, page}) => {

  return (
    <div>
        <Head>
            <title>Atelier Gerbrand - {page}</title>
            <meta name="description" content="Gerbrand atelier studio" />
            <link rel="icon" href="/icon.png" />
        </Head>
        <div className={styles.background}>
          <SideBar/>
          <div className={styles.content}>
            <main>
                {children}
                <Footer/>
            </main>
          </div>
        </div>
        <MobileMenu/> 
    </div>
  )
}

export default Layout