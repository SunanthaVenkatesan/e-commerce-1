import React from 'react'
import classes from './CategoryItem.module.css'



const CategoryItem = ({item}) => {
  return (
    
    <div>
         <h3 className={classes.h1}>{item.title}</h3>
         <div>
        <img  className={classes.img}src={item.imageUrl} alt=""/>
        
        <div>
       
        <h3>{`Rs.${item.price}`}</h3>
        <button className={classes.button}>ADD TO CART</button>
        </div>

    </div>
    </div>
  )
}

export default CategoryItem