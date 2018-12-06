import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  constructor() {
    super();
    this.formatTitle = this.formatTitle.bind(this);
    this.renderTextColor = this.renderTextColor.bind(this);
  }

  componentDidMount() {
    this.renderTextColor();
  }

  componentDidUpdate() {
    this.renderTextColor();
  }

  formatTitle(str) {
    str = str.replace('/', '');
    return str;
  }

  renderTextColor() {
    var navLinks = document.getElementsByClassName("nav__link");
    if (this.props.location.pathname !== "/") {
      document.getElementById("nav__logo").classList.add('text-dark');
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add('text-dark');
      }
    } 
    else if (this.props.location.pathname === "/") {
      console.log(document.getElementById("nav__logo"))
      document.getElementById("nav__logo").classList.remove('text-dark');
      document.getElementById("nav__logo").classList.add('text-light');
      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('text-dark');
        navLinks[i].classList.add('text-light');
      }
    }
  }

  render() {
    var pageTitle;
    if (this.props.location.pathname !== "/") {
      pageTitle = <div className="col"><h5 className="page-title col mb-0 text-center">{this.formatTitle(this.props.location.pathname)}</h5></div>
    }
    return (
      <header className="nav">
        <div className="nav__content container">
          <div className="col">
            <Link to="/" className="nav__logo" id="nav__logo">
              <h1>Christian Park</h1>
            </Link>
          </div>
          {pageTitle}
          <div className="col">
            <div className="d-flex flex-column align-items-end pt-4">
              <Link to="/portfolio" className="nav__link">portfolio</Link>
              <Link to="/about" className="nav__link">about</Link>
            </div>  
          </div>      
        </div>
      </header>
    );
  }
}

const RoutedNav = withRouter(Nav);
export default RoutedNav;