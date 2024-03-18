import React, { Fragment, useState } from 'react'

import { motion } from 'framer-motion';
import { variantstext2, variantsbutton, variants } from "../Components/Variants.js";
import { useAuth } from '../context/authContext.jsx';
import { useNavigate,Link } from 'react-router-dom';
import Logo from '../Components/Logo.jsx';
import '../Styles/Login.css'


const Login = () => {


  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const { login, loading, loginWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password)

      await navigate(`/`)
    } catch (error) {

      console.log(error);
    }
  }
  if (loading) return <h1>Cargango...</h1>
  const handleGooglelogin =async()=>{
    await loginWithGoogle();
    await navigate(`/`)

  }
  return (
    <Fragment>

      <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 1.5 }} className="container col-6 bg-info position-absolute start-50 top-50 translate-middle" id="login" >
        <div className="container  d-flex justify-content-center mt-3"><Logo /></div>
        <form onSubmit={handleSubmit} >
          <label htmlFor="email" className="form-label text-primary"><motion.h1 initial="before" animate="after" variants={variantstext2} transition={{ delay: 0.5, duration: 1.5 }}>Ingrese su correo </motion.h1></label>
          <div class="input-group mb-3">

            <span class="input-group-text bg-primary" id="basic-addon1"><i class="bi bi-envelope"></i></span>
            <input type="email" className="form-control bg-primary" name="email" id="email" aria-describedby="emailHelpId" placeholder="" onChange={handleChange} />
          </div>

          <div className="mb-4">

            <label htmlFor="password" className="form-label text-primary"><motion.h1 initial="before" animate="after" variants={variantstext2} transition={{ delay: 0.5, duration: 1.5 }}>Ingrese su contraseña </motion.h1></label>
            <div class="input-group mb-3">
              <span class="input-group-text bg-primary" id="basic-addon1"><i class="bi bi-asterisk"></i></span>
              <input type="password" className="form-control bg-primary" name="password" id="password" placeholder="" onChange={handleChange} />
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.02 }}
            initial="hidden" animate="visible" variants={variantsbutton} transition={{ duration: 1.3 }} type="submit" name="" id="" className="btn btn-primary form-control mb-3"><i class="bi bi-envelope"> Iniciar sesion</i> </motion.button>
            
        </form>
        <motion.button  whileHover={{ scale: 1.02 }}
          initial="hidden" animate="visible" variants={variantsbutton} transition={{ duration: 1.3 }} type="submit" name="" id="" className="btn btn-primary form-control mb-3" onClick={handleGooglelogin}><i class="bi bi-google"> Iniciar Sesión con Google</i></motion.button>
        <h5 className="text-primary">Si no poseee un cuenta de usuario puede crearla por aquí</h5>
        <Link to="/register"><motion.button whileHover={{ scale: 1.02 }}
          initial="hidden" animate="visible" variants={variantsbutton} transition={{ duration: 1.3 }} type="submit" name="" id="" className="btn btn-primary form-control mb-3"><i class="bi bi-person-plus-fill "> Crear Usuario</i></motion.button></Link>
      </motion.div>
    </Fragment>

  )
}

export default Login