import React, {useState, useEffect} from 'react'
import logo from "../../assets/logo.png"


const Header = () => {
    return (
        <header className="center">
           <img src={logo} alt="logo" /> 
        </header>
    )
}

export default Header