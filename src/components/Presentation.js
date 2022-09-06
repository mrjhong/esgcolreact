import React, { Component } from 'react'
import presentationVideo from '../assets/media/corregido.mp4';

import '../assets/css/Presentacion.css';
import "../assets/css/normalize.css"
export class Presentation extends Component {
  render() {
    return (
      <div >
  <div className='row'>


    <div class="col  col-xxl-7 col-xl-7 col-lg-5 col-md-7 col-sm-12">

      <div className='borde'>
      <video autoplay="true"  className='video' src={presentationVideo} type="video/mp4"/>
    </div>

    </div>
    
    <div class="col col-xxl-5 col-xl-5 col-lg-7 col-md-5 col-sm-12">
      <h3>Officia non non mollit Lorem voluptate amet aliqua aute ut amet aliqua adipisicing dolor.</h3>
      <p>Pariatur velit nisi dolore aute dolore officia Lorem.</p>
      <p>Est aliquip est consectetur aliqua duis dolore esse in.</p>
      <p>Reprehenderit qui esse dolor ex nisi et do anim dolor sint anim commodo in.</p>
      <div>
      <button type="button" class="btn btn-outline-dark">Dark</button>   
      </div>
     </div>
  </div>

       
        
      </div>
    )
  }
}

export default Presentation