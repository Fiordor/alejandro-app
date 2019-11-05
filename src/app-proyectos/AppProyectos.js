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

    function addProjectv1(fachadas) {
      return (
        //<div className="container">
        <a className="container-a" href="">
          <img src="./aaaa"></img>
          <div className="container-line">
            <div className="container-text">
              {
                /*
                short.map((element, i) =>
                  <div key={'fachada-' + i}>
                    {element}
                  </div>)
                */
                fachadas.short.map((element, i) =>
                  <div key={'fachada-' + i}>
                    <Link to={"/" + element}> {element} </Link>
                    <Route path={"/" + element} component={Obra}></Route>
                  </div>)
              }
            </div>
          </div>
        </a>
        //</div>
      );
    }

    function addProject(fachadas) {
      return (

        <Link
          className="container-a"
          to={{
            pathname: "/" + fachadas.short.map(function(element) { return element; }),
            passObra: fachadas
          }}
        >
          <img src="./aaa"></img>
          <div className="container-line">
            <div className="container-text">
              {
                fachadas.short.map((element, i) =>
                  <div key={'fachada-' + i}>
                    {element}
                  </div>)
              }
            </div>
          </div>
          <Route path={"/" + fachadas.short.map(function(element) { return element; })} component={Obra}></Route>
        </Link>
      );
    }

    function loopIt() {

      const data = require('./proyectos.json');
      const fachadas = data.fachadas;
      console.log(fachadas.length);
      for (var i = 0; i < fachadas.length; i++) { fachadas[i] = addProject(fachadas[i]); }
      return (
        <div className="row-content">
          {fachadas.map(element => <div className="container">{element}</div>)}
        </div>
      );
    }

    return (
      <div className="proyectos" id="proyectos">
        <div className="column-content">
          <Link to="/"> HOME </Link>
          <Link to="/obra"> Obra </Link>
          <Route path="/obra" component={Obra}></Route>
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