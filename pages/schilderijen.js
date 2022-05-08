import Layout from '../components/Layout'
import List from '../components/List'
import FullScreen from '../components/FullScreen'
import { useState, useEffect } from 'react'
import { MongoClient } from 'mongodb'

const Schilderijen = ({result, imageResult}) => {

  const [ allResults, setAllResults] = useState([])
  const [ fullScreen, setFullScreen ] = useState(false)
  const [ imageSelected, setImageSelected ] = useState(0)

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
    if(fullScreen){
      document.body.style='overflow: hidden'
    }
    else{
      document.body.style="overflow: auto"
    }
  },[fullScreen])

  const clickedImage = (image)=>{
    let number;
    allResults.map( (item, index) =>{
      if(item._id===image._id){
        number=index
      }
    })
    setImageSelected(number)  
    setFullScreen(true) 
  }

  return (
    <div>
      {fullScreen && <FullScreen setFullScreen={setFullScreen} allResults={allResults} imageSelected={imageSelected}/>}
      <Layout page="Paintings">
        <div className="contentContainer">
          <h1>Paintings</h1>
          {allResults.length>0 ? <List items={allResults} clickedImage={clickedImage}/> : 'loading'}
        </div >
      </Layout>
    </div>
  )
}

export async function getStaticProps() {

  let result = [];
  let imageResult = [];

  try{
    const client = await MongoClient.connect(process.env.DB_LINK)
  
    const db = client.db();
  
    const collection = db.collection("schilderijens")
    const imageCollection = db.collection("upload_file")
  
    const [ data, imageData ] = await Promise.all([
      collection.find().sort({created: 'desc'}).toArray(),
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

export default Schilderijen