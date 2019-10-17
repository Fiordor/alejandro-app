import React, { Component } from 'react';
import './AppInicio.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

class AppInicio extends Component {

  componentDidMount() {

    const className = '.inicio .row-content .column-content ';

    var stringOut = 'Alejandro·Fiocca';
    $(className + '.p0').html(animationLetra(stringOut, 'fade-up', '500', 1000));

    stringOut = 'Arquitecto';
    $(className + '.p1').html(animationLetra(stringOut, 'fade-up', '500', 1500));

    $(className + '.p2').html(animationBloque('', 'fade-up', '500', '2000'));

    stringOut = 'Coordinador de proyectos e implementación';
    $(className + '.p3').html(animationBloque(stringOut, 'fade-up', '500', '2500'));

    stringOut = 'Especializado en cubiertas y fachadas';
    $(className + '.p4').html(animationBloque(stringOut, 'fade-up', '500', '3000'));

    function animationLetra(stringOut, fadeType, fadeDuration, fadeDelay) {
      var auxStringOut = '';
      for (var i = 0; i < stringOut.length; i++) {
        auxStringOut += '<div data-aos="' + fadeType
          + '" data-aos-duration="' + fadeDuration
          + '" data-aos-delay="' + (fadeDelay + ((stringOut.length - 1 - i) * 50)).toString()
          + '" data-aos-offset="0" >' + stringOut.charAt(i) + '</div>';
      }
      return auxStringOut;
    }

    function animationBloque(stringOut, fadeType, fadeDuration, fadeDelay) {
      var auxStringOut = '';
      auxStringOut += '<div data-aos="' + fadeType
        + '" data-aos-duration="' + fadeDuration
        + '" data-aos-delay="' + fadeDelay
        + '" data-aos-offset="0" >' + stringOut + '</div>';

      return auxStringOut;
    }

    var inicio = document.getElementsByClassName("inicio")[0];

    if (window.innerHeight < 600) inicio.style.height = 600 + "px";
    else inicio.style.height = window.innerHeight + "px";

    window.addEventListener("resize", function () {

      if (window.innerHeight < 600) inicio.style.height = 600 + "px";
      else inicio.style.height = window.innerHeight + "px";
    });

  }

  render() {
    AOS.init();
    return (
      <div className="inicio" id="inicio">
        <div className="row-content">
          <div className="column-content">
            <div className="line p0"></div>
            <div className="line p1"></div>
            <div className="line p2"></div>
            <div className="line p3"></div>
            <div className="line p4"></div>
          </div>
          <div className="column-content">
            <div className="content-img">
              <div className="img">
                <img src="./img/ale.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppInicio;
