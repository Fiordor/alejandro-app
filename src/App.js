import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import AppInicio from './app-inicio/AppInicio'
import AppBibliografia from './app-bibliorafia/AppBibliografia';
import AppProyectos from './app-proyectos/AppProyectos';

class App extends Component {

  componentDidMount() {

    $('.navbar-resposive').click(showNavbar);

    $('.navbar-formacion').click(hideNavbar);
    $('.navbar-especializacion').click(hideNavbar);
    $('.navbar-proyectos').click(hideNavbar);
    $('.navbar-aptitudes').click(hideNavbar);
    $('.navbar-contacto').click(hideNavbar);

    function showNavbar() {
      $('.navbar').css({ top: '0%', left: '0%', width: '100%', height: '100%', borderRadius: '0%' });

      $('.navbar-li').css({ opacity: '1', transition: '2s' });

      $('.lSAction a').hide('fast');

      $('.navbar-resposive img').attr('src', './img/close.svg');
      $('.navbar-resposive').off();
      $('.navbar-resposive').click(hideNavbar);
    }

    function hideNavbar() {
      if (window.innerWidth < 800) {
        $('.navbar').css({ top: '-100%', left: '50%', width: '0%', height: '0%', borderRadius: '100%' });

        $('.navbar-li').css({ opacity: '0', transition: '0.2s' });

        $('.lSAction a').show('fast');

        $('.navbar-resposive img').attr('src', './img/menu.svg');
        $('.navbar-resposive').off();
        $('.navbar-resposive').click(showNavbar);
      }
    }
  }

  render() {
    return (

      <div className="app-navbar">
        <div class="up"><a href="#inicio"><img src="./img/up.svg" alt=""></img></a></div>
        <div class="navbar-resposive"><img src="./img/menu.svg" alt=""></img></div>
        <div class="navbar">
          <div class="navbar-ul">
            <div class="navbar-li navbar-formacion hvr-bounce-to-bottom"><a href="#inicio">Inicio</a></div>
            <div class="navbar-li navbar-formacion hvr-bounce-to-bottom"><a href="#bibliografia">Bibliografía</a></div>
            <div class="navbar-li navbar-proyectos hvr-bounce-to-bottom"><a href="#proyectos">proyectos</a></div>
            <div class="navbar-li navbar-aptitudes hvr-bounce-to-bottom"><a href="#aptitudes">aptitudes</a></div>
            <div class="navbar-li navbar-contacto hvr-bounce-to-bottom"><a href="#contacto">contacto</a></div>
          </div>
        </div>
        <AppInicio />
        <AppBibliografia />
        <AppProyectos />
      </div>
    );
  }
}

export default App;
