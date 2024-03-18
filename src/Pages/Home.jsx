import React, { Fragment } from 'react'
import '../Styles/Home.container.css'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { variants, variantscard, variantstext3 } from '../Components/Variants.js';

import img from '../Assets/Hospital.jpg';
import img2 from '../Assets/RESONANCIA-MAGNETICA-AVANZADA-WEB.jpg';
import img3 from '../Assets/Hospital3.jpg';


import Nabvar from '../Components/Nabvar';
import Footer from '../Components/Footer';

function Home() {
 

  return (

    <Fragment>
      <Nabvar />

      <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} transition={{ duration: 1 }} id="container" className=" bg-info position-relative start-50 top-50 translate-middle-x col-lg-8 col-md-12 col-sm-12 my-5" >
        <motion.h1 initial="before" animate="after" variants={variantstext3} transition={{ delay: 0.5, duration: 1.5 }} className="text-center mt-2">Bienvenidos</motion.h1>
        <div className="d-flex justify-content-between  mt-5 mb-5 p-4 col-12">

          <motion.div initial="before" animate="after" variants={variantscard} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 1 }} className="card col-lg-3 col-md-3 col-sm-3">
            <img src={img} className="card-img-top" alt="..." height="200em" />
            <div className="card-body">
              <h3 className="card-title text-center">Cardiología</h3>
              <p className="card-text text-center">Le atendemos  con los  mejores especialistas para su salud del corazón</p>

              <Link className="btn btn-primary form-control" to='/usuario/consulta'>Realice su consulta aquí</Link>

            </div>
          </motion.div>
          <motion.div initial="before" animate="after" variants={variantscard} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 1 }} className="card col-lg-3 col-md-3 col-sm-3 ">
            <img src={img2} className="card-img-top" alt="..." height="200em" />
            <div className="card-body">
              <h3 className="card-title text-center">Cancerología</h3>
              <p className="card-text text-center">Le atendemos con los mejores especialistas para tratar todo tipo de cáncer</p>

              <Link className="btn btn-primary form-control" to='/usuario/consulta'>Realice su consulta aquí</Link>

            </div>
          </motion.div>

          <motion.div initial="before" animate="after" variants={variantscard} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 1 }} className="card col-lg-3 col-md-3 col-sm-3">
            <img src={img3} className="card-img-top" alt="..." height="200em" />
            <div className="card-body">
              <h3 className="card-title text-center">Medicina general</h3>
              <p className="card-text text-center">Le atendemos con los mejores especialistas de medicina general</p>

              <Link className="btn btn-primary form-control" to='/usuario/consulta'>Realice su consulta aquí</Link>

            </div>
          </motion.div>


        </div>

      </motion.div>
      <Footer />
    </Fragment>
  )
}

export default Home