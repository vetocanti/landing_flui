import Head from "next/head";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ProfileCompany() {
  
  let [company, setCompany] = useState([]);
  const router = useRouter();
  
  async function getCompany() {
      const { nombreusuario } = router.query;
      let url = "http://localhost:3000/companies/company/" + nombreusuario;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      
      const data = await response.json();
      console.log(response.json());
      setCompany(data);
      console.log(company);
     /*catch (error) {
      console.error("Error al obtener los datos de la empresa:", error);
    }*/
  }
  useEffect(() => {
    async function getCompany() {
      const { nombreusuario } = router.query;
      let url = "http://localhost:3000/companies/company/" + nombreusuario;
      console.log(url);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      
      const data = await response.json();
      console.log(response.json());
      setCompany(data);
      console.log(company);
     /*catch (error) {
      console.error("Error al obtener los datos de la empresa:", error);
    }*/
  }
  
    getCompany();
  }, []);
  return (
    <div>
      <Head>
        <title>Perfil</title>
        <meta
          name="keywords"
          content="Flui, flui, eventos, celebraciones "
        ></meta>
        <meta name="description" content="FLUI landing web page" />
        <link rel="icon" href="/fluifav.ico" />
      </Head>

      <header>
        <nav class="bg-primary-1000 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 sm: w-full px-6 py-2.5">
          <div class="md:container md:mx-auto flex flex-wrap justify-between items-center">
            <div class="flex items-center">
              <img src="/fluiheaderv2.svg" class="mr-3 h-20 " alt="Flui Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Antofagasta
              </span>
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
      <main>
        <h1 class=" text-5xl text-primary-800  text-center m-10">
          Perfil empresa
        </h1>
        <div class="items-center bg-cover bg-alpha-sky w-full justify center p3 ">
          <h2
            id="inicio"
            class="text-2xl font-bold sm:font-bold text-4xl text-center p-3 text-primary-700"
          >
            Datos
          </h2>
          
            {company.map(item => (
             <div class="flex flex-col justify-center items-center w-auto h-auto space-y-4">
                  <img class="w-[100px] h-[100px] rounded-full" src={item.foto}></img>
                  <div>{item.nombre}</div>
                  <div>{item.descripcion}</div>
                  <div>{item.email}</div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
