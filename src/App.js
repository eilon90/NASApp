import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <div id = "main-container">
      <Router>
        <NavBar/>
        <Container/>
      </Router>
    </div>
  )
}