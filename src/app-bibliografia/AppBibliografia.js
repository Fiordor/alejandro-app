import React, { Component } from 'react';
import './AppBibliografia.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

class AppBibliografia extends Component {


  dataUniversidad = "";
  dataFacultad = "";
  dataTitulo = "";
  dataFecha = "";
  dataTexto = [];

  readData = () => {
    
    const data = require('./bibliografia.json');

    this.dataUniversidad = data.universidad;
    this.dataFacultad = data.facultad;
    this.dataTitulo = data.titulo;
    this.dataFecha = data.fecha;
    data.texto.forEach(element => { this.dataTexto.push(element); });

  }

  componentDidMount() {

    const className = '.bibliografia .column-content .row-content .column-content';
    const duration = '1000';
    addAOSAttr(className + ':eq(0)', 'fade-down', duration, '0');
    addAOSAttr(className + ':eq(1)', 'zoom-in', duration, '500');
    addAOSAttr(className + ':eq(2) .p0', 'fade-right', duration, '500');
    addAOSAttr(className + ':eq(2) .p1', 'fade-right', duration, '600');
    addAOSAttr(className + ':eq(2) .p2', 'fade-right', duration, '700');

    addAOSAttr(className + ':eq(3) .p0 p:eq(0)', 'fade-up', duration, '500');
    addAOSAttr(className + ':eq(3) .p0 p:eq(1)', 'fade-up', duration, '800');
    addAOSAttr(className + ':eq(3) .p0 p:eq(2)', 'fade-up', duration, '1100');

    $(className + ':eq(2) .p0').html(this.dataUniversidad + '<br>' + this.dataFacultad);
    $(className + ':eq(2) .p1').text(this.dataTitulo);
    $(className + ':eq(2) .p2').text(this.dataFecha);

    for (let i = 0; i < this.dataTexto.length; i++) {
      $(className + ':eq(3) .p0 p:eq(' + i + ')').text(this.dataTexto[i]);
    }

    function addAOSAttr(tag, type, duration, delay) {
      $(tag).attr('data-aos', type);
      $(tag).attr('data-aos-duration', duration);
      $(tag).attr('data-aos-delay', delay);
    }
  }

  render() {
    AOS.init();

    const bibliografia_universidad = require('../img/bibliografia-universidad.png');

    return (
      <div className="bibliografia" id="bibliografia">
        <div className="column-content">

          <div className="row-content">
            <div className="column-content">
              <div className="title">Bibliografía</div>
              <div className="line"></div>
            </div>
          </div>
          
          <div className="row-content">
            <div className="column-content">
              <div className="img">
                <img src={bibliografia_universidad}></img>
              </div>
            </div>
            <div className="column-content universidad">
              <div className="p0"><br></br></div>
              <div className="p1"></div>
              <div className="p2"></div>
            </div>
          </div>

          <div className="row-content">
            <div className="column-content texto">
              <div className="p0">
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>

        </div>
        {this.readData()}
      </div>
    );
  }
}

export default AppBibliografia;
