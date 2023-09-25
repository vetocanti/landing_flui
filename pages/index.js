import Head from "next/head";
import styles from "../styles/Home.module.css";
import CodigoQr from "../asset/CodigoQr";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = fetch("http://localhost:3000/contact/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Nombre: formData.name,
        email: formData.email,
        comentario: formData.message,
      }),
    });
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>FLUI Organiza tu fiesta</title>
        <meta
          name="keywords"
          content="Flui, flui, eventos, celebraciones "
        ></meta>
        <meta name="description" content="FLUI landing web page" />
        <link rel="icon" href="/fluifav.ico" />
      </Head>

      <header>
        <nav class="w-full bg-primary-1000 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 sm: w-full px-6 py-2.5">
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
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                oncli
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#inicio"
                    class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Inicio
                  </a>
                </li>
                {/*<li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Características</a>
                    </li>*/}
                <li>
                  <a
                    href="#encuesta"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Encuesta
                  </a>
                </li>
                {/*<li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Suscripción</a>
                  </li>*/}
                <li>
                  <a
                    href="#equipo"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Equipo
                  </a>
                </li>
                <li>
                  <a
                    href="#comentario"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Enviar comentario
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 class=" text-5xl text-primary-800  text-center m-10">
          Tu plataforma para organizar eventos en Antofagasta
        </h1>
        <div class="flex flex-col items-center bg-cover bg-alpha-sky w-full justify-center p-3">
          <h2
            id="inicio"
            class="h-1/3 text-2xl font-bold sm:font-bold text-4xl text-center p-3 text-primary-700 "
          >
            {" "}
            ¿Qué es FLUI?
          </h2>
          <ul class="flex flex-col justify-center items-center h-2/3 space-y-3 space-x-0  sm:flex-row sm:space-x-4 sm:space-y-0">
            <li>
              <div class=" flex flex-col w-[300px] h-[200px] bg-white rounded overflow-hidden shadow-lg item-center">
                <img
                  class="h-15 w-full sm:items-center h-24 w-full"
                  src="/caract1.svg"
                  alt="Sunset in the mountains"
                />
                <div class="mx-6 my-4">
                  <div class=" dark:text-primary-700 font-bold text-base sm:font-bold text-base mb-2 text-center">
                    Una Plataforma digital
                  </div>
                  <p class="dark:text-primary-700 text-sm sm:text-l text-center">
                    Donde puedes encontrar todo lo que necesitas para tu celebración
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class=" flex flex-col w-[300px] h-[200px] bg-white rounded overflow-hidden shadow-lg item-center">
                <img
                  class="h-15 w-full sm:items-center h-24 w-full"
                  src="/caract2.svg"
                  alt="Sunset in the mountains"
                />
                <div class="mx-6 my-4">
                  <div class=" dark:text-primary-700 font-bold text-base sm:font-bold text-base mb-2 text-center">
                  Un organizador de eventos
                  </div>
                  <p class="dark:text-primary-700 text-sm sm:text-l text-center">
                  Elije los productos y servicios que deseas en tu celebración
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class=" flex flex-col w-[300px] h-[200px] bg-white rounded overflow-hidden shadow-lg item-center">
                <img
                  class="h-15 w-full sm:items-center h-24 w-full"
                  src="/marketplace.svg"
                  alt="Sunset in the mountains"
                />
                <div class="mx-6 my-4">
                  <div class=" dark:text-primary-700 font-bold text-base sm:font-bold text-base mb-2 text-center">
                  Marketplace para tu evento
                  </div>
                  <p class="dark:text-primary-700 text-sm sm:text-l text-center">
                  Donde puedes ofrecer tus servicios y/o productos 
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex justify-center bg-cover bg-alpha-sky w-full justify center p3 auto-cols-auto m-10">
          <div class=" flex flex-col justify-center bg-white max-w-sm rounded overflow-hidden shadow-lg pb-3  m-10">
            <h2
              id="encuesta"
              class="font-bold text-4xl text-center p-3 text-primary-700"
            >
              Queremos conocerte
            </h2>
            <div class="px-6 py-4 sm:hidden">
              <div class=" dark:text-primary-700 font-bold text-xl mb-2 text-center">
                Responde nuestra encuesta
              </div>
              <p class=" dark:text-primary-700 text-l text-center">
                Buscamos entregar una buena experiencia, es muy importante para
                nosotros tu opinión.
              </p>
              <br />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdroClVhoXoA4liL6LY3OW823-a2trURDyyuA25INRd7Gl6Kw/viewform?usp=sf_link"
                class="flex justify-center"
              >
                <button class="py-2 pr-4 pl-3 text-center border-b border-gray-100 bg-primary-700 hover:bg-alpha-sky dark:text-white dark:hover:bg-backblue-bblue dark:bg-primary-700 dark:hover:text-white dark:border-gray-700">
                  Empezar
                </button>
              </a>
            </div>
            <div class="hidden md:block">
              <div class="sm:px-6 py-4 place-items-center ">
                <CodigoQr text="https://docs.google.com/forms/d/e/1FAIpQLSdroClVhoXoA4liL6LY3OW823-a2trURDyyuA25INRd7Gl6Kw/viewform?usp=sf_link"></CodigoQr>
                <div class=" dark:text-primary-700 font-bold text-xl mb-2 text-center">
                  Responde nuestra encuesta
                </div>
                <p class=" dark:text-primary-700 text-l text-center">
                  Buscamos entregar una buena experiencia, es muy importante
                  para nosotros tu opinión. Al escanear el código QR ya podrás
                  responderla.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="justify-center bg-cover bg-white w-full justify center p-3 auto-cols-auto">
          <h2
            id="equipo"
            class="font-bold text-4xl text-center p-3 text-primary-700"
          >
            {" "}
            Equipo
          </h2>
          <ul class=" justify-center flex flex-col sm:flex-row lg:order-1">
            <li class="m-4 h-50 sm:m-8 h-200">
              <div class="  dark:text-primary-700 flex flex-col bg-alpha-sky max-w-sm rounded overflow-hidden shadow-lg p-3 item center">
                <img
                  class=" items-center h-40 w-full"
                  src="/female.svg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-center">
                    Isidora Medina
                  </div>
                  <p class=" font-bold text-l text-center">
                    Co-Founder & COO
                  </p>
                
                </div>
              </div>
            </li>
            <li class="m-4 h-50 sm:m-8 h-200">
              <div class="   dark:text-primary-700 flex flex-col bg-alpha-sky max-w-sm rounded overflow-hidden shadow-lg p-3 item center">
                <img
                  class=" items-center h-40 w-full"
                  src="/female.svg"
                  alt=""
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-center">
                    Gemita Huircapán
                  </div>
                  <p class=" font-bold text-l text-center">
                    Founder & CEO
                  </p>
                
                </div>
              </div>
            </li>
            <li class="m-4 h-50 sm:m-8 h-200">
              <div class="  dark:text-primary-700 flex flex-col bg-alpha-sky max-w-sm rounded overflow-hidden shadow-lg p-3 item center">
                <img class=" items-center h-40 w-full" src="/male.svg" alt="" />
                <div class="px-6 py-4">
                  <div class="  dark:text-primary-700 font-bold text-xl mb-2 text-center">
                    Vedran Tomicic
                  </div>
                  <p class="  dark:text-primary-700 font-bold text-l text-center">
                    Co-Founder & CTO
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-center bg-cover bg-alpha-sky w-full m-10">
            <div class="text-center">

            <h2
            id="comentario"
            class="font-bold text-4xl text-center p-3 text-primary-700"
          >
            {" "}
            Envíanos tu comentario
          </h2>
            </div>
            <form onSubmit={handleSubmit} class="p-3">
              <div class="flex flex-col space-y-3 justify-center md:flex-row space-x-3">
              <div class="flex flex-row md:flex-col">

              </div>
              <label htmlFor="name" class="font-[700] text-lg">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                class="rounded w-[200px]"
              />
              <label htmlFor="email" class="font-[700] text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="rounded w-[200px]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
              <div class="flex flex-col space-y-3 justify-center md:flex-row space-x-4">
              <div class="flex flex-row md:flex-col">

</div>
                <label htmlFor="message" class="font-[700] text-lg">
                  Comentario
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  class="rounded w-[200px] h-auto"
                />
              </div>
              <div class="flex justify-center">
                <button
                  type="submit"
                  class="rounded mt-3 px-4 py-3 text-center border-b border-gray-100 bg-primary-700 hover:bg-alpha-sky dark:text-white dark:hover:bg-backblue-bblue dark:bg-primary-700 dark:hover:text-white dark:border-gray-700"
                >
                  Enviar
                </button>
              </div>
            </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <div class="bg-cover bg-white w-full justify center p-3 auto-cols-auto">
          <ul class=" justify-center flex flex-row lg:order-1">
            <li class="m-5 h-100">
              <a href="https://www.instagram.com/flui_cl/">
                {" "}
                <img
                  class=" items-center h-20 w-full"
                  src="/instagram.svg"
                  alt="Sunset in the mountains"
                />{" "}
              </a>
            </li>
          </ul>
          <div class="flex justify-center text-center text-sm text-slate-400">
            FLUI Antofagasta®, todos los derechos reservado |
            flui.empresa@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}
