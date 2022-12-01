import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/navbar.css'


function NavBar() {
  return (
    <div>
        <nav>
        <div class="dropdown">
                <a class="dropbtn" href='/'>Home</a>
            </div>
            <div class="dropdown">
                <a class="dropbtn" href='/menu'>Menu</a>
            </div>
            <div class="dropdown">
                <a class="dropbtn">Ingridients</a>
                <div class="dropdown_content">
                <a div="nav_link">CeraVe</a>
                <a div="nav_link">Some By mi</a>
                <a div="nav_link">LaRoche -posay</a>
                <a div="nav_link">Cosrx</a>
                <a div="nav_link">Biore</a>
                <a div="nav_link">The Ordinary</a>
                <a div="nav_link">Cetaphil</a>
                <a div="nav_link">Simple</a>
                <a div="nav_link">Paula's Choice</a>
                <a div="nav_link">Good molecules</a>
                <a div="nav_link">Isntree</a>
                </div>
            </div>
            <div class="dropdown">
                <a class="dropbtn" href='/about'>About</a>
              
            </div>
            <div class="dropdown">
                <a class="dropbtn">Deliveries</a>
                <div class="dropdown_content">
                <a div="nav_link">Supplements</a>
                </div>
            </div>
            <div class="dropdown">
                <a class="dropbtn">Chart</a>
            </div>
            <div class="dropdown">
                <a class="dropbtn"href='/form'>Add Meal</a>
            </div>
            <div class="dropdown">
                <a class="dropbtn"href='/contact'>Contact Us</a>
            </div>
        </nav>
    </div>
  )
}
export default NavBar;