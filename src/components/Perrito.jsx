import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

    const Perrito = ({perrito, perritos, reservas, agregarReserva}) => {
    
    // seleccionar perrito para reserva
    const seleccionarPerrito = id => {
        const perrito = perritos.filter(perrito => perrito.id === id)[0];   
            agregarReserva([...reservas, perrito]);
        };
    
    const borrarPerrito = id => { 
        const perrito = reservas.filter(perrito => perrito.id !== id);
        agregarReserva(perrito);
        }

    return ( 

        <Container fluid className="separarItem">
            <Card >
                <Card.Header> <h3> {perrito.raza} </h3></Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="col">
                            <Card.Img variant="top" src={perrito.img} />
                            <Card.Text className="separarBoton">
                                {
                                    perritos
                                    ?
                                        <Button variant="success" size="sm" 
                                        type="button" 
                                        onClick={ () => seleccionarPerrito(perrito.id) } 
                                        > RESERVAR </Button>  
                                    :
                                        <Button variant="success" size="sm"
                                        gap-2 type="button" 
                                        onClick={ () => borrarPerrito(perrito.id) }
                                        > ELIMINAR </Button>          
                                } 
                            </Card.Text> 

                        </Col>
                        <Col xs={8}>
                            <Card.Text className="txItem">
                                <b>id:</b> {perrito.id} <br/>
                                <b>Descripción:</b> {perrito.descripcion} <br/>
                                <b>Altura:</b> {perrito.altura} <br/>
                                <b>longevidad:</b> {perrito.longevidad}<br/>
                                <b>Color:</b> {perrito.color}<br/>
                                <b>Pelaje:</b> {perrito.pelaje}<br/>
                            </Card.Text>
                      
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>

     );
}
 
export default Perrito;