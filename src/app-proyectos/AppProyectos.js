import React, { Component } from 'react';
import './AppProyectos.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

class AppBibliografia extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {

    const className = '.proyectos .column-content .row-content .column-content';
    const duration = '1000';
    addAOSAttr(className + ':eq(0)', 'fade-down', duration, '0');

    function addAOSAttr(tag, type, duration, delay) {
      $(tag).attr('data-aos', type);
      $(tag).attr('data-aos-duration', duration);
      $(tag).attr('data-aos-delay', delay);
    }
    
    const data = require('./proyectos.json');
    console.log(data);
  }

  render() {
    AOS.init();

    function addProject(n) {
      return (
        //<div className="container">
          <a className="container-a" href="#">
            <img src="./aaaa"></img>
            <div className="container-line">
              <div className="container-text">{'holas' + n}</div>
            </div>
          </a>
        //</div>
      );
    }

    function loopIt(n) {
      const array = new Array(n);
      for (var i = 0; i < n; i++) { array[i] = addProject(i); }
      return (
        <div className="row-content">
          {array.map(element => <div className="container">{element}</div>)}
        </div>
      );
    }

    return (
      <div className="proyectos" id="proyectos">
        <div className="column-content">

          <div className="row-content">
            <div className="column-content">
              <div className="title">Proyectos</div>
              <div className="line"></div>
            </div>
          </div>

          <div className="row-content">
            <div className="column-content">
              <div className="column-content title-row">
                <div className="title">Fachadas</div>
              </div>
              {loopIt(5)}
              <div className="column-content title-row">
                <div className="title">Cubiertas</div>
              </div>
              {loopIt(5)}              
              {/*
              <div className="row-content">
                <div className="container">
                  <a className="container-a" href="#">
                    <img src="./aaaa"></img>
                    <div className="container-line">
                      <div className="container-text">HOLAS</div>
                    </div>
                  </a>
                </div>
                <div className="container">
                  <a className="container-a" href="#">
                    <img src="./aaaa"></img>
                    <div className="container-line">
                      <div className="container-text">HOLAS</div>
                    </div>
                  </a>
                </div>                
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppBibliografia;