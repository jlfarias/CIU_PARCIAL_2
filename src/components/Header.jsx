import React from 'react';
import logoDoggies from '../icon/logo-doggies.png';
import '../css/estilo.css';

const Header = () => {

    return (  
        <div>
            {/*Navegador con logo */}
            <div className="row">
                <div className='col-1'></div>
                <div className="col-10">
                    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-success">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#" onClick="#">
                            <img className="img-fluid" src={logoDoggies} alt="Logo doggies"></img>
                            </a>


                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html" >INICIO</a>
                                </li>

                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">CATEGORIAS</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" onClick="#">BULLDOG </a></li>
                                        <li><a className="dropdown-item" href="#" onClick="#">TERRIER </a></li>
                                        <li><a className="dropdown-item" href="#" onClick="#">COCKER</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html" >CLIENTES FELICES</a>
                                </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">CONTACTO</a>
                            </li>
                            </ul>
                            <form className="d-flex" role="search"> {/* MIRAR EL ESTILO DEL BOTON */}
                                <input className="form-control me-2" type="search" placeholder="Buscar un doggies" aria-label="Search"/>
                                <button className='btn btn-success' type="submit">Buscar</button>
                            </form>
                    
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='col-1'></div>
            </div>
          

        </div>
    );
}
export default Header;