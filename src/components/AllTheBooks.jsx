import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import Books from "../data/books/fantasy.json";

class Main extends Component {
  state = {
    category: null
  };

  // regola nr.1 degli Stati del componente è:

  // MAI MUTARE LO STATO DIRETTAMENTE! this.state.count = 1
  // per modificare lo Stato bisogna SEMPRE usare il metodo asincrono this.setState()

  // this.setState(object)
  // questo metodo si aspetta un oggetto con coppie chiave-valore che saranno quelle da modificare sull'oggetto di stato originale
  // in base a quello che passiamo nell'oggetto, lo stato modificherà una o più proprietà.

  // chiamare this.setState() notificherà React anche di un avvenuto cambiamento del suo stato interno del Componente
  // di conseguenza chiamerà un'altra volta il metodo render sulla nostra istanza di Classe

  // chiamare di nuovo render() farà sì che i valori dinamici usati all'interno del nostro JSX verranno rivalutati, e se diversi,
  // verranno cambiati automaticamente anche nel DOM reale.

  // è chiaro quindi perché non sia il caso di mutare direttamente lo Stato, ci perderemmo questa funzionalità utilissima!

  render() {
    return (
      <Container fluid="md" className="mt-5">
        <Row className="justify-content-center">
          {Books.map((book) => (
            <Col key={book.asin} xs={10} md={8} xl={3}>
              <Card
                className="mb-4"
                style={{ height: "540px", borderRadius: "15px" }}
              >
                <Card.Img variant="top" src={book.img} />
                <Card.Body className=" bg-secondary">
                  <Card.Title>{book.title}</Card.Title>
                  <Badge className="ms-3 bg-black"> {book.price}$ </Badge>
                  <Button className="ms-5 " variant="success">
                    + add
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Main;
