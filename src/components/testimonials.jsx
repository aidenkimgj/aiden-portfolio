import React from 'react';
import people1 from '../assets/img/testimonials/people.jpg';

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="section">
        <div className="section__container">
          <h1>Testimonials</h1>
          <h3>See what they say about me</h3>
          <div className="testimonials">
            <div className="testimonial">
              <img src={people1} alt="People" className="testimonial__avatar" />
              <div className="testimonial__speech-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, itaque sed. Sequi, expedita ea? Totam dolorem
                  voluptatem quia nemo magnam pariatur repudiandae sed ut saepe!
                  Recusandae animi sapiente praesentium qui.
                </p>
                <p className="name">
                  <a href="">John Doe</a> / Developer
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__speech-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, itaque sed. Sequi, expedita ea? Totam dolorem
                  voluptatem quia nemo magnam pariatur repudiandae sed ut saepe!
                  Recusandae animi sapiente praesentium qui.
                </p>
                <p className="name">
                  <a href="">John Doe</a> / Programmer
                </p>
              </div>
              <img src={people1} alt="People" className="testimonial__avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
