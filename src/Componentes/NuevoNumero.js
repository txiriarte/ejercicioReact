import { Button, Col, Form, Row } from "react-bootstrap";

function NuevoNumero() {


    return (

        <Form>
            <Row>
                <Col>
                    <Form.Label>Número A: </Form.Label>
                    <Form.Control type="number" />
             
                    <Form.Label>Número B: </Form.Label>
                    <Form.Control type="number" />
                </Col>
            </Row>

            <Row>
                <Button>SUMA</Button>
                <Button>RESTA</Button>
                <Button>PRODUCTO</Button>
                <Button>DIVISION</Button>
            </Row>

            <Row>
                <Form.Label>Resultado: <span>HEI</span> </Form.Label>
            </Row>

        </Form>



    )

}

export default NuevoNumero;