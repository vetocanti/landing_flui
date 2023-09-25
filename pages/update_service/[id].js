import Head from "next/head";
import React from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

export default function NewService() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState([]);

  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    async function getCategories() {
      await fetch("http://localhost:3000/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
        });
    }

    getCategories();
  }, []);

  function postService() {
    const url = "http://localhost:3000/service/Update/"+id.toString();
    // obtener el valor del select y guardarlo en una variable
    let categoryCode = document.querySelector("select").value;
    username = decodeURIComponent(document.cookie).split(";")[0].split("=")[1];
    email = decodeURIComponent(document.cookie).split(";")[1].split("=")[1];
    console.log(categoryCode);
    console.log(username);
    console.log(email);
    console.log(title);
    console.log(detail);
    console.log(value);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(
        {
        id: Number(id),
        titulo: title,
        detalle: detail,
        precio: value,
        categoriacodigo: categoryCode,
        empresanombreusuario: username,
        empresaemail: email,
      },
      ),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(alert("Servicio actualizado con éxito con exito"))
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al crear el servicio");
      });
  }
  return (
    <>
      
        <Head>
          <title>Actualizar Servicio</title>
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
                <img
                  src="/fluiheaderv2.svg"
                  class="mr-3 h-20 "
                  alt="Flui Logo"
                />
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
        <h1 class="text-5xl text-primary-800  text-center m-10">Cambia lo que necesites de tu servicio</h1>
        <main class="flex justify-center items-center">

        <div class="flex flex-col justify-center items-center w-2/5 h-auto space-y-2">
          <div class=" flex flex-row border-[2px] w-full  space-x-2 rounded p-2 border-[#000000]">
            <label>Nombre del servicio</label>
            <input
            class="flex justify-left border-[2px]"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
            />
          </div>
          <div class=" flex flex-row border-[2px] w-full  rounded p-2 border-[#000000]">
            <label>Detalle</label>
            <input
             class="flex justify-left border-[2px]"
              type="text"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <div class="flex flex-row border-[2px] w-full  space-x-2 rounded p-2 border-[#000000]">
            <label>Valor</label>
            <input
            class="flex justify-left border-[2px]"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div class="border-[2px] w-full  space-x-2 rounded p-2 border-[#000000]">
            <label>Categoria</label>
            <select>
              {category.map((category, index) => {
                return (
                  <option
                    value={category.codigo}
                    key={index}
                    onChange={(e) => e.target.value}
                  >
                    {category.Nombre}
                  </option>
                );
              })}
            </select>
          </div>
          <button class=" p-2 rounded bg-primary-800 text-[#FFFFFF]" onClick={postService}>Actualizar Servicio</button>
        </div>
        </main>
       
      
    </>
  );
}
