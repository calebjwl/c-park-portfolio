import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  constructor() {
    super();
    this.formatTitle = this.formatTitle.bind(this);
    this.renderTextColor = this.renderTextColor.bind(this);
  }

  formatTitle(str) {
    str = str.replace('/', '');
    return str;
  }

  renderTextColor() {
    // if (this.props.location.pathname !== "/") {
    //   document.getElementById("nav__logo").classList.add('text-dark');
    //   var navLinks = document.getElementsByClassName("nav__link");
    //   for (var i = 0; i < navLinks.length; i++) {
    //     navLinks[i].classList.add('text-dark');
    //   }
    // } 
    // else if (this.props.location.pathname === "/") {
    //   console.log(document.getElementById("nav__logo"))
    //   document.getElementById("nav__logo").classList.remove('text-dark');
    //   for (i = 0; i < navLinks.length; i++) {
    //     navLinks[i].classList.remove('text-dark');
    //   }
    // }
  }

  render() {
    var pageTitle;
    if (this.props.location.pathname !== "/") {
      pageTitle = <h5 className="page-title col mb-0 text-center">{this.formatTitle(this.props.location.pathname)}</h5>
    }
    // this.renderTextColor();
    return (
      <header className="nav">
        <div className="nav__content container">
          <div>
            <Link to="/" className="nav__logo text-dark" id="nav__logo">
              <h1>Christian Park</h1>
            </Link>
          </div>
          {pageTitle}
          <div>
            <div className="d-flex flex-column text-right">
              <Link to="/portfolio" className="nav__link text-dark pt-4">portfolio</Link>
              <Link to="/about" className="nav__link text-dark">about</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const RoutedNav = withRouter(Nav);
export default RoutedNav;