import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CodigoQr from '../asset/CodigoQr'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FLUI Organiza tu fiesta</title>
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
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" oncli>
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#inicio" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Inicio</a>
                    </li>
                    {/*<li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Características</a>
                    </li>*/}
                    <li>
                        <a href="#encuesta" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Encuesta</a>
                    </li>
                    {/*<li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Suscripción</a>
                  </li>*/}
                    <li>
                        <a href="#equipo" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Equipo</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<main className={styles.main}>
        <h1  class=" text-5xl text-primary-800  text-center m-10">
        Tu plataforma para organizar eventos en Antofagasta
        </h1>
        <div class="items-center bg-cover bg-alpha-sky w-full justify center p3 auto-cols-auto"> 
          <h2 id="inicio" class="text-2xl font-bold sm:font-bold text-4xl text-center p-3 text-primary-700"> ¿Qué es FLUI?</h2>
          <ul class="justify-center flex flex-col sm:flex-row">
            <li class="m-4 h-50 sm:m-8 h-200">
                  <div class=" flex flex-col bg-white max-w-sm rounded overflow-hidden shadow-lg pb-3 item center" >
                    <img class=" h-15 w-full sm:items-center h-40 w-full" src="/caract1.svg" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                      <div class=" dark:text-primary-700 font-bold text-l sm:font-bold text-xl mb-2 text-center">Una Plataforma digital</div>
                      <p class="  dark:text-primary-700 text-sm sm:text-l text-center">Simplifica tu experiencia al momento de organizar tus celebraciones. Puedes encontrar todos los servicios y productos que quieres para tu evento en un sólo lugar.</p>
                    </div>
                  </div>
            </li>
            <li class=" m-4 h-50 sm:m-8 h-200">
                  <div class=" flex flex-col bg-white max-w-sm rounded overflow-hidden shadow-lg pb-3 item center" >
                    <img class="h-15 w- sm:items-center h-40 w-full " src="/caract2.svg" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                      <div class="  dark:text-primary-700 font-bold text-l sm:font-bold text-xl mb-2 text-center">Un organizador de eventos</div>
                      <p class="  dark:text-primary-700 text-sm  sm:text-l text-center">Quien gestiona el el evento por ti, tu sólo debes elegir los productos y servicios que deseas en tu celebración</p>
                    </div>
                  </div>
            </li>
            <li class=" m-4 h-50 sm:m-8 h-200">
                  <div class=" flex flex-col bg-white max-w-sm rounded overflow-hidden shadow-lg pb-3 item center" >
                    <img class=" h-15 w-full sm:items-center h-40 w-full" src="/marketplace.svg" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                      <div class="  dark:text-primary-700 font-bold text-l sm:font-bold text-xl mb-2 text-center">Un Marketplace para eventos y celebraciones</div>
                      <p class=" dark:text-primary-700 text-sm  sm:text-l text-center"> Donde puedes ofrecer tus servicios y/o productos para celebraciones de cualquier tipo.</p>
                    </div>
                  </div>
            </li>
          </ul>
          

        </div>

  {
    /*
     <h2 class="font-bold text-4xl text-center p-3 text-primary-700">Suscripción</h2>
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg p-3" >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 p 3">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Características
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Plan FLUI
                       
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Plan Premium
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Plan Empresa
                       
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Vender y comprar en el Marketplace
                </th>
                <td class="py-4 px-6">
                    Sí
                </td>
                <td class="py-4 px-6">
                    Sí
                </td>
                <td class="py-4 px-6">
                    Sí
                </td>
                <td class="py-4 px-6 text-right">
                    
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sistema de Organización de tareas  
                </th>
                <td class="py-4 px-6">
                    No
                </td>
                <td class="py-4 px-6">
                    Sí
                </td>
                <td class="py-4 px-6">
                   Sí
                </td>
                <td class="py-4 px-6 text-right">
                    
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Calendario y sistema de registro de horarios 
                </th>
                <td class="py-4 px-6">
                    Sí
                </td>
                <td class="py-4 px-6">
                    Sï
                </td>
                <td class="py-4 px-6">
                  Sí
                </td>
                <td class="py-4 px-6 text-right">
                    
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Se cobra comisión por cada compraventa
                </th>
                <td class="py-4 px-6">
                    7%
                </td>
                <td class="py-4 px-6">
                    5%
                </td>
                <td class="py-4 px-6">
                  3%
                </td>
                <td class="py-4 px-6 text-right">
                    
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Organizador personal
                </th>
                <td class="py-4 px-6">
                No
                </td>
                <td class="py-4 px-6">
                Sí
                </td>
                <td class="py-4 px-6">
                  Incluido
                </td>
              
            </tr>
            <tr class="bg-white dark:bg-gray-800 items-center">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Precio mensual
                </th>
                <td class="py-4 px-6">
                    Gratis
                </td>
                <td class="py-4 px-6">
                    $10.000
                </td>
                <td class="py-4 px-6">
                    Variable
                </td>
               
            </tr>
            
            
        </tbody>
    </table>
    
</div> 
    */
  }     
 


    <div class="flex justify-center bg-cover bg-alpha-sky w-full justify center p3 auto-cols-auto m-10"> 
      <div class=" flex flex-col justify-center bg-white max-w-sm rounded overflow-hidden shadow-lg pb-3  m-10" >
        <h2 id="encuesta" class="font-bold text-4xl text-center p-3 text-primary-700">Queremos conocerte</h2>
        <div class="px-6 py-4 sm:hidden">
                          <div class=" dark:text-primary-700 font-bold text-xl mb-2 text-center">Responde nuestra encuesta</div>
                          <p class=" dark:text-primary-700 text-l text-center">Buscamos entregar una buena experiencia, es muy importante para nosotros tu opinión. 
                          </p>
                          <br/>
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdroClVhoXoA4liL6LY3OW823-a2trURDyyuA25INRd7Gl6Kw/viewform?usp=sf_link"class="flex justify-center">                         
                           <button class="py-2 pr-4 pl-3 text-center border-b border-gray-100 bg-primary-700 hover:bg-alpha-sky dark:text-white dark:hover:bg-backblue-bblue dark:bg-primary-700 dark:hover:text-white dark:border-gray-700">
                              Empezar
                          </button>
                          </a>

                       </div>
                        <div class="hidden md:block">
                        <div class="sm:px-6 py-4 place-items-center ">
                        <CodigoQr text="https://docs.google.com/forms/d/e/1FAIpQLSdroClVhoXoA4liL6LY3OW823-a2trURDyyuA25INRd7Gl6Kw/viewform?usp=sf_link"></CodigoQr>
                          <div class=" dark:text-primary-700 font-bold text-xl mb-2 text-center">Responde nuestra encuesta</div>
                          <p class=" dark:text-primary-700 text-l text-center">Buscamos entregar una buena experiencia, es muy importante para nosotros tu opinión. 
                          Al escanear el código QR ya podrás responderla. </p>
                        </div>
                        </div>
                     
      </div>
    </div>  

    <div class="justify-center bg-cover bg-white w-full justify center p-3 auto-cols-auto"> 
          <h2 id="equipo" class="font-bold text-4xl text-center p-3 text-primary-700"> Equipo</h2>
          <ul class=" justify-center flex flex-col sm:flex-row lg:order-1">
            <li class="m-4 h-50 sm:m-8 h-200">
               

                  <div class="  dark:text-primary-700 flex flex-col bg-alpha-sky max-w-sm rounded overflow-hidden shadow-lg p-3 item center" >
                    <img class=" items-center h-40 w-full" src="/female.svg" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 text-center">Isidora Medina</div>
                      <p class=" font-bold text-l text-center">Chief Operational Officer</p>
                      <p class=" text-l text-center"> Estudiante de Geología, Universidad Católica del Norte</p>
                    </div>
                  </div>
            </li>
            <li class="m-4 h-50 sm:m-8 h-200">
                  <div class="   dark:text-primary-700 flex flex-col bg-alpha-sky max-w-sm rounded overflow-hidden shadow-lg p-3 item center" >
                    <img class=" items-center h-40 w-full" src="/female.svg" alt=""/>
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 text-center">Gemita Huircapán</div>
                      <p class=" font-bold text-l text-center">Chief Executive Officer</p>
                      <p class=" text-l text-center"> Estudiante de Geología, Universidad Católica del Norte </p>
                    </div>
                  </div>
            </li>
            <li class="m-4 h-50 sm:m-8 h-200">
            <div class="  dark:text-primary-700 flex flex-col bg-alpha-sky max-w-sm rounded overflow-hidden shadow-lg p-3 item center" >
                    <img class=" items-center h-40 w-full" src="/male.svg" alt=""/>
                    <div class="px-6 py-4">
                      <div class="  dark:text-primary-700 font-bold text-xl mb-2 text-center">Vedran Tomicic</div>
                      <p class="  dark:text-primary-700 font-bold text-l text-center">Chief Technology  Officer</p>
                      <p class=" text-l text-center"> Egresado de Ingeniería Civil en Computación e Informática, Universidad Católica del Norte</p>
                    </div>
                  </div>
              
            </li>
          </ul>
          

        </div>
 
           
</main>

      <footer className={styles.footer}>
      <div class="bg-cover bg-white w-full justify center p-3 auto-cols-auto">
        <ul class=" justify-center flex flex-row lg:order-1">
          <li class="m-5 h-100">
          <a href='https://www.instagram.com/flui_cl/'> <img class=" items-center h-20 w-full" src="/instagram.svg" alt="Sunset in the mountains"/>  </a>
          </li>
        </ul>
        <div class="flex justify-center text-sm text-slate-400">
          FLUI Antofagasta®, todos los derechos reservado | flui.empresa@gmail.com  
        </div>
      </div>
        
      </footer>
    </div>
  )
}
