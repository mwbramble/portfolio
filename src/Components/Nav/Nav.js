import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './nav.css';

const bgActive = '#312F68';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="nav">
        <Link to="/" className="navLink">home</Link>
        <NavLink to="/projects" className="navLink" activeStyle={{backgroundColor: {bgActive}}}>projects</NavLink>
        <NavLink to="/contact" className="navLink" activeStyle={{backgroundColor: {bgActive}}}>contact</NavLink>
        <p>&copy; Michael Bramble 2020</p>
      </nav>
    )
  }
}