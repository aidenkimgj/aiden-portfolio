import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Button, Container, Row } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import Profile from '../assets/img/home/aiden2.jpg';

const Home = () => {
  return (
    <>
      <div id="home">
        <Container>
          <Image
            src={Profile}
            roundedCircle
            style={{ width: '200px', height: '200px' }}
            className="home__avatar"
          />
          <h1 className="home__title">
            Hi, <br /> I'm Aiden Kim
          </h1>
          <div className="home__message">
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
          </div>

          <Button className="home__contact" outline color="secondary">
            Contact Me
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Home;
