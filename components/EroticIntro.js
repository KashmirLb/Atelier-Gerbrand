import Image from 'next/image'
import styles from '../styles/EroticIntro.module.css'

const EroticIntro = () => {
  return (
    <>
        <section className={styles.firstSection}>
            <div className={styles.imageContainer}>
                <Image src="/img/eroticIntro1.jpg" width={1455} height={2048} alt="Erotic content poster" priority={true}/>
            </div>
            <div className={styles.textContainer}>
                <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un
                     sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal 
                     
                </p>
            </div>
        </section>
        <section className={styles.firstSection}>
            <div className={styles.secondImageContainer}>
                <Image src="/img/eroticIntro2.jpg" width={1024} height={768} alt="Picture viewing painting"/>
            </div>
            <div className={styles.secondTextContainer}>
                <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un
                     sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal 
                     
                </p>
            </div>
        </section>
    </>
  )
}

export default EroticIntro