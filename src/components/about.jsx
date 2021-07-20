import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faMobile,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import SaitLogo from '../assets/img/educations/saitLogo.png';
import DonggukLogo from '../assets/img/educations/donggukULogo.jpg';

const About = () => {
  return (
    <>
      <div id="about" className="section section__container">
        <h1>About me</h1>
        <div className="about__me">
          <p>
            Hello, my future employers! I'm <b>Aiden Kim</b>, dreaming of
            becoming a full-stack developer who believes my code can change
            someone's world and tries to write as much code as possible. <br />
            <br />
            It is safe to say that the rapid growth of many industries in modern
            society has been driven by advances in programming based on
            information technology. In an era of growing programmer's role in
            helping people lead a better life through continuous problem
            solving, I am also trying hard to become a part of that role. <br />
            <br />I look forward to the opportunity to demonstrate my skills and
            contribute to the success of my future employer by contributing
            significantly to all projects given to me.
          </p>
        </div>

        <div className="about__majors">
          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
            </div>
            <div className="major__title">Front-end</div>
            <div className="major__description">
              HTML, CSS, JavaScript, SASS, Bootstrap, TypeScript
              <br />
              JSP, JSTL, React, Web APIs
            </div>
          </div>

          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faMobile} />
              </div>
            </div>
            <div className="major__title">Mobile</div>
            <div className="major__description">React Native</div>
          </div>

          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faServer} />
              </div>
            </div>
            <div className="major__title">Back-end</div>
            <div className="major__description">
              Java, JPA, NodeJS, Mongoose,
              <br />
              Sequelize, Rest APIs, GraphQL
            </div>
          </div>
        </div>

        <div className="about__jobs">
          <div className="job">
            <Image
              src={SaitLogo}
              alt="Sait"
              className="job__logo"
              id="job__logo"
            />
            <div className="job__description">
              <p className="job__name">
                <b>Southern Alberta Institute of Technology</b> <br /> Software
                Development
              </p>
              <p className="job__period">2020 Jan - Until now</p>
            </div>
          </div>

          <div className="job">
            <div className="job2">
              <Image
                src={DonggukLogo}
                alt="Dongguk"
                className="job__logo"
                id="job__logo2"
              />
              <div className="job__description">
                <p className="job__name">
                  <b>Dongguk University</b> <br />
                  Economics, Political Diplomacy
                </p>
                <p className="job__period">2005 March - 2011 August</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
