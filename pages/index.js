import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Carusel from '../components/Carusel'
import Header from '../components/Header'
import TopBanner from '../components/TopBanner'
import AllCategories from '../components/AllCategories'
import IncredibleOffers from '../components/IncredibleOffers'
import Footer from '../components/Footer/Footer'
import DailySuggests from '../components/DailySuggests/DailySuggests'
import Slider from '../components/Slider'
import * as fetchApi from '../api/FetchApiAdaptor'
import Context from '../context/Context'
import FiveIcons from '../components/Footer/FiveIcons'
import SevenIcons from '../components/SevenIcons'

function Home(props) {
  return (
    <Context.Provider value={{ sliderImages: props.sliderImages }}>

      <div className={styles.container}>
       
        <Slider />
        <SevenIcons/>
        <IncredibleOffers />
        <AllCategories />
        <DailySuggests />
      </div>
    </Context.Provider>
  )
}

export async function getStaticProps(context) {


  const sliderImagesRequest = await fetchApi.GET(`public/mainSlider`);
  const sliderImages = await sliderImagesRequest.json();
  return {
    props: { sliderImages },
    revalidate:15 
  }
}
export default Home