import React from 'react';
import facebook from '../icon/facebook.png';
import instagram  from '../icon/instagram.png';
import doggies from '../icon/logito-doggies.png';
import '../css/estilo.css';

const Footer = ({redsocial}) => {
    // redsocial es una property
    // FUERA DEL RETUR VA EL CODIGO JAVASCRIP|
    // FUNCION PARA CALCULAR EL AÑO
    const fecha = new Date().getFullYear();

    return (  
        <div>
            {/*Pie de pagina */}
            <div className="row m-0">
                <div className='col-1'></div>
                <div className="col-2 text-bg-success p-5"> 
                    <img src={doggies} alt="Marca"/>
                    <p className="piePagina"> 
                        TELEFONO: +(5411) - 3801-0303 <br/>
                        Bs.As | ARGENTINA <br/>
                        <p>AÑO: {fecha}</p>
                    </p>
                </div>

                <div className="col-3 text-bg-success p-5">
                    <h6 className='tituloFooter'>SERVICO DE ENVÍO</h6>
                    <p className="piePagina">
                    Para que nuestros cachorros lleguen en perfectas condiciones a su nuevo hogar los enviamos por transporte de mascotas 
                    en el cual viajan con todos los cuidados y precauciones necesarias. <br/>
                    </p>
                    <p className="piePaginaBold"> Los envios son a todo el país.</p>
                </div>

                <div className="col-3 text-bg-success p-5">
                    <h6 className='tituloFooter'>INFORMACIÓN ÚTIL</h6>
                    <p className="piePagina"> <spam className="piePaginaBold"> Horario de atención:</spam> Lunes a Sábados de 08 a 18 hs.</p>                               
                    <p className="piePagina">
                    La dirección de Doggies no asume ninguna responsabilidad por el contenido de las notas, 
                    publicaciones y servicios que los anunciantes publiquen en nuestros medios. 
                    </p>

                </div>

                <div className="col-2 text-bg-success p-5">
                    <h6 className='tituloFooter'> SIGUENOS EN NUESTRA REDES: <br/> {redsocial}</h6>
                    <img className="icon" src={facebook} alt="Seguinos en facebook"/>
                    <img className="icon" src={instagram} alt="Seguinos en instagram"/>
                </div>
                <div className='col-1'></div>

            </div>

        </div>
    );
}
 
export default Footer;