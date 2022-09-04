import React, { Component } from 'react'
import "../assets/css/productos.css"
import img1 from "../assets/img/p1.webp"
import img2 from "../assets/img/p2.jpg"
import img3 from "../assets/img/p3.webp"
import $ from 'jquery';
import Card from './statics/Card'

export class Productos extends Component {

  render() {
    return (
      <div>  
        <div id="service" class="service">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <div class="titlepage">
                  <h4><a>Nuestros Productos </a></h4>
                  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <br/>using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
               </div>
            </div>
         </div>
      </div>
      <div class="container margin-r-l">
         <div class="row">
            
            
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <Card/>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <Card/>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <Card/>
            </div>
            
      
        
           
         </div>
      </div>
   </div></div>
    )
  }
}

export default Productos