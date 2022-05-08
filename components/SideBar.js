import { useState } from 'react'
import styles from '../styles/SideBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import LinkType from './LinkType'
import ConfirmLink from './ConfirmLink'

const SideBar = () => {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ navState, setNavState ] = useState(styles.navMenu)
    const [ arrowDown, setArrowDown ] = useState(styles.arrowDown)

    //Mobile manage
    const [ linkClicked, setLinkClicked ] = useState(false)
    const [ fullLink, setFullLink ] = useState("")
    const [ mobileLink, setMobileLink ] = useState("")

    const router = useRouter();

    const linkArray = [
        <Link key="news" href="/news">News</Link>,
        <Link key="/schilderijen" href="/schilderijen">Paintings</Link>,
        <Link key="/moreArt" href="/moreArt">More art</Link>,
        <Link key="/artists" href="/artists">The artists</Link>,
        <div className={styles.separator} key="separator"/>,
        <Link key="/location" href="/location">Location</Link>,
        <Link key="/contact" href="/contact">Contact</Link>,
    ]

    const createLinks = linkArray.map( link =>{

        if(link.props.href===router.pathname){
           const newLink = <Link href={link.props.href} key={link.props.href}><a className={styles.selected}>{link.props.children}</a></Link>
           return newLink
        }
        return link
    })

    const toggleActive = () =>{
        if(menuOpen){
            setNavState(styles.navMenu)
            setArrowDown(styles.arrowDown)
            setMenuOpen(false)
        }
        else{
            setNavState(styles.navMenuActive)
            setArrowDown(styles.arrowDownActive)
            setMenuOpen(true)
        }
    }

    const linkClickHandler = (fullLink, mobileLink) =>{
        setFullLink(fullLink)
        setMobileLink(mobileLink)
        setLinkClicked(true)
    }

  return (
    <>
    {linkClicked && <ConfirmLink fullLink={fullLink} mobileLink={mobileLink} setLinkClicked={setLinkClicked}/> }
        <div className={styles.smallLogo}>
            <Link href="/">
                <a>
                    <Image width={200} height={74} src='/img/Logo.png' alt="Logo image" /> 
                </a>
            </Link>
        </div>

        <div className={styles.smallSideLogo} onClick={()=>toggleActive()}>
            <div className={styles.openMenu}>
                <Image width={120} height={40} src='/img/Logo.png' alt="Logo image" /> 
                <div className={styles.arrowContainer}>
                    <div className={arrowDown}>
                        <Image width={30} height={15} src='/img/arrow-down.png' alt="Logo image" /> 
                    </div>   
                </div>
            </div>
            <nav className={navState}>
                {createLinks}
            </nav>
        </div>
        <div className={styles.sidebar}>
            <header>
                <Link href="/">
                    <a>
                        <Image width={270} height={100} src='/img/Logo.png' alt="Logo image" />  
                    </a>
                </Link>
                <div className={styles.smallIconContainer}>
                    <LinkType link="instagram" linkClickHandler={linkClickHandler}/>
                    <LinkType link="facebook" linkClickHandler={linkClickHandler}/>
                </div>
            </header>
            <nav>
                {createLinks}
            </nav>
            <div className={styles.iconContainer}>
                <Link href='https://www.instagram.com/atelier_gerbrand/'>
                    <a target="_blank">
                        <Image src='/img/instagram.png' height={25} width={25} alt="instagram link"/>  
                    </a>
                </Link>
                <Link href='https://www.facebook.com/Atelier-Gerbrand-100388695087700/'>
                    <a target="_blank">
                        <Image src='/img/facebook.png' height={25} width={25} alt="facebook link"/>
                    </a>
                </Link>
            </div>
        </div>
    </>

  )
}

export default SideBar