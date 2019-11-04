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
      uniP0_0: '', uniP0_1: '',
      uniP1: '',
      uniP2: '',
      textoP0_0: '', textoP0_1: '', textoP0_2: ''
    };
  }

  readData = () => {

    const db = firebaseAcces.firestore();

    let biblioRef = db.collection('bibliografia').doc('bibliografia-db');
    let getDoc = biblioRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          //console.log('Document data:', doc.data().texto);
          this.setState({
            uniP0_0: doc.data().universidad,
            uniP0_1: doc.data().facultad,
            uniP1: doc.data().titulo,
            uniP2: doc.data().fecha,
            textoP0_0: doc.data().texto[0],
            textoP0_1: doc.data().texto[1],
            textoP0_2: doc.data().texto[2]
          });
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
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
        {this.readData()}
      </div>
    );
  }
}

export default AppBibliografia;
