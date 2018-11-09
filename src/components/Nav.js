import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     path: window.location.pathname
  //   }
  // }

  render() {
    if (this.props.location.pathname === "/") {
      return (
        <header className="nav">
          <div className="nav-content">
            <Link to="/" className="nav-logo">
              <h1>Christian Park</h1>
            </Link>
            <div className="d-flex flex-column text-right">
              <Link to="/portfolio" className="nav-link">portfolio</Link>
              <Link to="/about" className="nav-link">about</Link>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header className="nav">
          <div className="nav-content">
            <Link to="/" className="nav-logo text-dark">
              <h1>Christian Park</h1>
            </Link>
            <h1>Page Title</h1>
            <div className = "d-flex flex-column text-dark text-right" >
              <Link to="/portfolio" className="nav-link">portfolio</Link>
              <Link to="/about" className="nav-link">about</Link>
            </div>
          </div>
        </header>
      );
    }
  }
}

const RoutedNav = withRouter(Nav);
export default RoutedNav;
