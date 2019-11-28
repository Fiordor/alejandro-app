import React, { Component } from 'react';
import './AppContacto.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

class AppContacto extends Component {

  readData = () => {

  }

  componentDidMount() {

    const className = '.contacto .column-content .row-content .column-content';
    const duration = '1000';
    addAOSAttr(className + ':eq(0)', 'fade-down', duration, '0');
    addAOSAttr(className + ':eq(1)', 'zoom-in', duration, '100');
    addAOSAttr(className + ':eq(2)', 'zoom-in', duration, '200');
    addAOSAttr(className + ':eq(3)', 'zoom-in', duration, '300');

    function addAOSAttr(tag, type, duration, delay) {
      $(tag).attr('data-aos', type);
      $(tag).attr('data-aos-duration', duration);
      $(tag).attr('data-aos-delay', delay);
    }
  }

  render() {
    AOS.init();

    const contacto_img = new Array(3);
    contacto_img[0] = require('../img/contacto-ubi.svg');
    contacto_img[1] = require('../img/contacto-email.svg');
    contacto_img[2] = require('../img/contacto-linkedin.svg');

    return (
      <div className="contacto" id="contacto">
        <div className="column-content">

          <div className="row-content">
            <div className="column-content">
              <div className="title">Contacto</div>
              <div className="line"></div>
            </div>
          </div>

          <div className="row-content">

            <div className="column-content">
              <div className="img-content"><img src={contacto_img[0]}></img></div>
              <a href="#">Valencia, España</a>
            </div>
            <div className="divisor-line"></div>
            <div className="column-content">
              <div className="img-content"><img src={contacto_img[1]}></img></div>
              <a href="#">contacto@alejandrofiocca.com</a>
            </div>
            <div className="divisor-line"></div>
            <div className="column-content">
              <div className="img-content"><img src={contacto_img[2]}></img></div>
              <a href="#">Arq. Alejandro Fiocca</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppContacto;
