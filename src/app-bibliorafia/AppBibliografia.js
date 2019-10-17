import React, { Component } from 'react';
import './AppBibliografia.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';
import firebaseAcces from '../firebaseAcces';

class AppBibliografia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uniP0_0: 'Universidad de Buenos Aires',
      uniP0_1: 'Facultad de Arquitectura, Diseño y Urbanismo',
      uniP1: 'Arquitecto Superior, Arquitectura',
      uniP2: '1997 - 2002',
      textoP0_0: 'Alejandro Fiocca, nacido en Buenos Aires (Argentina). Obtuvo su Licenciatura de Arquitecto en la Universidad de Buenos Aires (UBA), Facultad de Arquitectura, Diseño y Urbanismo.',
      textoP0_1: 'Comenzó su trayectoria como Asistente de Project Management desarrollando proyectos e implementación de Centros Logísticos, y tras su traslado en el 2002 a España reinicio sus actividades como Arquitecto y Proyect Management en envolventes de proyectos singulares.',
      textoP0_2: 'Más de 15 años desarrollando y ejecutando proyectos de cerramientos para Aeropuertos, Estaciones del Ave, Centros Comerciales, Centros Logísticos y Acelerador de Partículas entre otros, en España, Brasil y Argentina, como así también, innumerables estudios de proyectos internacionales y en colaboración con estudios de Arquitectura de alto reconocimiento.'
    };
  }

  readData = () => {

    const db = firebaseAcces.firestore();

    db.collection("bibliografia").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(doc.data());
      });
    });
  }

  printSomeThing = () => {  }


  componentDidMount() {

    const className = '.bibliografia .column-content .row-content .column-content';

    addAOSAttr(className + ':eq(0)', 'fade-down', '1000', '0');
    addAOSAttr(className + ':eq(1)', 'zoom-in', '1000', '500');
    addAOSAttr(className + ':eq(2) .p0', 'fade-left', '1000', '500');
    addAOSAttr(className + ':eq(2) .p1', 'fade-left', '1000', '800');
    addAOSAttr(className + ':eq(2) .p2', 'fade-left', '1000', '1100');

    addAOSAttr(className + ':eq(3) .p0 p:eq(0)', 'fade-up', '1000', '500');
    addAOSAttr(className + ':eq(3) .p0 p:eq(1)', 'fade-up', '1000', '800');
    addAOSAttr(className + ':eq(3) .p0 p:eq(2)', 'fade-up', '1000', '1100');    

    function addAOSAttr(tag, type, duration, delay) {
      $(tag).attr('data-aos', type);
      $(tag).attr('data-aos-duration', duration);
      $(tag).attr('data-aos-delay', delay);
    }
  }

  render() {
    AOS.init();
    return (
      <div className="bibliografia" id="bibliografia">
        <div className="column-content">

          <div className="row-content">
            <div className="column-content">
              <div className="title">Bibliografía</div>
              <div className="line"></div>
            </div>
          </div>
          {this.readData()}
          <div className="row-content">
            <div className="column-content">
              <div className="img">
                <img src="./img/universidad.png"></img>
              </div>
            </div>
            <div className="column-content universidad">
              <div className="p0">{this.state.uniP0_0}<br></br>{this.state.uniP0_1}</div>
              <div className="p1">{this.state.uniP1}</div>
              <div className="p2">{this.state.uniP2}</div>
            </div>
          </div>

          <div className="row-content">
            <div className="column-content texto">
              <div className="p0">
                <p>{this.state.textoP0_0}</p>
                <p>{this.state.textoP0_1}</p>
                <p>{this.state.textoP0_2}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppBibliografia;
