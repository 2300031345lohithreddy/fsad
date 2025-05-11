import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './styles.css'; 

function Home() {
  return (
    <div className="home-page">

      <header className="header text-center py-5">
        <Container>
          <h1 className="display-4">Welcome to the SmartJournal</h1>
          <p className="lead">
            A platform to manage research papers, submissions, and peer reviews seamlessly.
          </p>
          <Link to="/submissions">
            <Button variant="primary" size="lg">
              Submit Your Research
            </Button>
          </Link>
        </Container>
      </header>
      <Container className="mt-5">
        <Row className="text-center">
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Browse Journals</Card.Title>
                <Card.Text>Explore a vast collection of published research papers.</Card.Text>
                <Button variant="outline-primary" href="/journals">View Journals</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Submit Your Work</Card.Title>
                <Card.Text>Publish your research for academic recognition.</Card.Text>
                <Button variant="outline-success" href="/submissions">Submit Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Review Papers</Card.Title>
                <Card.Text>Help improve research quality by peer reviewing submissions.</Card.Text>
                <Button variant="outline-warning" href="/reviews">Start Reviewing</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
