import React, { Fragment, useState } from 'react'

import { motion } from 'framer-motion';
import { variantstext2, variantsbutton,variants } from "../Components/Variants.js";
import { useAuth } from '../context/authContext.jsx';
import { useNavigate } from 'react-router-dom'
import Logo from '../Components/Logo.jsx';
import '../Styles/Register.css'
const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState()
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const { signup } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password)
      navigate('/')
    } catch (error) {

      setError(error.message)
    }
  }
 
  return (
    <Fragment>

      <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 1 }} className="container col-6 bg-info position-absolute start-50 top-50 translate-middle" id="container_register" >

        <span className="d-flex justify-content-center mt-3"><Logo /></span>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit} >
          
          
          <label htmlFor="email" className="form-label text-primary"><motion.h1 initial="before" animate="after" variants={variantstext2} transition={{ delay: 0.5, duration: 1.5 }}>Ingrese un correo </motion.h1></label>
          <div class="input-group mb-3">
            
            <span class="input-group-text bg-primary" id="basic-addon1"><i class="bi bi-envelope"></i></span>
            <input type="email" className="form-control bg-primary" name="email" id="email" aria-describedby="emailHelpId" placeholder="" onChange={handleChange} />
          </div>

          <div className="mb-4">
            
            <label htmlFor="password" className="form-label text-primary"><motion.h1 initial="before" animate="after" variants={variantstext2} transition={{ delay: 0.5, duration: 1.5 }}>Ingrese una contraseña </motion.h1></label>
            <div class="input-group mb-3">
              <span class="input-group-text bg-primary" id="basic-addon1"><i class="bi bi-asterisk"></i></span>
            <input type="password" className="form-control bg-primary" name="password" id="password" placeholder="" onChange={handleChange} />
            </div>
           
          </div>
          <motion.button  whileHover={{ scale: 1.02 }}
            initial="hidden" animate="visible" variants={variantsbutton} transition={{ duration: 1.3 }} type="submit" name="" id="" className="btn btn-primary form-control mb-3">Crear usuario</motion.button>
        </form>
      </motion.div>
    </Fragment>
  )
}

export default Register