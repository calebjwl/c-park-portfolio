import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  constructor() {
    super();
    this.formatTitle = this.formatTitle.bind(this);
  }

  formatTitle(str) {
    str = str.replace('/', '');
    console.log(str);
    return str;
  }

  render() {
    var pageTitle;
    if (this.props.location.pathname !== "/") {
      pageTitle = <h5 className="page-title col mb-0 text-center">{this.formatTitle(this.props.location.pathname)}</h5>

      document.getElementsByClassName("nav-logo")[0].classList.add('text-dark');
      var navLinks = document.getElementsByClassName("nav-link")[0].classList.add('text-dark');
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add('text-dark');
      }
    }
    
    return (
      <header className="nav">
        <div className="nav-content row align-items-center">
          <div className="col">
            <Link to="/" className="nav-logo">
              <h1>Christian Park</h1>
            </Link>
          </div>
          {pageTitle}
          <div className="col">
            <div className="d-flex flex-column text-right">
              <Link to="/portfolio" className="nav-link pt-4">portfolio</Link>
              <Link to="/about" className="nav-link">about</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const RoutedNav = withRouter(Nav);
export default RoutedNav;