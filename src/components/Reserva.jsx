import React from 'react';
import Perrito from './Perrito';

const Reserva = ( {reservas, borrarPerrito} ) => {

    let titulo = reservas.length === 0 ? "Aún sin reservas" : "Me gustaria consultar por esta raza";

    return (      
        <>
            <div>
                <h4 className='subtitulo'> {titulo} </h4>
                { 
                    reservas.map( perrito => (
                        <Perrito
                            key={perrito.id}
                            perrito={perrito}
                            borrarPerrito={borrarPerrito}                 
                        />
                    ))
                }  
            </div>
        </>
     );
}
 
export default Reserva;