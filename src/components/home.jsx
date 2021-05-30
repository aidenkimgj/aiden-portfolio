import React from 'react';
import { Image } from 'react-bootstrap';
import { Button, Container } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import Profile from '../assets/img/home/aiden2.jpg';

const Home = () => {
  return (
    <>
      <div id="home">
        <Container className="home__container">
          <Image src={Profile} roundedCircle className="home__avatar" />
          <h1 className="home__title">
            Hi, <br /> I'm Aiden Kim
          </h1>
          <div className="home__message">
            <Typewriter
              id="type"
              options={{
                strings: [
                  'Dreams of becoming an awesome developer in Calgary',
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
            <a href="#contact">Contact Me</a>
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Home;
