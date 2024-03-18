import React from 'react'
import Nabvar from '../Components/Nabvar'
import { motion } from 'framer-motion';

import { variants, variantsinput } from '../Components/Variants.js';
import '../Styles/Consulta.css'
 import { useState } from 'react';
 import { useAuth } from "../context/authContext";
 import { useNavigate } from "react-router-dom";
const Consulta = () => {
  const { crearConsulta }= useAuth();
    const [userConsulta, setUserConsulta] = useState({
      nombre: '',
      apellido: '',
      edad: '',
      direccion: '',
      correo: '',
      area: '',
      doctor:'',
      sintomas:''

    });
    const navigate = useNavigate();
  const handleChange = (e) => {
    setUserConsulta({
      ...userConsulta,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=(e)=> {
e.preventDefault();
try {
      crearConsulta(userConsulta);
  navigate('/')
} catch (error) {
  console.log(error)
}
  }
  return (
    <>
      <Nabvar />
      <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} transition={{ duration: 2 }} className="position-relative start-50 top-50 translate-middle-x col-lg-6 col-md-9 col-sm-12 my-3   p-3" id="consulta">
        <div className="col-12">
          <form onSubmit={handleSubmit} >
            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 1 }} className="form-floating mb-3 ">
              <input type="text" className="form-control bg-primary" id="floatingInput" name="nombre" placeholder="name@example.com" onChange={handleChange} required />
              <label htmlFor="floatingInput">Nombre</label>
            </motion.div>
            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 1.2 }} className="form-floating mb-3">
              <input type="text" className="form-control bg-primary" id="floatingInput" name="apellido" placeholder="name@example.com" onChange={handleChange} required />
              <label htmlFor="floatingInput">Apellido</label>
            </motion.div>
            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 1.4 }} className="form-floating mb-3">
              <input type="text" className="form-control bg-primary" id="floatingInput" name="edad" placeholder="name@example.com" onChange={handleChange} required />
              <label htmlFor="floatingInput">Edad</label>
            </motion.div>
            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 1.6 }} className="form-floating mb-3">
              <input type="text" className="form-control bg-primary" id="floatingInput" name="direccion" placeholder="name@example.com" onChange={handleChange} required />
              <label htmlFor="floatingInput">Dirección</label>
            </motion.div>

            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 1.8 }} className="form-floating mb-3">
              <input type="email" className="form-control bg-primary" id="floatingInput" name="correo" placeholder="name@example.com" onChange={handleChange} required />
              <label htmlFor="floatingInput">Correo Electronico</label>
            </motion.div>
            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 2 }} className="form-floating mb-3">
              <select className="form-select bg-primary" id="floatingSelect" name="area" aria-label="Floating label select example" onChange={handleChange} required>
                <option defaultValue>Seleccione a que área realizara su consulta</option>
                <option value="1">Cardiología</option>
                <option value="2">Cancerología</option>
                <option value="3">Medicina general</option>
              </select>
              <label htmlFor="floatingSelect">Área de consulta</label>
            </motion.div>
            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 2.1 }} className="form-floating mb-3">
              <select className="form-select bg-primary" id="floatingSelect" name="doctor" aria-label="Floating label select example" onChange={handleChange} required>
                <option selected>Doctores disponibles</option>
                <option value="Samuel">Samuel</option>
                <option value="Pedro">Pedro</option>
                <option value="Raul">Raul</option>
              </select>
              <label htmlFor="floatingSelect">Doctores</label>
            </motion.div>
            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 2.2 }} className="form-floating mb-3">
              <textarea className="form-control bg-primary" placeholder="Leave a comment here" name="sintomas" id="floatingTextarea" onChange={handleChange} required></textarea>
              <label htmlFor="floatingTextarea">Sintomas</label>
            </motion.div>


            <motion.div initial="before" animate="after" variants={variantsinput} transition={{ duration: 2.3 }} className="d-grid gap-2">
              <button type="submit" name="" id="" className="btn btn-primary">Enviar</button>
            </motion.div>

          </form>
        </div>
      </motion.div>
     
    </>
  )
}

export default Consulta