import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useState } from 'react'

export default function Register() {

    const [nombre,setNombre]= useState("");
    const [correoElectronico,setCorreoElectrico]= useState("");
    const [clave,setClave]= useState("");
    const [telefono,setTelefono]= useState("");
    const [nombreUsuario,setNombreUsuario]= useState("");
    const [descripcion,setDescripcion] = useState("");

 async function submitNewCompany () {
        
       console.log('hola');
        try{
            /*let item= {"nombre":nombre,"nombreUsuario":nombreUsuario,"correoElectronico":correoElectronico,"clave":clave,"descripcion":descripcion,"telefono":telefono};
            console.log(item)*/
            const response = await fetch("http://localhost:3000/companies/create", {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    "nombre":nombre,
                    "nombreUsuario":nombreUsuario,
                    "correoElectronico":correoElectronico,
                    "clave":clave,
                    "descripcion":descripcion,
                    "telefono":telefono
                })
            })
            console.log('hola 2');

           await response.json();
            
        } catch(err) {
            console.log('Error:',err);
        }
       
    }


    return(
        <div className={styles.container}>
      <Head>
        <title>Registro</title>
        <meta name="keywords" content="Flui, flui, eventos, celebraciones "></meta>
        <meta name="description" content="FLUI landing web page" />
        <link rel="icon" href="/fluifav.ico" />
      </Head>

      <header>
    <nav class="bg-primary-1000 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 sm: w-full px-6 py-2.5" >
        <div class="md:container md:mx-auto flex flex-wrap justify-between items-center">
            <div  class="flex items-center">
                <img src="/fluiheaderv2.svg" class="mr-3 h-20 " alt="Flui Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Antofagasta</span>
            </div>
            <div class="flex items-center lg:order-2">
                {/* 
                <a href="#inicio" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Iniciar Sesión</a>
                <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Resgistrame</a>
                */}
             
            </div>
        </div>
    </nav>
</header>
<main >
        <h1  class=" text-5xl text-primary-800  text-center m-10">
        Registro Empresa
        </h1>
        <div class="items-center bg-cover bg-alpha-sky w-full justify center p3 "> 
          <h2 id="inicio" class="text-2xl font-bold sm:font-bold text-4xl text-center p-3 text-primary-700"> Ingresa tus datos</h2>
        <div class="grid justify-items-center w-100">
       
            <input type="text" class=" block form-input px-4 py-3 rounded-full m-4" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} >
            </input>


            <input type="text" class="block  form-input px-4 py-3 rounded-full m-4" placeholder="Nombre de Usuario" value={nombreUsuario} onChange={(e)=>setNombreUsuario(e.target.value)}>
            </input>
            <input type="email" class=" block form-input px-4 py-3 rounded-full m-4" placeholder="Correo Electrónico" value={correoElectronico} onChange={(e)=>setCorreoElectrico(e.target.value)}>
            </input>
            
            <input class=" block form-input px-4 py-3 rounded-full m-4" placeholder="Contraseña" type="password" value={clave} onChange={(e)=>setClave(e.target.value)}>
            </input>
            <textarea class="block form-input px-4 py-3 rounded-full m-4" placeholder="Descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} > 
            </textarea>
            <input class="block form-input px-4 py-3 rounded-full m-4" placeholder="Contacto" value={telefono} onChange={(e)=>setTelefono(e.target.value)}>
            </input>
         
       
        <button class="m-10 content-center  py-2 pr-4 pl-3 text-center border-b border-gray-100 bg-primary-700 hover:bg-alpha-sky dark:text-white dark:hover:bg-backblue-bblue dark:bg-primary-700 dark:hover:text-white dark:border-gray-700" 
        onClick={submitNewCompany}>
                       Registrar       
        </button>
        </div>
        </div>
        </main>
        </div>
    )
}