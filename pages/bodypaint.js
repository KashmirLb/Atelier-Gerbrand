import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"
import styles from '../styles/Bodypaint.module.css'


const Bodypaint = () => {
  return (
    <Layout page="Bodypaint">
        <div className="contentContainer">
            <h1>Bodypaint</h1>
            <div className={styles.bodypaintContainer}>

              <div className={styles.imageContainer}>
                <Image src="/img/bodypaint.jpg" width={599} height={640} alt="woman bodypainted"/>
              </div>
              <div className={styles.textContainer}>
                <p>Become a piece of art and celebrate the beauty of your body.</p>
                <p>We offer a complete body painting session for 300€, which lasts an entire afternoon (about 6 hours).</p>
                <p><span> This includes a photoshoot by Jauwk Ras.</span> </p><p>You will receive an enlargement and a booklet with 12 photos.</p>
                <div></div>
                  <div><Link href="/contact">contact us</Link></div>
              </div>
            
            
            </div>
        </div>
    </Layout>
  )
}

export default Bodypaint