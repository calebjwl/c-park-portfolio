import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <div class="nav-content">
          <Link to="/" class="nav-logo">
            <h1>Christian Park</h1>
          </Link>
          <div className="d-flex flex-column text-right">
            <Link to="/portfolio" class="nav-link">portfolio</Link>
            <Link to="/about" class="nav-link">about</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
