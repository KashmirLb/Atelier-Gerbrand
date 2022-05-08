import styles from '../styles/LocationComponent.module.css'
import Link from 'next/link'

const LocationComponent = () => {
  return (
    
    <div className={styles.locationContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.locationTextBackground}>
                
                <h2>Studio location:</h2>
                <p>Country: <span>The Netherlands</span></p>
                <p>City: <span>Enkhuizen</span></p>
                <p>Street: <span>Westerstraat, 61</span></p>
                <div className={styles.locationText}>
                    <p> Westerstraat 61 1601 AC Enkuizen </p>
                    <div className={styles.frameContainer}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9670.240371172942!2d5.291039!3d52.7040352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c63ef378f5e610b!2sAtelier%20Gerbrand!5e0!3m2!1ses!2ses!4v1650040997324!5m2!1ses!2ses" 
                            className={styles.frame}
                            style={{'border':'0'}} 
                            loading="lazy" 
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
            <p>Unable to pick up the item you want? <Link href="/contact">Contact us</Link> to discuss delivery options. </p>
        </div>
    </div>
  )
}

export default LocationComponent