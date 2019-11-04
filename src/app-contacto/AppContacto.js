import React, { Component } from 'react';
import './AppContacto.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';
import firebaseAcces from '../firebaseAcces';

class AppContacto extends Component {

  readData = () => {

  }

  componentDidMount() {

    const className = '.bibliografia .column-content .row-content .column-content';
    const duration = '1000';
    addAOSAttr(className + ':eq(0)', 'fade-down', duration, '0');
    addAOSAttr(className + ':eq(1)', 'zoom-in', duration, '500');
    addAOSAttr(className + ':eq(2) .p0', 'fade-left', duration, '500');
    addAOSAttr(className + ':eq(2) .p1', 'fade-left', duration, '600');
    addAOSAttr(className + ':eq(2) .p2', 'fade-left', duration, '700');

    addAOSAttr(className + ':eq(3) .p0 p:eq(0)', 'fade-up', duration, '500');
    addAOSAttr(className + ':eq(3) .p0 p:eq(1)', 'fade-up', duration, '800');
    addAOSAttr(className + ':eq(3) .p0 p:eq(2)', 'fade-up', duration, '1100');

    function addAOSAttr(tag, type, duration, delay) {
      $(tag).attr('data-aos', type);
      $(tag).attr('data-aos-duration', duration);
      $(tag).attr('data-aos-delay', delay);
    }
  }

  render() {
    AOS.init();
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
              <div className="img-content"><img src="./aaa"></img></div>
              <a href="#">Valencia, España</a>
            </div>
            <div className="divisor-line"></div>
            <div className="column-content">
              <div className="img-content"><img src="./aaa"></img></div>
              <a href="#">contacto@alejandrofiocca.com</a>
            </div>
            <div className="divisor-line"></div>
            <div className="column-content">
              <div className="img-content"><img src="./aaa"></img></div>
              <a href="#">Arq. Alejandro Fiocca</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppContacto;
