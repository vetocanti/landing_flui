import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Register() {

    const [nombre,setNombre]= useState("");
    const [correoElectronico,setCorreoElectrico]= useState("");
    const [clave,setClave]= useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    
    const [nombreUsuario,setNombreUsuario]= useState("");
    const [preferencia,setPreferencia] = useState("");
    const [foto, setFoto]= useState("");
    const [rol, setRol] = useState("Usuario");
    const [category, setCategory] = useState([]);

    const [errorMessage1, setErrorMessage1] = useState("");
    const [errorMessage2, setErrorMessage2] = useState("");
    const [errorMessage3, setErrorMessage3] = useState("");
    const [errorMessage4, setErrorMessage4] = useState("");
    const [errorMessage5, setErrorMessage5] = useState("");
    
    

const CustomDatePickerInput = ({ value, onClick }) => (
  <button class='block m-4 bg-white w-[232px] h-[48px] py-3 px-4 rounded' onClick={onClick}>
    {value}
  </button>
);
    let actualDate = new Date();
    const years = range(1990, actualDate.getFullYear(), 1);
    function range(start, end, step) {
        const length = Math.floor(Math.abs((end - start) / step)) + 1;
        return Array.from(Array(length), (x, index) => start + index * step);
        }
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
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
    let errores = [];
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
    const handlePreferenceChange = (e) => {
        setPreferencia(e.target.value);
    }
    function validateForm() {

        let formIsValid = true;
        
        if(!nombre) {
            setErrorMessage1("");
            formIsValid = false;
        }
        else if(!/^[a-z ,.'-]+$/i.test(nombre)) {
            setErrorMessage1("Primera letra con mayúscula de cada nombre");
            formIsValid = false
            errores.push(errorMessage1);
        }
    
        if(!correoElectronico) {
            setErrorMessage2("");
            formIsValid = false;
        }
    
        else if(
            !/^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-zA-Z]{2,}$/i.test(correoElectronico)
        ) {
            setErrorMessage2("Debe contener el caracter @ y cumplir con el formato: ejemplo@hola.com");
            errores.push(errorMessage2);
            formIsValid = false;
        }
        if(!clave) {
            setErrorMessage3("");
            formIsValid = false;
        }
    
        else if(
            !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s])[a-zA-Z0-9!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]{6,16}$/i.test(clave)
        ) {
            setErrorMessage3("Debe contener al menos 6 caracteres y máximo 16. Al menos una letra en mayúscula y un caracter, además debe contener un dígito al menos");
            errores.push(errorMessage3);
            formIsValid = false;
        }
    
        
    
        if(!nombreUsuario) {
            setErrorMessage5("");
            formIsValid = false;
        }
    
        else if(
            !/^[a-zA-Z0-9]{6,16}$/i.test(nombreUsuario)
        ) {
            setErrorMessage5("Revisar el largo del nombre de usuario (16 máximo y 6 mínimo), además si posee algún caracter número");
            errores.push(errorMessage5);
            formIsValid = false;
        }
        
        for (let i = 0; i < 5; i++) {
            console.log(i + ") " + errores[i])
          }

        return formIsValid;
    
    }

    function validateNombre(value){
        let error;
        if(!value){
            error=""
        }
        else if(!nombre.match(/^[a-z ,.'-]+$/)){
            error='nombre inválido';
        }
        return error;
    }

    
    function validateCorreoElectronico(value){
        let error;
        if(!value){
            error="";
        }
        else if(!correoElectronico.match(/^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-zA-Z]{2,}$/)){
            error='correo inválido';
        }
        return error;
    }

    function validateClave(value){
        let error;
        if(!value){
            error=""
        }
        else if(!clave.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s])[a-zA-Z0-9!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]{6,16}$/)){
            error='Revisar si la contraseña cumple con las condiciones';
        }
        return error;
    }

    /*
    function validateTelefono(value){
        let error;
        if(!value){
            error=""
        }
        else if(!telefono.match(/^\+569[0-9]{8}$/)){
            error='Revisar si el telefóno ingresado es de celular';
        }
        return error;
    }
*/
    function validateNombreUsario(value){
        let error;
        if(!value){
            error=""
        }
        else if(!nombreUsuario.match(/^[a-zA-Z0-9]{6,16}$/)){
            error='Revisar el largo del nombre de usuario (16 máximo y 6 mínimo), además si posee algún caracter número';
        }
        return error;
    }


 async function submitNewCompany () {

       let validar = validateForm();
       let fileInput = document.querySelector('#foto');
       console.log(fileInput.files[0]);
       
       let formData = new FormData();
       formData.append('file', fileInput.files[0]);
     
       if(validar) {
        console.log('hola');

        
        const url = await fetch("http://localhost:3000/companies/upload", {
            method:'POST', 
            body: formData
        }).then(response => response.body.pipeThrough(new TextDecoderStream()).getReader().read()).then(res=> res.value.toString());
       ;
      
       console.log(url.length);
       console.log(nombreUsuario);
       console.log(selectedDate);
       console.log(preferencia);
       var selectElement = document.getElementById("mySelect");
        selectElement.addEventListener("change", handlePreferenceChange);
            // enviar datos a la base de datos
            await fetch("http://localhost:3000/user/create", {
                method:'POST',
                headers: {'Content-Type': 'application/json',
                            'Accept': 'application/json'},
                body:JSON.stringify({
                    "nombre":nombre,
                    "nombreusuario":nombreUsuario,
                    "clave":clave,
                    "preferencias":selectElement.value,
                    "fechadenacimiento": selectedDate,
                    "email":correoElectronico,
                    "foto": url,
                    "rol": rol,

                })
            }).then(response => response.json())
            .then(data => console.log(data));

                console.log("aqui")
                console.log(url);
                console.log("Hola1");
                Swal.fire({
                    title:'Cuenta Creada',
                    text:'Ahora puede acceder a FLUI',
                    icon:'success',
                    timer: 300000,
                    }).then( async function() {
                        await window.location.replace('http://localhost:3001/login');
                        console.log("fin");
                    })
        
                
    }

    else {
        
        Swal.fire(
            'Error',
            'Faltan campos por rellenar o están incorrectos',
            'error'
          )
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
        Registrate aquí
        </h1>
        <div class="items-center bg-cover bg-alpha-sky w-full justify center p3 "> 
          <h2 id="inicio" class="text-2xl font-bold sm:font-bold text-4xl text-center p-3 text-primary-700"> Ingresa tus datos</h2>
        <div class="grid justify-items-center w-100">
       
            <input
            title="Ingrese nombres con mayúscula" 
            type="text" class=" block form-input px-4 py-3 rounded m-4" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} >
            </input>
            {validateNombre(nombre) && <p>{validateNombre(nombre)}</p>}

            <input type="text" class="block  form-input px-4 py-3 rounded m-4" placeholder="Nombre de Usuario" value={nombreUsuario} onChange={(e)=>setNombreUsuario(e.target.value)}>
            </input>
            {validateNombreUsario(nombreUsuario) && <p>{validateNombreUsario(nombreUsuario)}</p>}
            <input
            title="Debe ingresar un correo con la forma correcta"
            type="email" class=" block form-input px-4 py-3 rounded m-4" placeholder="Correo Electrónico" value={correoElectronico} onChange={(e)=>setCorreoElectrico(e.target.value)}>
            </input>
            {validateCorreoElectronico(correoElectronico) && <p>{validateCorreoElectronico(correoElectronico)}</p>}
            
            <input class=" block form-input px-4 py-3 rounded- m-4" placeholder="Contraseña" type="password" value={clave} onChange={(e)=>setClave(e.target.value)}>
            </input>
            {validateClave(clave) && <p class="text-primary-800 ">{validateClave(clave)}</p>}
            <ul>
                <li>
                    Mínimo 6 caracteres y máximo 16
                </li>
                <li>
                    1 letra en mayúscula cómo mínimo
                </li>
                <li>
                    Al menos debe tener un caracter numérico
                </li>
                <li>
                    Al menos debe tener un caracter especial
                </li>
            </ul>

            <div>
        <div class="m-2 pt-4">
        <div class="my-4 text-center">Fecha de Nacimiento</div>
        <DatePicker
        className='datepicker-input'
         captionLayout="dropdown-buttons" 
         dateFormat={"dd/MM/yyyy"}
         customInput={<CustomDatePickerInput />}
         renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button class="m-1" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select
              class="m-1"
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
    
              <select
              class="m-1"
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
    
              <button
              class="m-1"
              onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
         selected={selectedDate} onChange={handleDateChange} />
        </div>
      
    </div>
            <label class="m-2">Categoria</label>
            <select id="mySelect" class="text-center block m-4 bg-white w-[232px] h-[48px] py-3 px-4 rounded" value={preferencia} onChange={handlePreferenceChange}>
              <option disabled selected>Seleccione una categoría</option>
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

           <label class="m-2 p-4">Foto de perfil</label>
            <input id="foto" type="file" value={foto} onChange={(e)=>setFoto(e.target.value)}>
            </input>
       
        <button class="m-10 content-center  py-2 pr-4 pl-3 text-center border-b border-gray-100 bg-primary-700 hover:bg-alpha-sky dark:text-white dark:hover:bg-backblue-bblue dark:bg-primary-700 dark:hover:text-white dark:border-gray-700" 
        onClick={submitNewCompany}>
                       Registrar       
        </button>
        </div>
        </div>
        </main>
        </div>
    )};
        
