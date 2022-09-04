import React, { Component } from 'react'
import presentationVideo from '../assets/media/corregido.mp4';

import '../assets/css/Presentacion.css';
import "../assets/css/normalize.css"
export class Presentation extends Component {
  render() {
    return (
      <div >
  <div class="row">


    <div class="col col-6">
      <div className='borde'>
      <video autoplay="true"  className='video' src={presentationVideo} type="video/mp4"/>
    </div>
    </div>
    
    <div class="col col-6">
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