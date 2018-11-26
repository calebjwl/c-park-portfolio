import React, { Component } from 'react';
import '../App.css';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app

import images from '../images';
 
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    var self = this;
    var mainSrc = images[photoIndex];
    var nextSrc = images[(photoIndex + 1) % images.length];
    var prevSrc = images[(photoIndex + images.length - 1) % images.length];
    return (
      <div className="below-nav container">
        <div className="grid">
          {images.map(function(name, index) {
            return (
              <div className="grid__item" key={index}>
                <img src={require('../img/' + name)} className="cursor-pointer" alt={name} onClick={() => self.setState({ photoIndex: index, isOpen: true })}></img>
              </div>
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={require('../img/' + mainSrc)}
            nextSrc={require('../img/' + nextSrc)}
            prevSrc={require('../img/' + prevSrc)}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}