import styles from '../styles/ConfirmLink.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ConfirmLink = ({fullLink, mobileLink, setLinkClicked}) => {

    const [ buttonStyle, setButtonStyle ] = useState("")
    const [ iconImage, setIconImage ] = useState("")

    useEffect(()=>{
        if(fullLink.includes("instagram")){
            setIconImage(<Image src='/img/instagram-white.png' height={30} width={30} alt='link to instagram app'/>)
            setButtonStyle(styles.instagramButton)
        }
        else if(fullLink.includes("facebook")){
            setIconImage(<Image src='/img/facebook-white.png' height={30} width={30} alt='link to facebook app'/>)
            setButtonStyle(styles.facebookButton)
        }
    },[fullLink])

  return (
    <div className={styles.background}>
        <div className={styles.buttonContainer}>
            <Link href={mobileLink}>
                <a target="_blank">
                    <button className={buttonStyle}><div className={styles.iconContainer}>{iconImage}</div><span>Continue to App</span></button>
                </a>
            </Link>
            <Link href={fullLink}>
                <a target="_blank">
                    <button className={styles.webLink}><div>Continue with web browser</div></button>
                </a>
            </Link>
        </div>
        <div className={styles.closeButtonContainer}>
            <div className={styles.closeButton} onClick={()=>{setLinkClicked(false)}}>
                <Image src='/img/eliminar-blanco.png' height={100} width={100} alt="Close menu icon"/>
            </div>
        </div>
    </div>
  )
}

export default ConfirmLink