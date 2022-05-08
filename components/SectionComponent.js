import styles from '../styles/SectionComponent.module.css'
import Link from 'next/link'

const SectionComponent = ({item}) => {

    const { title, summary, description, image, url } = item;

  return (
    <section>
        <div className={styles.sectionContainer}>
            <Link href={url ? url : "/"} passHref>
                <div className={styles.titleContainer}>
                    <h2>{title}</h2>
                    <p>{summary}</p>
                </div>
            </Link>
            <div className={styles.textContainer}>
                <p>
                    {description}
                    
                <Link href={url ? url : "/"} passHref>
                    <a>
                        Visit content
                    </a>
                </Link>
                </p>
            </div>
        </div>

        
        <style jsx>
            {`
                section {
                    background-image: linear-gradient(to right, rgb(255 249 244 / 1), rgb(0 0 0 / .6)), url(/img/${image}.jpg);
                    background-size: cover;
                    background-position: 50%;
                    padding:3rem;
                
                 }
                 @media(max-width:450px){
                     section{
                        background-image: linear-gradient(to bottom, rgb(255 249 244 / .95), rgb(0 0 0 / .8)), url(/img/${image}.jpg);
                        background-size: cover;
                        background-position: 50%;
                        padding:3rem;
                     }
                 }
            `}
        </style>
    </section>
  )
}

export default SectionComponent