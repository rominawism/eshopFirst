import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import * as fetchApi from '../../../api/FetchApiAdaptor'
import styles from './category.module.scss'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import Card from '../../../components/Card'


const SearchingResult = (props) => {

  try{
    props.category.name;
    return <div className={`${styles.mainContainer}`}>
    {props.category.products.map(item => {
      return <Card key={item.id} product={item} />
    })}
  </div>
  }
  catch{
    return<div>
      <h1>loading...</h1>
    </div>
  }



}


export async function getServerSideProps(context) {


  try {

  const categoryRequest = await fetchApi.GET(`products/category/${context.params.category}`);
  const category = await categoryRequest.json();
    console.log("********")
   console.log(category)
    return {
      props: { category }
    }
  }
  catch(error)
  {
    console.log("%%%%%%%%%")
    return {
      notFound: true
    }
  }

}


export default SearchingResult