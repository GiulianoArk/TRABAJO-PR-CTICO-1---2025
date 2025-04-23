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
    lenguajes: ["HTML", "CSS", "JavaScript", "Java", "C#"],
    descripcion: "Estudiante de la Universidad Tecologica Nacional, cursando el segundo año de la Tecnicatura Universitaria en Programación."
}
   
const redes={

    instagram: "https://www.instagram.com/giuliano.c.33/",

}

return (
    <>
    <Header persona={persona} />
    
    <>
    <Main persona={persona} />
    </>

    <Footer redes={redes}/>
    </>
)
 
}

export default Home