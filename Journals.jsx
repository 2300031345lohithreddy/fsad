import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Journals() {
  return (
    <div className="journals-page">
      <header className="bg-dark text-white text-center py-5">
        <Container>
          <h1 className="display-4">Research Journals</h1>
          <p className="lead">Explore a vast collection of published research papers.</p>
        </Container>
      </header>

      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Journal of AI Research</Card.Title>
                <Card.Text>A collection of cutting-edge research in artificial intelligence.</Card.Text>
                <Button variant="primary" href="#">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Data Science & Analytics</Card.Title>
                <Card.Text>Latest trends and findings in data science.</Card.Text>
                <Button variant="primary" href="#">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Cybersecurity Journal</Card.Title>
                <Card.Text>Innovative approaches to digital security and privacy.</Card.Text>
                <Button variant="primary" href="#">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Journals;
