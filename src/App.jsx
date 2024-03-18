
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Register.jsx';
import Consulta from './Pages/Consulta.jsx';
import ProtectedRoute from './Pages/ProtectedRoute.jsx';
import Recepcion_de_Consultas from './Pages/Doctores/Recepcion_de_Consultas.jsx';


const App = () => {
  return (
    < >

      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/usuario/consulta' element={
          <ProtectedRoute>
        <Consulta/>
           
          </ProtectedRoute>
        } />
        <Route path='/doctor/consultas' element={
          <ProtectedRoute>
        <Recepcion_de_Consultas />
          </ProtectedRoute>
        } />
       
      </Routes>

    </>
  )
}

export default App