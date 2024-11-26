import "bootstrap/dist/css/bootstrap.min.css";

import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import { Component } from "react";

class Main extends Component {
  state = {
    books: fantasy
  };

  render() {
    return (
      <Container fluid="md" className="mt-5">
        <div className="d-flex justify-content-center mb-5 gap-4 ">
          <Button onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button onClick={() => this.setState({ books: scifi })}>Scifi</Button>
        </div>
        <Row className="justify-content-center">
          {this.state.books.map((book) => (
            <Col key={book.asin} xs={10} md={4} xl={3}>
              <Card
                className="mb-4"
                style={{ height: "480px", borderRadius: "15px" }}
              >
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ height: "350px" }}
                />
                <Card.Body className=" bg-secondary pb-2">
                  <Card.Title
                    className="text-truncate"
                    style={{ height: "45px", textOverflow: "ellipsis" }}
                  >
                    {book.title}
                  </Card.Title>
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
