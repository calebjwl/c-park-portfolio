import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="below-nav container">
        <div className="row">
          <div className="col-8">
            Hi there! My name is Christian and I am a portrait, travel, and lifestyle photographer. ​
            <br/>
            I am of South Korean descent, born in Los Angeles, and raised in Nairobi, Kenya. Right now, I'm a student studying Political Science at Vassar College, located right by the Hudson River in Poughkeepsie, New York. 
            <br/>
            Everyone in my family, except for me, has always been invested in photography. For a while, I was oblivious to the fact that photos have such a profound way of communicating with others. I am forever indebted to my family for giving me my first SLR and providing constant guidance. 
            <br/>
            While I may be fairly new to the photography game, I can say that I am in a constant pursuit to capture the beauty that surrounds us everyday. Within that pursuit, photography is the diverse toolbox that allows me to build relationships, create vivid memories, and exercise my own creativity in ways I never could have imagined. 
            <br/>
            If you're interested in my work and want to collaborate on anything, please don't hesitate to reach out! :) 
          </div>
          <div className="col">
            <img src={require("../img/about-portrait-temp.png")} alt="about-portrait"/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
