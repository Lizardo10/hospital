import React from 'react'
import { useAuth } from '../context/authContext'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ButtonUser = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate('/login')
  }
  if (user) return <button type="button" name="" id="" className="btn btn-danger mx-2"><i className="bi bi-x-octagon-fill" onClick={handleLogout}> Cerrar Sesion</i></button>


  return (


    <Link className="nav-item d-flex end-0 pe-3 btn btn-success" to="/login"><i className="bi bi-person"> Ingrese</i></Link>

  )
}

export default ButtonUser