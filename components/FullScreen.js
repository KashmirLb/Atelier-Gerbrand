import { useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/FullScreen.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/lazy'
import 'swiper/css/zoom'

import { Navigation, Lazy, Zoom } from 'swiper'

const FullScreen = ({setFullScreen, allResults, imageSelected}) => {

  useEffect(()=>{

    const fullScreen = document.getElementById("fullscreen")

    if(fullScreen.requestFullscreen){
      fullScreen.requestFullscreen()
    }
    else if(fullScreen.webkitRequestFullScreen){
      fullScreen.webkitRequestFullScreen()
    }
    else if(fullScreen.msRequestFullScreen){
      fullScreen.msRequestFullScreen()
    }
  },[])

  const exitHandler = () =>{
    if(!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement){
      setFullScreen(false)
    }
  }

  const closeHandler = () =>{
    if(document.exitFullscreen){
      document.exitFullscreen()
    }
    else if(document.wekitExitFullScreen){
      document.wekitExitFullScreen();
    }
    else if(document.msExitFullScreen){
      document.msExitFullScreen();
    }
    setFullScreen(false)
  }

  document.addEventListener('fullscreenchange', exitHandler, false);
  document.addEventListener('mozfullscreenchange', exitHandler, false);
  document.addEventListener('MSFullscreenChange', exitHandler, false);
  document.addEventListener('webkitfullscreenchange', exitHandler, false);

  const allImages = allResults.map(item =>{

    return(
      <SwiperSlide key={item._id}>
        <div className={`${styles.imageContainer} swiper-lazy`}>
          <div className='swiper-zoom-container'>
            <Image src={item.image.url}  width={item.image.width} height={item.image.height} alt={item.title}/>
          </div>
            <div></div>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <div id="fullscreen" className={styles.background}>
        <div className={styles.image}>
          <div 
              className={styles.close}
              onClick={()=>{
                  closeHandler()
              }}
            >
              <div className={styles.circle}></div>
          </div>
          <Swiper 
            navigation={{
              hideOnClick: true,
            }} 
            spaceBetween={10} 
            slidesPerView={1} 
            modules={[Navigation, Lazy, Zoom]} 
            rewind={true}
            initialSlide={imageSelected}
            loopPreventsSlide={true}
            preloadImages={false}
            lazy={true}
            watchSlidesProgress={true}
            edgeSwipeDetection={true}
            edgeSwipeThreshold={10}
            zoom={{
              zoom: true,
              toggle: true
            }}
          >
            {allImages}
          </Swiper>
        </div>
    </div>
  )
}

export default FullScreen