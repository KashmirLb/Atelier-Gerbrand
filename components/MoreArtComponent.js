import styles from '../styles/MoreArtComponent.module.css'
import SectionComponent from './SectionComponent'

const MoreArtComponent = () => {

  const firstSection = {
    title: "Erotic Art",
    summary: "Art with extra spice",
    description: "Erotic art made by Eline de Zoete. \n \n Her work was recently exhibited in the Erotic Museum of Amsterdam",
    image: "eroticEntrance",
    url: "/erotic"
  }

  const secondSection = {
    title: "Sculpture and furniture",
    summary: "Crafted in the Studio",
    description: "Modern art made out of any material you can imagine. \n \n Explore the creativity that takes place in our workshop",
    image: "chairs",
    url: "/sculpture"
  }

  const thirdSection = {
    title: "Bodypaint",
    summary: "Including beauty of the human body",
    description: "We will cover your body in paint with this unique experience. \n \n Full bodypaint plus photoshoot session.",
    image: "bodypaint",
    url: "/bodypaint"
  }

  return (
    <div className={styles.background}>
      <h1>More art</h1>
      <SectionComponent item={secondSection}/>
      <SectionComponent item={thirdSection}/>
      <SectionComponent item={firstSection}/>
    </div>
  )
}

export default MoreArtComponent