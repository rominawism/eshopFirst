import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from "./SearchBox.module.scss"
const SearchBox = () => {
  const [text, setText] = useState('')
  const textChangeHandler = (e) => {
    setText(e.target.value)
  }
const router = useRouter();

  const clickHandler =()=>{
      router.push(`/products/search/${text}`)
  }
  return (
    <div>

      <input className={`${styles.searchBoxInput}`} type="text" value={text} onChange={textChangeHandler} placeholder="نام کالا" />
      <button className={`${styles.searchButton}`} onClick={clickHandler}> جستجو </button>

    </div>
  )
}

export default SearchBox