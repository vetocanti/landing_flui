import Head from 'next/head'; 
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  let link = "http://localhost:3001/profile_company/";
  let [username, setUsername] = useState("");
  

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Realizar la búsqueda con el término ingresado (puedes usar una API, una lista de datos o cualquier otro método)
    const results = performSearch(searchTerm);
    setSearchResults(results);
  };

  async function seeProfile(id) {
    await fetch ("http://localhost:3000/companies/findcompany/"+id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).
    then((res) => res.text())
    .then((data) => {
      console.log(data);
      setUsername(data);
      console.log(username);
      if(username != ""){
        window.location.replace(link+username);
      }
      //window.location.replace(link+username);
    })
 
    //window.location.replace(link+username);
   
   
  
   
  }

  useEffect(() => {
    // Realizar la búsqueda inicial con un término vacío (para mostrar todos los elementos)
    async function getServices() {
      await fetch("http://localhost:3000/service", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          setSearchResults(data);
        });
    }
    getServices();
    }, []);

    return(
        <>
         <div>
      <Head>
        <title>Inicio</title>
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
        <h1  class="text-5xl text-primary-800  text-center m-10">
        Inicio
        </h1>
        <div class="flex items-center justify-center"> 
        <div class="flex flex-col items-center justify-center bg-alpha-sky w-4/5 px-2 py-4 space-y-4 rounded">
    
       
          <h2 id="inicio" class="text-2xl font-bold sm:font-bold text-4xl text-center text-primary-700">Buscar Servicio</h2>
          <form class="flex flex-col justify-center space-y-2" onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Buscar..." />
        <button class="w-auto h-auto p-2 rounded bg-primary-700 hover:bg-white" type="submit">Buscar</button>
      </form>
           
            {searchResults.map(item => (
                <div class="flex flex-col items-center justify-center w-[200px] h-auto border-primary-700 border-[2px] rounded m-2" key={item.id}>
                <h3 class="m-2 font-[600]">{item.titulo}</h3>
                <p class="m-1">{item.detalle}</p>
                <p>${item.precio}</p>
                <button onClick={()=>seeProfile(item.id)} class="bg-alpha-sky rounded text-white m-2 p-2 hover:bg-white hover:text-[#000000]"> Ver Perfil </button>
            <button onClick={()=>deleteService(item.id)} class="bg-alpha-sky rounded text-white m-2 p-2 hover:bg-white hover:text-[#000000]"> Eliminar</button>
                </div>
            ))}
          
        
        </div>
        </div>
        </main>
        </div>
        </>
    )
}