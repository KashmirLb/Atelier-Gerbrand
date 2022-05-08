import styles from '../styles/MobileMenu.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import { generarId } from '../helpers'
import ConfirmLink from './ConfirmLink'
import LinkType from './LinkType'


const MobileMenu = () => {

    const [ clicked, setClicked ] = useState(false)
    const [ linkClicked, setLinkClicked ] = useState(false)
    const [ fullLink, setFullLink ] = useState("")
    const [ mobileLink, setMobileLink ] = useState("")

    const router = useRouter();

    const linkArray = [
        <Link key="news" href="/news">News</Link>,
        <Link key="/schilderijen" href="/schilderijen">Paintings</Link>,
        <Link key="/moreArt" href="/moreArt">More art</Link>,
        <Link key="/artists" href="/artists">The Artists</Link>,
        <div className={styles.separator} key={generarId()}/>,
        <Link key="/location" href="/location">Location</Link>,
        <Link key="/contact" href="/contact">Contact</Link>,
    ]

    const createLinks = linkArray.map( link =>{

        if(link.props.href===router.pathname){
           const newLink = <Link href={link.props.href} key={generarId()}><a onClick={()=>setClicked(false)} className={styles.selected}>{link.props.children}</a></Link>
           return newLink
        }
        if(link.props.href){
            return <Link href={link.props.href} key={generarId()}><a onClick={()=>setClicked(false)}>{link.props.children}</a></Link>
        }
        
        return link
    })

    const linkClickHandler = (fullLink, mobileLink) =>{
        setFullLink(fullLink)
        setMobileLink(mobileLink)
        setLinkClicked(true)
    }

  return (
        <div>
            {linkClicked && <ConfirmLink fullLink={fullLink} mobileLink={mobileLink} setLinkClicked={setLinkClicked}/>}
            {
                clicked ? 
                    (              
                      <div className={styles.cover}>
                            <div className={styles.menuWindow}>
                                <div className={styles.topBar}>
                                    <Link href="/">
                                        <a>
                                            <Image src='/img/large-icon.png' height={70} width={70} alt="atelier-logo"/>
                                        </a>
                                    </Link>
                                </div>
                                <nav>
                                    {createLinks}
                                    <LinkType link="instagram" linkClass={styles.linkIcon} linkClickHandler={linkClickHandler}/>
                                    <LinkType link="facebook" linkClass={styles.linkIcon} linkClickHandler={linkClickHandler}/>   
                                </nav>
                                <div className={styles.closeButtonContainer}>
                                    <div className={styles.closeButton} onClick={()=>setClicked(false)}>
                                        <Image src='/img/eliminar-blanco.png' height={100} width={100} alt="Close menu icon"/>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    )
                    :
                    (
                        <div onClick={()=>setClicked(true)} className={styles.mobileIcon}>
                            <Image src='/img/large-icon.png' height={100} width={100} alt="Open menu icon"/>
                        </div>  
                    )
            }
        </div> 
  )
}

export default MobileMenu