import React, { Component } from 'react'
import "../../assets/css/navbar.css"

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Offcanvas dark navbar</a>
            <div className="d-flex">
            <div className="items">
            <a className="navbar-brand" href="#">Inicio</a>
            <a className="navbar-brand" href="#">Acerca de nosotros</a>
            <a className="navbar-brand" href="#">Servicios</a>
            <a className="navbar-brand" href="#">Productos</a>
            </div>  
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
         </div>

            

            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">ESGCOL</h5>

                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                 

                  <li className="nav-item">
                    <a className="nav-link" href="#">Acerca de nosotros</a>
                  </li>

                  <li className="nav-item">
                  <a className="nav-link" href="#">Servicios</a>

                  </li>

                  <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>

                  </li>

                  
               
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar