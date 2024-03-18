import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { variantsnavbar } from './Variants'
import { useAuth } from '../context/authContext'
import './Styles/Navbar.css'
import LogoSmall from './LogoSmall';
import ButtonUser from './ButtonUser';

const Nabvar = () => {
 const { user } = useAuth();


  return (

    <div>
      <motion.nav initial="hidden" animate="visible" variants={variantsnavbar} transition={{ duration: 2 }} className="navbar navbar-expand-sm " id='navbar'>
        <div className="container-fluid">
          <Link className="nav-item ps-3" to="/"> <LogoSmall /></Link>
          <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-info"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link className="nav-item d-flex  pe-3 btn btn-primary" to="/"><i className="bi bi-house-heart-fill"> Inicio</i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item d-flex end-0 pe-3 btn btn-success" to="/usuario/consulta"><i className="bi bi-search-heart-fill"> Consultas</i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item d-flex end-0 pe-3 btn btn-success" to="/doctor/consultas"><i className="bi bi-search-heart-fill"> ¿Eres doctor? haz clic aquí
                </i></Link>
              </li>
              <li className="nav-item">
                <ButtonUser />
              </li>
              <li className="nav-item">

                {user ? <div className="d-flex"><div><h5 className="d-flex position-absolute   top-0 mt-3 x-0">{user.displayName}</h5></div></div> : ''}
              </li>
            </ul>

          </div>
        </div>
      </motion.nav>
    </div>
  )
}

export default Nabvar