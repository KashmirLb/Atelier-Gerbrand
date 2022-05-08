import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Artists.module.css'

const Artists = () => {
  return (
    <Layout page="Artists">
      <div className="contentContainer">
        <h1>Artists</h1>
        <div className={styles.sectionContainer}>
          <section className={styles.normalSection}>
            <div className={styles.imageContainer}>
              <Image src='/img/fondo.jpg' width={640} height={960} alt="both artists painting"/>
            </div>
            <div className={styles.normalTextContainer}>
              <div className={styles.sectionTextContainer}>
                <h2>The Studio</h2>
                <p>We are <span>Gerbrand Lub</span> and <span>Eline de Zoete</span>,</p>
                <p>In August 2020 we opened the doors of our studio: Atelier Gerbrand to the public.</p>
                <p>An intimate and light place in the Westerstraat of Enkhuizen where we create and expose all our work.</p> 
                <p>{"We both work here 'live' on our projects and have several workshops taking place during the week."}</p>
              </div>
            </div>
          </section>
          <section className={styles.reverseSection}>
            <div className={styles.imageContainer}>
              <Image src='/img/Eline2.jpg' width={640} height={960} alt="Eline painting puppets"/>
            </div>
            <div className={styles.reverseTextContainer}>
              <div className={styles.sectionTextContainer}>
                <h2>Eline de Zoete</h2>
                <p>Geboren uit een familie van schilders is het talent aangeboren.</p>
                <p>Nadat Eline naar Noord-Holland is verhuisd maakte zij kennis met Magisch realist Axel Kreher (1941-2001)
                waarvan zij een jaar privéles heeft gehad, hierna heeft ze zich zelf verder ontwikkeld. 
                </p>
                <p>Eline is op vele
                vlakken actief in de kunsten, ze heeft toneelstukken geschreven, gedichten, liedjes, een prentenboek, 
                {"columns en diverse korte scenario's, hiernaast is ze de creator van de poppen Lila en Loet en"} 
                speler/acteur en vormgever bij Toneelgroep Drommedaris.</p>
                <p>{"Haar werk heeft vaak dromerige en sensuele thema's waar veel passie vanuit gaat."}</p>
                <p>Felle kleuren, energie en vrouwelijke kracht zijn de kernwoorden die haar werk omschrijven.</p>
              </div>
            </div>
          </section>
          <section className={styles.normalSection}>
            <div className={styles.imageContainer}>
              <Image src='/img/Gerbrand.jpg' width={682} height={1024} alt="picture of Gerbrand"/>
            </div>
            <div className={styles.normalTextContainer}>
              <div className={styles.sectionTextContainer}>
                <h2>Gerbrand Lub</h2>
                <p>Geboren in een familie van vissers, reizigers en creatievelingen is zijn werk een logisch gevolg 
                na alle omzwervingen die hij heeft gemaakt in zijn leven.</p>
                <p>Gerbrand is een avonturier in hart en ziel.</p>
                <p>Als jongen van 14 stapte hij zonder scrupules aan boord van de visserskotter van zijn oom,
                omdat school hem niets te bieden had. 
                Het avontuur trok harder dan de schoolbanken.</p>
                <p>Nadien heeft hij letterlijk iedere uithoek van de wereld bezocht en beleefd.
                En nog steeds trekt het reizen. Sinds 2009 is hij zijn herinneringen gaan vertalen in schilderijen.</p>
                <p>Gerbrand is altijd zeer aangetrokken geweest tot de moderne kunst en met name de Cobra groep. 
                Vooral Karel Appel is altijd een grote inspirator geweest.
                </p>
                <p>In de afgelopen 10 jaar heeft zijn werk zich steeds meer ontwikkeld en is er een grote collectie 
                aan kleurrijke herinneringen aan vele verre oorden ontstaan.</p>
              </div>
            </div>
          </section>
         
        </div>
      </div>
    </Layout>
  )
}

export default Artists