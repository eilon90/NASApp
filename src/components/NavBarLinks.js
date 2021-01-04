import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default function NavBarLinks({link}) {

    return (
        <div className  = "nav-div">
            <Link to = {link === 'Home' ? '/' : `/${link.toLowerCase()}`} className = "nav-link">{link}</Link>
        </div>
    )
}