import React from 'react'
import Logo from './LogoSmall'

const Footer = () => {
  return (
    <div className="position-absolute top-100 start-0 col-12">
      <footer className="d-flex  position-relative  top-100 mt-n1 col-12  bg-info pt-2">
        <div className="mt-2 ms-3">
        <Logo />
        </div>
          <div className="col-6 col-md">
         
            <ul className="list-unstyled text-small mt-3">
            <li><h5 className="ms-3 ">Todos los derechos reservados 2022</h5></li>
             
            </ul>
          </div>
          <div className="col-6 col-md  ">
            <h5 className="text-end me-5">Contáctenos</h5>
            <ul className="list-unstyled text-small text-end me-3">
            <li><a className="link-secondary" href="/">proyecto2022ing.sistemas@gmail.com
</a></li>
           
            </ul>
          </div>
      </footer>
    </div>
  )
}

export default Footer