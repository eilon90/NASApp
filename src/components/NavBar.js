import React, {Component} from 'react';
import NavBarLinks from './NavBarLinks';

export default function NavBar() {

    return (
        <div id = "nav-bar">
                <img id = "logo" src = 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'/>
                <h2 id = "logo-title">NASApp</h2>
                <NavBarLinks link = "Home"/>
                <NavBarLinks link = "Search"/>
                <NavBarLinks link = "Favorites"/>
        </div>
    )
}