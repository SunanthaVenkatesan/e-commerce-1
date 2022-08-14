import React from 'react'
import {productsArr} from '../data'
import CategoryItem from './CategoryItem'
import classes from './Categories.module.css'

const Categories = () => {
  return (
    <div className={classes.container}>
        {productsArr.map(item=>(
            <CategoryItem item={item}/>
        ))}
    </div>
  )
}

export default Categories