import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { MongoClient } from 'mongodb'
import styles from '../styles/News.module.css'
import Image from 'next/image'
import { generarId, addDates, formatLink } from '../helpers'
import Link from 'next/link'

const News = ({result, imageResult}) => {

    const [ allResults, setAllResults] = useState([])
    const [ articles, setArticles ] = useState([])

    useEffect(()=>{
        const newData = result.map( entry =>{
          for(let i=0; i<imageResult.length; i++){
    
            if(imageResult[i]._id===entry.image){
              entry.image=imageResult[i]
            }
          }
          return entry
        })
    
        setAllResults(newData)
      },[result, imageResult])

    useEffect(()=>{
        if(allResults.length>0){
            setArticles(createArticles(allResults))
        }
    },[allResults])

    const createArticles = (results) =>{

        const articlesArranged = results.map((item, index)=>{

          let newDate = null
          if(item.from && item.until){
            newDate = `From ${addDates(item.from)}, until ${addDates(item.until)}`
          }
          else if(item.from){
            newDate = `Published ${addDates(item.from)}`
          }
          
            if(index%2===0||index===0){
                return(
                    <article className={styles.normalSection} key={generarId()}>
                        <div className={styles.imageContainer}>
                            <Image src={item.image.url} width={item.image.width} height={item.image.height} alt={item.title}/>
                        </div>
                        <div className={styles.normalTextContainer}>
                            <div className={styles.sectionTextContainer}>
                                <h2>{item.title}</h2>
                                <p className={styles.articleContainer}>{item.article}</p>
                                {item.link && <div><Link href={formatLink(item.link)}><a target="_blank">Read more</a></Link></div>}
                                <p className={styles.dateSection}>{newDate}</p>
                            </div>
                        </div>
                    </article>
                )
            }
            else return(
                <article className={styles.reverseSection} key={generarId()}>
                        <div className={styles.imageContainer}>
                            <Image src={item.image.url} width={item.image.width} height={item.image.height} alt={item.title}/>
                        </div>
                        <div className={styles.reverseTextContainer}>
                            <div className={styles.sectionTextContainer}>
                                <h2>{item.title}</h2>
                                <p className={styles.articleContainer}>{item.article}</p>
                                {item.link && <div><Link href={formatLink(item.link)}><a target="_blank">Read more</a></Link></div>}
                                <p className={styles.dateSection}>{newDate}</p>
                            </div>
                        </div>
                    </article>
            )
        })
       
        return articlesArranged
    }

  return (
    <Layout page="News">
        <div className="contentContainer">
            <h1>News and Events</h1>
            <div className={styles.sectionContainer}>
                {articles}
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {

    let result = [];
    let imageResult = [];
  
    try{
      const client = await MongoClient.connect(process.env.DB_LINK)
    
      const db = client.db();
    
      const collection = db.collection("news")
      const imageCollection = db.collection("upload_file")
    
      const [ data, imageData ] = await Promise.all([
        collection.find().sort({published_at: 'desc'}).toArray(),
        imageCollection.find().toArray()
      ])
    
       result = JSON.parse(JSON.stringify(data))
       imageResult = JSON.parse(JSON.stringify(imageData))
    
      client.close()
    
    }
    catch(error){
      console.log(error)
    }
  
  
    return {
      props:{
        result,
        imageResult
      }
    }
  }

export default News