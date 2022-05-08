import { useEffect, useState } from "react"
import EroticIntro from "../components/EroticIntro"
import Layout from "../components/Layout"
import styles from '../styles/Erotic.module.css'
import List from "../components/List"
import { MongoClient } from 'mongodb'
import Link from "next/link"

const Erotic = ({result, imageResult}) => {

    const [ allResults, setAllResults] = useState([])

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

  return (
    <Layout page="Erotic Museum">
        <div className={styles.eroticContainer}>
            <h1>Erotic Museum</h1>
            <EroticIntro/>
            <h2>Exposition</h2>
            <div className={styles.eroticList}>
                <List items={allResults}/>
            </div>
            {/* <Link href="/moreArt">Back</Link> */}
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
    
      const collection = db.collection("erotics")
      const imageCollection = db.collection("upload_file")
    
      const [ data, imageData ] = await Promise.all([
        collection.find().sort({updatedAt: 'desc'}).toArray(),
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

export default Erotic