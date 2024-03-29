import React, { Component } from 'react';
import './AppAptitudes.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

class AppAptitudes extends Component {

  arrayCursos = [];
  arrayDestacados = [];
  arrayIdiomas = [];
  arrayConocimientos = [];
  arrayHerramientas = [];
  arrayInterpersonales = [];

  //constructor(props) { super(props); }

  readData = () => {

    const data = require('./aptitudes.json');

    data.especialidades.forEach(element => { this.arrayDestacados.push(element); });
    data.idiomas.forEach(element => { this.arrayIdiomas.push(element); });
    data.conocimientos.forEach(element => { this.arrayConocimientos.push(element); });
    data.herramientas.forEach(element => { this.arrayHerramientas.push(element); });
    data.interpersonal.forEach(element => { this.arrayInterpersonales.push(element); });

  }

  componentDidMount() {

    const duration = '1000';

    addAOSAttr('.aptitudes .column-content .row-content .column-content:eq(0)', 'fade-down', duration, '0');

    const className = '.aptitudes .skill .column-content';
    
    addAOSAttr(className + ':eq(0)', 'fade-down', duration, '0');
    addAOSAttr(className + ':eq(1)', 'fade-down', duration, '100');
    addAOSAttr(className + ':eq(2)', 'fade-down', duration, '200');
    addAOSAttr(className + ':eq(3)', 'fade-down', duration, '300');
    addAOSAttr(className + ':eq(4)', 'fade-down', duration, '400');

    function addAOSAttr(tag, type, duration, delay) {
      $(tag).attr('data-aos', type);
      $(tag).attr('data-aos-duration', duration);
      $(tag).attr('data-aos-delay', delay);
    }

    const aDestacadosJs = this.arrayDestacados;
    const clock = setInterval(function () {

      if (aDestacadosJs.length !== 0) {
        let list = toList(aDestacadosJs);
        $('.aptitudes .list ul').html(list);
        clearInterval(clock);
      }

    }, 5000);


    const classSkill = '.aptitudes .skill .column-content';


    const aEspecialidadesJs = this.arrayDestacados;
    $('.aptitudes .skill .especialidades').click(function () {
      let list = toList(aEspecialidadesJs);
      $('.aptitudes .list ul').html(list);
      pressedButton(this);
    });

    const aIdiomasJs = this.arrayIdiomas;
    $('.aptitudes .skill .idiomas').click(function () {
      let list = toList(aIdiomasJs);
      $('.aptitudes .list ul').html(list);
      pressedButton(this);
    });

    const aConocimientosJs = this.arrayConocimientos;
    $('.aptitudes .skill .conocimientos').click(function () {
      let list = toList(aConocimientosJs);
      $('.aptitudes .list ul').html(list);
      pressedButton(this);
    });

    const aHerramientasJs = this.arrayHerramientas;
    $('.aptitudes .skill .herramientas').click(function () {
      let list = toList(aHerramientasJs);
      $('.aptitudes .list ul').html(list);
      pressedButton(this);
    });

    const aInterpersonalesJs = this.arrayInterpersonales;
    $('.aptitudes .skill .interpersonal').click(function () {
      let list = toList(aInterpersonalesJs);
      $('.aptitudes .list ul').html(list);
      pressedButton(this);
    });

    if ($(window).width() <= 800) {
      $('.aptitudes .skill .column-content').click(function () {
        $('.aptitudes .skill').css({top: '-100%'});
      });
      $('.aptitudes .responsive-skill .select-button').click(function () {
        $('.aptitudes .skill').css({top: '0'});
      });
    }


    var lastButtonOn = '';
    function pressedButton(e) {

      if (lastButtonOn === '') {
        $(classSkill).removeClass('skill-on');
        $(classSkill).addClass('skill-off');

        lastButtonOn = e;
      } else {
        $(lastButtonOn).removeClass('skill-on');
        $(lastButtonOn).addClass('skill-off');

        lastButtonOn = e;
      }

      $(e).removeClass('skill-off');
      $(e).addClass('skill-on');
    }

    function toList(list) {

      let out = '';
      for (var i = 0; i < list.length; i++) {
        out += '<li>' + list[i] + '</li>';
      };
      return out
    }
  }

  render() {
    AOS.init();

    const img = require('../img/obra-arrow-white.svg');

    return (
      <div className="aptitudes" id="aptitudes">
        <div className="column-content">

          <div className="row-content">
            <div className="column-content">
              <div className="title">aptitudes</div>
              <div className="line"></div>
            </div>
          </div>

          <div className="row-content">
            <div className="column-content">
              <div className="row-content responsive-skill">
                <div className="select-button">
                  <div className="text">Aptitud</div>
                  <div className="img"><img src={img}></img></div>
                </div>
              </div>
              <div className="row-content skill">
                <div className="column-content especialidades skill-off">
                  <div className="text-content">Especialidades</div>
                </div>
                <div className="column-content idiomas skill-off">
                  <div className="text-content">Idiomas</div>
                </div>
                <div className="column-content conocimientos skill-off">
                  <div className="text-content">?</div>
                </div>
                <div className="column-content herramientas skill-off">
                  <div className="text-content">Software</div>
                </div>
                <div className="column-content interpersonal skill-off">
                  <div className="text-content">Aptitudes</div>
                </div>
              </div>
              <div className="row-content">
                <div className="column-content list">
                  <ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.readData()}
      </div>
    );
  }
}

export default AppAptitudes;
