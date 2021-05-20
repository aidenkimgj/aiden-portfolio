import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Button, Container, Row } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import Profile from '../assets/img/home/aiden-logo-large.png';

const Home = () => {
  return (
    <>
      <div id="home">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src={Profile}
                roundedCircle
                style={{ width: '200px', height: '200px' }}
              />
              <h1 className="home__title">
                Hi, <br /> I'm Aiden Kim
              </h1>
              <Typewriter
                id="type"
                options={{
                  strings: [
                    "I'm Aiden who dreams of becoming an awesome developer in Calgary",
                    'New Tech Seeker',
                    'Full Stack Developer',
                    "Please hire me (●'◡'●)",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
              <Button className="home__contact" outline color="secondary">
                Contact Me
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
