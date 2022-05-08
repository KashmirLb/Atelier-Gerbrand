import Image from "next/image";
import styles from '../styles/ImagePreview.module.css'
import { artistName } from "../helpers";
import Link from "next/link";
import { useState, useEffect } from 'react'

const ImagePreview = ({item, clickedImage}) => {

    const [ data, setData ] = useState(<div className={styles.separator}/>)
    const { title, image, height, width, style, available, artist } = item;
    const [ imageItem, setImageItem ] = useState(<div></div>)


    useEffect(()=>{

      let availibility =null

      if(available===true){
        availibility = <p className={styles.available}>Available</p>
      }
      else if (available===false){
        availibility = <p className={styles.notAvailable}>Not Available</p>
      }

      if(title){
        setData(
          <div className={styles.textContainer}>
            <h2>{title}</h2>
            <p>Artist: <span>{artist && artistName(artist)}</span></p>
            {height && <p>Heigth: <span>{height} cm</span></p>}
            {width && <p>Width: <span>{width} cm</span></p>}
            {style && <p className={styles.styleText}>Style:<span>{style}</span></p>}
            {availibility}
            <div><Link href="/contact">Contact for more information</Link></div>
          </div>
        )
      }

      if(clickedImage!==null){
        setImageItem(<Image onClick={()=>clickedImage(item)} priority={true} src={image.url} width={image.width} height={image.height} alt={title}/>)
      }
      else{
        setImageItem(<Image priority={true} src={image.url} width={image.width} height={image.height} alt={title}/>)
      }

    },[title, height, width, style, available, artist, clickedImage, image.height, image.width, image.url, item])

  return (
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          {imageItem}
        </div>
        {data}
      </div>
  )
}

export default ImagePreview