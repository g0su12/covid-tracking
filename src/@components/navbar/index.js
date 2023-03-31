import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
    const toggle = () => {
        var x = document.getElementById("topNav");
        if (x.className === "navbar__menu"){
            x.className += " responsive";
        } else{
            x.className = "navbar__menu";
        }
    }
    return (
        <div className="navbar">
            <div className="navbar__title">
                <img  className="image" alt="" width={70} src="https://i.imgur.com/fa4N2Ky.png"/>
                <h2 className="title">COVID TRACKING</h2>
            </div>  
            <div className="navbar__menu" id="topNav">
                <ul className="list" id="active">
                    <li><Link className="link" to={"/"}>Home</Link></li>
                    <li><Link className="link" to={"/information"}>What is COVID-19</Link></li>
                    <li><Link className="link" to={"/prevention"}>Prevention</Link></li>
                    <li><Link className="link" to={"/about"}>About</Link></li>
                </ul>
                <i className="icon fa fa-bars" onClick={toggle}></i>
            </div>
        </div>
    );
}
