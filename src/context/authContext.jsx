import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup

} from 'firebase/auth'
import { collection,  addDoc, getDocs } from "firebase/firestore";
import { auth } from '../firebase.config.js'
import { db } from '../firebase.config'
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  //estado de usuario
  const [user, setUser] = useState(null);

  //estado de cargador o loader
  const [loading, setLoading] = useState(true);
  //estado de consultas
  const [consultas, setConsultas] = useState([])
  //register o registro
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  //login o ingreso
  const login = async (email, password) => signInWithEmailAndPassword(auth, email, password);
  //logout o cerrar sesion
  const logout = () => signOut(auth);
  //login con google
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
  }
  //datos del usuario 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])

  //Base de datos

  //obtener los datos
 
 
  useEffect(() => {
   const lista_de_consultas = async()=> {
    try {
      const querySnapshot = await getDocs(collection(db,'consultas'))
      const docs = [];
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(),id: doc.id})
      })
      setConsultas(docs)
    } catch (error) {
      console.log(error)
      
    }
   }
  
    lista_de_consultas();
  }, [consultas])
  
   


 

//Crear datos
const crearConsulta =async(datos)=> {
  await addDoc(collection(db, 'consultas'),datos)
}
  return (
    <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, consultas , crearConsulta }}>
      {children}
    </authContext.Provider>
  )
}