import React, { Component } from 'react';
import './AppObra.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

import { Link } from 'react-router-dom';

class AppObra extends Component {

  componentDidMount() {

    const obras = this.props.location.passObra;
    const classFirstImg = '.obra .container .container-first-img div img';
    const classSecondImg = '.obra .container .container-second-img div img';
    var lastImgNum = 0;
    var lastImgClass = classFirstImg + ':eq(0)';

    for (let i = 1; i < obras.imagenes[1]; i++)
      { $(classFirstImg + ':eq(' + i + ')').hide(); }

    var listFirstImg = new Array(obras.imagenes[1]);
    var listSecondImg = new Array(obras.imagenes[1]);
    for (let i = 0; i < obras.imagenes[1]; i++) {
      listFirstImg[i] = classFirstImg + ':eq(' + i + ')';
      listSecondImg[i] = classSecondImg + ':eq(' + i + ')';
    }

    for (let i = 0; i < obras.imagenes[1]; i++) {
      $(listSecondImg[i]).click(function () {
        $(lastImgClass).hide();
        lastImgNum = i;
        lastImgClass = listFirstImg[i];
        $(lastImgClass).show();
      });
    }

    $('.obra .container .button-slider .right').click(function () {
      $(lastImgClass).hide();
      lastImgNum++;
      if (lastImgNum >= obras.imagenes[1]) lastImgNum = 0;
      lastImgClass = listFirstImg[lastImgNum];
      $(lastImgClass).show();
    });

    $('.obra .container .button-slider .left').click(function () {
      $(lastImgClass).hide();
      lastImgNum--;
      if (lastImgNum < 0) lastImgNum = obras.imagenes[1] - 1;
      lastImgClass = listFirstImg[lastImgNum];
      $(lastImgClass).show();
    });
  }

  getTitleObra = () => {
    const obras = this.props.location.passObra;
    return ( obras.titulo );
  }

  getFirstImg = () => {

    const obras = this.props.location.passObra;
    var imgPath = new Array(obras.imagenes[1]);
    for (var i = 0; i < obras.imagenes[1]; i++) {
      imgPath[i] = require('./img-obras/' + obras.imagenes[0] + '' + i + '' + obras.imagenes[2]);
    }

    return (
      <div>{imgPath.map(element => <img src={element}></img>)}</div>
    );
  }

  createImgSlider = () => {

    const obras = this.props.location.passObra;
    var imgPath = new Array(obras.imagenes[1]);
    for (var i = 0; i < obras.imagenes[1]; i++) {
      imgPath[i] = require('./img-obras/' + obras.imagenes[0] + '' + i + '' + obras.imagenes[2]);
    }

    return (
      <div>{imgPath.map(element => <img src={element}></img>)}</div>
    );

  }

  render() {
    AOS.init();

    const obra_close = require('../img/app-close.svg');
    const obra_arrow = require('../img/obra-arrow.svg');

    return (
      <div className="obra">
        <div className="container">

          <div className="button-close">
            <Link to="/" className="button-close-a">
              <img src={obra_close}></img>
            </Link>
          </div>

          <div className="container-column-margin">
            <div className="button-slider">
              <img className="left" src={obra_arrow}></img>
            </div>
          </div>
          <div className="container-column">

            <div className="container-text">
              <div className="text">{this.getTitleObra()}</div>
            </div>

            <div className="container-first-img">
              {this.getFirstImg()}
            </div>
            <div className="container-second-img">
              {this.createImgSlider()}
            </div>
          </div>
          <div className="container-column-margin">
            <div className="button-slider">
              <img className="right" src={obra_arrow}></img>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AppObra;