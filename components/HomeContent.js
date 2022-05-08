import Image from 'next/image'
import styles from '../styles/HomeContent.module.css'

const HomeContent = () => {
  return (
    <div className={styles.background}>
      <div className={styles.imageContainer}>
        <Image priority={true} src='/img/entrance.jpg' layout='fill' objectFit='cover' alt="home entrance picture"/>
      </div>
      <div className={styles.doubleContainer}>
        <div className={styles.smallImage}>
          <Image priority={true} src='/img/Gerbrand/7.jpg' layout='fill' objectFit='cover' alt="home Gerbrand painting"/>
        </div>
        <div className={styles.smallImage}>
          <Image priority={true} src='/img/Eline/2.jpg' layout='fill' objectFit='cover' alt="home Eline painting"/>
        </div>
      </div>
    </div>
  )
}

export default HomeContent