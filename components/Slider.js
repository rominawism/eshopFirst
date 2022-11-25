import React, { useContext } from 'react'
import ReactImageGallery from "react-image-gallery";
import Context from '../context/Context';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import styles from './Slider.module.scss'

const Slider = () => {

  let { sliderImages } = useContext(Context);
  return (

    <div className={`${styles.mainContainer}`}> 
        <ReactImageGallery
          key={sliderImages.id}
          id={sliderImages.id}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
          items={sliderImages}
          isRTL={true}
          lazyLoad={true}
          slideInterval={3000}
          onClick={(e) => {
            alert(e.target);
          }}
        /> 
  
    </div>
  )
}

export default Slider