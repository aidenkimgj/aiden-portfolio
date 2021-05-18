import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const thisYear = () => new Date().getFullYear();

  return (
    <>
      <div id="contact" className="section">
        <h1 className="contact__title">Let's talk</h1>
        <div className="contact__links">
          <a href="mailto:aidenkim3011@gmail.com" target="_blank">
            <FontAwesomeIcon color="grey" icon={faEnvelope} size="3x" />
          </a>

          <a href="https://github.com/aidenkimgj" target="_blank">
            <FontAwesomeIcon color="grey" icon={faGithub} size="3x" />
          </a>

          <a
            href="https://www.linkedin.com/in/aiden-gookjin-kim/"
            target="_blank"
          >
            <FontAwesomeIcon color="grey" icon={faLinkedin} size="3x" />
          </a>
        </div>
        <p className="contact__rights">
          Copyright &copy; <span>{thisYear()}</span> Aiden Portfolio
        </p>
      </div>
    </>
  );
};

export default Contact;
