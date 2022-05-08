import styles from '../styles/ContactComponent.module.css'
import Form from './Form';
import Image from 'next/image'
import { useState } from 'react';
import LinkType from './LinkType';
import ConfirmLink from './ConfirmLink';

const ContactComponent = () => {

      //Mobile manage
      const [ linkClicked, setLinkClicked ] = useState(false)
      const [ fullLink, setFullLink ] = useState("")
      const [ mobileLink, setMobileLink ] = useState("")

      const linkClickHandler = (fullLink, mobileLink) =>{
        setFullLink(fullLink)
        setMobileLink(mobileLink)
        setLinkClicked(true)
    }
    
  return (
    <div className={styles.contactContainer}>
      {linkClicked && <ConfirmLink fullLink={fullLink} mobileLink={mobileLink} setLinkClicked={setLinkClicked}/> }
        <div className={styles.itemsContainer}>
            <div className={styles.contactSection}>
              <Image src='/img/mail.png' height={30} width={30} alt="email icon"/>
              <p> info@ateliergerbrand.nl</p>
            </div>
            <div className={styles.contactSection}>
              <Image src='/img/phone.png' height={30} width={30} alt="phone icon"/>
              <p> 06 25 17 0991  <span> - </span> 06 149 444 10 </p>
            </div>
            <div className={styles.contactSection}>
              <LinkType link="instagram" linkClickHandler={linkClickHandler}><p>instagram.com/atelier_gerbrand/</p></LinkType>
            </div>
            <div className={styles.contactSection}>
              <LinkType link="facebook" linkClickHandler={linkClickHandler}><p>facebook.com/Atelier-Gerbrand</p></LinkType>
            </div>
            <h2>Send us a message directly:</h2>
            <Form/>
        </div>
    </div>
  )
}

export default ContactComponent