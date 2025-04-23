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
    descripcion: "Estudiante de la Universidad Tecologica Nacional, cursando el segundo año de la Tecnicatura Universitaria en Programación.",
    telefono: "+54 9 381 217-3556"
}
   
const redes={

    instagram: "https://www.instagram.com/giuliano.c.33/",
    github: "https://github.com/GiulianoArk",
    facebook: "",
    reddit: "https://www.reddit.com/user/its_arkhamknight/"

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