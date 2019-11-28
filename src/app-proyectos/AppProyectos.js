import React, { Component } from 'react';
import './AppProyectos.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

import { Route, Link } from 'react-router-dom';

import Obra from './AppObra';

class AppBibliografia extends Component {

  componentDidMount() {

    const className = '.proyectos .column-content .row-content .column-content';
    const duration = '1000';
    addAOSAttr(className + ':eq(0)', 'fade-down', duration, '0');

    function addAOSAttr(tag, type, duration, delay) {
      $(tag).attr('data-aos', type);
      $(tag).attr('data-aos-duration', duration);
      $(tag).attr('data-aos-delay', delay);
    }
  }

  render() {
    AOS.init();

    const fachadas = require('./proyectos.json').fachadas;
    const cubiertas = require('./proyectos.json').cubiertas;

    function createObraLink(obra) {

      const img = require('./img-obras/' + obra.imagenes[0] + '0' + obra.imagenes[2]);

      return (

        <Link
          className="container-a"
          to={{
            pathname: "/" + obra.short.map(function (element) { return element; }),
            passObra: obra
          }}
        >
          <img src={img}></img>
          <div className="container-line">
            <div className="container-text">
              {obra.short.map((element, i) => <div key={'fachada-' + i}>{element}</div>)}
            </div>
          </div>
        </Link>
      );
    }

    function createObraRoute(data) {
      return (
        <Route path={"/" + data.short.map(function (element) { return element; })} component={Obra}></Route>
      );
    }

    function addObrasRoute(data) {

      var obras = new Array(data.length);
      for (var i = 0; i < obras.length; i++) { obras[i] = createObraRoute(data[i]); }
      return (
        <div className="row-content">
          {obras.map(element => <div className="container-obra">{element}</div>)}
        </div>        
      );
    }

    function addObrasLink(data) {

      var obras = new Array(data.length);
      for (var i = 0; i < obras.length; i++) { obras[i] = createObraLink(data[i]); }
      return (
        <div className="row-content">
          {obras.map(element => <div className="container"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-offset="0">{element}</div>)}
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
              {addObrasLink(fachadas)}
              {addObrasRoute(fachadas)}
              <div className="column-content title-row">
                <div className="title">Cubiertas</div>
              </div>
              {addObrasLink(cubiertas)}
              {addObrasRoute(cubiertas)}
              {/*loopIt(5)*/}
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