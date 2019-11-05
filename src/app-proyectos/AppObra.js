import React, { Component } from 'react';
import './AppProyectos.css';
import $ from 'jquery';
import '../../node_modules/aos/dist/aos.css'
import AOS from 'aos';

import { Link } from 'react-router-dom';

class AppObra extends Component {

  componentDidMount() {
    console.log(this.props.location.passObra);
  }

  render() {
    AOS.init();

    return (
      <div>
        <h1>FUNICONA</h1>
      </div>
    );
  }
}

export default AppObra;