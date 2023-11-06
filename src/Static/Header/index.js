import React from "react";
import './style.css';

import {Link} from 'react-router-dom';

function Header(){
    return(

        <div className="headerContainer">
            <Link className="home" to="/home"> <h3 style={{color:"#FFF", marginLeft:10}}>Home</h3> </Link> 
            <Link className="about" to="/about"> <h3 style={{color:"#FFF", marginLeft:10}}>About us</h3> </Link>
        </div>
    );
}

export default Header;