import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Contacto from './components/Contacto';
import Perrito from './components/Perrito';
import './App.css';
import Reserva from './components/Reserva';


function App() {

  const [message, editarLista] = useState("");
  
  ///////////////----- consulta la lista de la api perrito
  //--> lista de buldog: https://dog.ceo/api/breed/bulldog/images
  //--> toda la lista https://dog.ceo/api/breeds/list/all
  //--> imagen aleatoria https://dog.ceo/api/breeds/image/random
  const consultaAPI = async() => {
    try{
      // LISTA DE BULLDOG
      const api = await fetch('https://dog.ceo/api/breed/bulldog/images');
      const resultado = await api.json();
      const tamanioListaPerrito = resultado.message.length  // tamaño de lista perrito
      var posicionAleatoria = Math.floor(Math.random()*tamanioListaPerrito)+1;    // un numero aleatorio para indice de la lista del bulldog
      editarLista(resultado.message[posicionAleatoria]); 
      
    }catch(error){
      console.log(error);
    }
  }
//-----------> fin funcion tomar imagen de api



//////////////////////------ Hook para almacenar perritos
  const [perritos, editarPerrito, borrarPerrito] = useState([
    {
      id:0,
      raza:"Bulldog Frances", 
      descripcion:"Tiene un aspecto gruñón a simple vista, pero estamos hablando de una raza sociable, juguetona, entusiasta y vivaz. Es un perro de apariencia robusta y musculosa a pesar de su tamaño pequeño. Tiene una estructura compacta con huesos sólidos. Su cabeza es cuadrada y ancha, de cara corta y arrugada. Tiene el hocico corto y ancho, con nariz negra y ancha",
      altura: "30 cm",
      longevidad: "10 a 12 años",
      color: "Puede ser cualquier combinación de negro con otro color más claro, leonado, blanco.",
      pelaje: "Tiene pelo corto, fino, suave y lustroso. Su piel es suave y flexible.",
      img:"https://vetmarketportal.com.ar/uploads/noticias/5/20211216161018_bulldog_frances.jpg"
    },
    {
      id:1,
      raza:"Bulldog Ingles", 
      descripcion:"Éste es un perro de complexión pesada, estatura baja y pelo corto. A primera vista se aprecia que es un animal ancho, poderoso y compacto. De carácter cariñoso, sociable, muy fiel, tranquilo y dócil. El calor es un riesgo para la salud del bulldog inglés. No resiste bien las variaciones climáticas",
      altura: "De 35 a 45 cm aprox. en machos y hembras",
      longevidad: "Esperanza de vida estimada de entre 8 a 10 años",
      color: "Atigrado, bayo, leonado, rojo, blanco o partido.",
      pelaje: "Pelo corto, liso y fino.",
      img:"https://cnnespanol.cnn.com/wp-content/uploads/2022/06/220615105053-unhealthy-english-bulldogs-full-169.jpeg?quality=100&strip=info"
    },
    {
      id:2,
      raza:"Bulldog Americano", 
      descripcion:"Es un perro muy activo y sociable, su inteligencia hace que aprenda rápido malas costumbres pero no es difícil de educar. Hay que ser paciente, tiene mucha capacidad de aprendizaje, suele ser dominante con otros perros pero se lleva bien con otras mascotas en su hogar. Para ello, la socialización desde edades tempranas tendrá que ser uno de los puntos clave de la educación de esta raza",
      altura: "55 a 70 cm",
      longevidad: "10 a 12 años",
      color: "Combinación de negro con otro color más claro, blanco.",
      pelaje: "Tiene pelo corto, fino, y suave. Su piel es suave y flexible.",
      img:"https://nfnatcane.es/blog/wp-content/uploads/2019/12/bulldog-americando-mirando-de-frente.jpg"
    }
]);
//-----------> fin tabla


///////////////-----> funcion para modificar imagen de la lista perrito
{/*  
for (let i = 0; i < perritos.length; i++){
  consultaAPI();
  perritos[i].img={message};
  console.log(i)
  console.log(message);
}   */} 
//-----------> fin procesar imagen


/////////////////////////////----ALMACENAR EN EL STORAGE

  let perritosReservados = JSON.parse(localStorage.getItem('reservas'));
  if(!perritosReservados) {
    perritosReservados =[]; // si no hay productos en el chango .. lista vacia
  };

// hook para almacenar reservas
  const [reservas, agregarReserva] =  useState(perritosReservados); // useState([]);      
  
  useEffect(
    () => {
        if(perritosReservados){
            localStorage.setItem('reservas', JSON.stringify(reservas));
        } else {
            localStorage.setItem('reservas', JSON.stringify([]));
        }
    }, [perritosReservados]
  );
//-----------> fin almacenar reservas

  return (
      <>
          <Header/>
          <div className="row m-0">
              <div className='col-1'></div>
              <div className="col-10">
                <h1> ¡Nuestros cachorros! </h1>
                <h3>Doggies que te alegran la vida</h3>
                <p className="txInicio"> Tu futuro mejor compañero esta muy cerca. Contamos con mas de 15 años de trayectoria brindando felicidad a muchas familias.
                El amor y cariño hacia nuestros cachorros es lo que nos permite disfrutar de la crianza de estas maravillosas razas, que sin lugar a duda, serán los futuros ideales compañeros.
                Doggies es un proyecto familiar que hacemos con mucho amor, cariño, seriedad, compromiso y atención personalizada para todos nuestros clientes.
                </p>              
              </div>
              <div></div>
          </div>

          <div className="row m-0">
              <div className='col-1'></div>
              <div className="col-7 p-6">          
                {
                  perritos.map(perrito => (
                    <Perrito
                    perritos={perritos}
                    perrito={perrito}
                    clave={perrito.id}
                    reservas={reservas}
                    agregarReserva={agregarReserva}
                    borrarPerrito={borrarPerrito}
                    />
                  ))
                }  
              </div>
              <div className="col-3 border border-1 rounded-2 p-6 text-center">
                <Reserva
                  reservas={reservas}       
                />

              </div>
              <div className='col-1'></div>
          </div>  
          
          <div className="row m-0">
              <div className="col-12">
                <Contacto/>

            
                {/* CON EL BOTON FUNCIONA lA SELECCION ALEATORIA DE PERRITOS
                <button
                  onClick={consultaAPI}
                  >Ver Perrito
                </button>
                  <img src={message}></img>
                    imagen: {message}                  
                */}

              </div>
          </div>

        <Footer
        redsocial={"@facebook e @instagram"}
        />

    </>
  );
}

export default App;
