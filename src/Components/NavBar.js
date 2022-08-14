import React from "react";
import classes from "./NavBar.module.css";
import Icon from "./Icon";

const NavBar = () => {
    const Announcement=()=>{
        return <div className={classes.bgtext}>Super Deal !!! Free shipping on orders above Rs.500.</div>
    }
  return (
    <div className={classes.navbar}>
        <Announcement/>
      <div className={classes.wrapper}>
        <span className={classes.left}>HOME</span>
        <span className={classes.center}>SHOP</span>
        <span className={classes.right}>ABOUT</span>

        <button className={classes.button}>
          <span className={classes.icon}>
            <Icon />
          </span>
          <span>CART</span>
        </button>
      </div>
    </div>
    
    
   
  );
};

export default NavBar;
