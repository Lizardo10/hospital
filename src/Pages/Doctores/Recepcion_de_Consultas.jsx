import React, { } from 'react'
import Nabvar from '../../Components/Nabvar';
import { useAuth } from '../../context/authContext';
import { motion } from "framer-motion";
import { variantstext2 } from "../../Components/Variants";
import '../../Styles/Recepcion_de_consultas.css'
const Recepcion_de_Consultas = () => {
  const { consultas } = useAuth();

  return (
    <>
      <Nabvar />
      <h1 className="text-center text-info  ">Consultas</h1>
      {consultas.map((item) => (<motion.div initial="before" animate="after" variants={variantstext2} className="col-6 position-relative translate-middle-x start-50   mt-5 " id="contenedor"><li className="text-primary" key={item.id} id='lista'>Nombre: {item.nombre}.<br /> Edad: {item.edad}.<br />Consulta para el doctor: {item.doctor} <br /> Sintomas: {item.sintomas} </li> </motion.div>))}
      
    </>
  )
}

export default Recepcion_de_Consultas