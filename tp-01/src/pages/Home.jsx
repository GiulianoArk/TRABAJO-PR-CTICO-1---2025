import React from 'react'
import Header from '../components/header'
import Main from '../components/Main'
import Footer from '../components/footer'

const Home = () => {

const persona ={

    nombre: "Giuliano",
    apellido: "Calcagni",
    edad: 18,
    email: "calcagnigiuliano770@gmail.com",
    descripcion: "Estudiante de la Universidad Tecologica Nacional, cursando el segundo año de la Tecnicatura Universitaria en Programación."

}
   
return (
    <>
    <Header persona={persona} />
    <Main persona={persona} />
    </>
)
 
}

export default Home