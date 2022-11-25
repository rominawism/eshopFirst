import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import * as fetchApi from '../../../api/FetchApiAdaptor'
import styles from './searchingText.module.scss'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import Card from '../../../components/Card'
import ClipLoader from "react-spinners/ClipLoader";


const SearchingResult = (props) => {
     return <div className={`${styles.mainContainer}`}>
     {props.product.map(item=>{
        return <Card key={item.id} product = {item} />
     })}
   </div>
}


export async function getServerSideProps(context) {
  const productRequest = await fetchApi.GET(`products/search/${context.params.searchingText}`);
  const product = await productRequest.json();
  return {
    props: { product }
  }
}

export default SearchingResult