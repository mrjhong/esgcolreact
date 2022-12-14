import React, { Component } from 'react'
import "../../assets/css/footer.css"

export class Footer extends Component {
  render() {
    return (
      <div>
      
     
      
      <div className='footer'>
      
        <div class="container__footer">

          <div class="box__footer">
            <div class="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/RPC-JP_Logo.png/600px-RPC-JP_Logo.png" alt="" />
            </div>
            <div class="terms">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam, debitis facilis explicabo voluptatem. A.
            </div>
          </div>

          <div class="box__footer">
            <h2>Soluciones</h2>
            <a href="#">App Desarrollo</a>
            <a href="#">App Marketing</a>
            <a href="#">IOS Desarrollo</a>
            <a href="#">Android Desarrollo</a>
          </div>

          <div class="box__footer">
            <h2>Compañia</h2>
            <a href="#">Acercda de</a>
            <a href="#">Trabajos</a>
            <a href="#">Procesos</a>
            <a href="#">Servicios</a>
          </div>

          <div class="box__footer">
            <h2>Redes Sociales</h2>
            <a href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
            <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
            <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
            <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
          </div>
        </div>

        <div class="box__copyright">
          <hr />
          <p>Todos los derechos reservados © 2021 <b>MagtimusPro</b></p>
        </div>
      </div>
      </div>
    )
  }
}

export default Footer