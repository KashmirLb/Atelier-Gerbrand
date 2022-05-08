import styles from "../styles/List.module.css"
import { useEffect, useState } from "react"
import ImagePreview from "./ImagePreview"
import { generarId } from '../helpers'

const List = ({items, clickedImage}) => {

    const [ display, setDisplay ] = useState([])
    const [ grid, setGrid ] = useState([])

    useEffect(()=>{

        let excluded = []
        const orderedItems = items.map(( item, index )=>{
          
          const checkHeight = item.image.height*1.3

          if(excluded.includes(index)){
            return 0
          }
          else if(item.image.width>checkHeight){
            return item
          }
          else {
            let secondItem = {}

            const excludedItem = items.map( (subItem, subIndex) =>{
              const checkSubHeight = subItem.image.height*1.3

              if(subIndex>index && subItem.image.width<checkSubHeight && !excluded.includes(subIndex) && Object.keys(secondItem).length===0){
                secondItem = subItem
                
                return subIndex
              }
            })

            const excludedItemIndex = excludedItem.find(item => item)
            excluded.push(excludedItemIndex)
      
            if (Object.keys(secondItem).length===0){
              return item
            }
            else{
              return [item, secondItem]
            } 
          } 
        })
        const clearOrderedItems = orderedItems.filter( item => item !==0)
        setGrid(clearOrderedItems)
      }, [items])

      useEffect(()=>{
        const newItems = grid.map(item => {

          if(Array.isArray(item)){
            return (
              <div className={styles.doubleGrid} key={generarId()}>
                <ImagePreview 
                  key={item[0].id ? item[0].id : item[0]._id} 
                  item={item[0]} 
                  clickedImage={clickedImage}
                />
                {
                  item[1] 
                  ? 
                  <ImagePreview 
                    key={item[1].id ? item[1].id : item[1]._id} 
                    item={item[1]} 
                    clickedImage={clickedImage}
                  />
                  :
                  null
                }
              </div>
            )
          }
          else{
            return(
              <div className={styles.singleGrid} key={generarId()}>
                <ImagePreview 
                  key={item.id ? item.id : item._id} 
                  item={item} 
                  clickedImage={clickedImage}
                />
              </div>
            )
          }
        })
        setDisplay(newItems)
      }, [ grid, clickedImage ])
    
  return (
    <div className={styles.background}>
      <div className={`container ${styles.artGrid}`}>
          {display}
      </div>
    </div>
  )
}

List.defaultProps = {
  clickedImage: null
}

export default List