import React from 'react';
import Container from 'react-bootstrap/esm/Container';
 
const Contacto = () => {
    return (
        <Container fluid className='form'>
            <div className="row">
            <div className='col-1'></div>
            <div className="col-6">
                <h3> Contáctenos</h3>
                <p> Puedes escribirnos un correo electrónico para enterarte de nuestras últimas novedades o simplemente para hacernos una consulta. </p>

                <form action="https://formspree.io/f/xyyvzepv" method="POST">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Nombre: <input type="text" className="form-control" name="nombre_usuario" required placeholder="ingrese su nombre"/> </label><br/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Apellido: <input type="text" className="form-control" name="apellido_usuario" required placeholder="ingrese su apellido"/> </label><br/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" name="email" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" id="exampleFormControlInput1" placeholder="suNombre@dominio.com"/>
                      </div>
                    
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"> Envie informacion adicional </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" required rows="5"> </textarea>
                      </div>
                    
                    <input type="submit" value="ENVIAR" className="btn btn-success" /><br/>

                </form>
            </div>
        </div> 
        </Container>
      );
 }
  
 export default Contacto;