import React from 'react';
import man from '../assets/img/testimonials/man.png';
import woman from '../assets/img/testimonials/teacherW.png';

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="section">
        <div className="section__container">
          <h1>Testimonials</h1>
          <h3>See what they say about me</h3>
          <div className="testimonials">
            <div className="testimonial">
              <img src={woman} alt="People" className="testimonial__avatar" />
              <div className="testimonial__speech-bubble">
                <p>
                  “I had the pleasure of having Aiden Kim in two of my classes
                  last year in the Information Technology program Software
                  Development major at SAIT. Aiden prided himself in the work he
                  produced and his assessment submissions were always very high
                  calibre and always demonstrated his strong comprehension of
                  the subject matter. Aiden worked very well independently which
                  was vital when we switched to a remote delivery environment,
                  but demonstrated his strong and positive team skills when
                  working collaboratively with his group in the fourth semester
                  database course.”
                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/in/nicole-berard-a7132420/">
                    Nicole Berard
                  </a>{' '}
                  / Instructor at SAIT Polytechnic
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
                  <a href="#">John Doe</a> / Programmer
                </p>
              </div>
              <img src={man} alt="People" className="testimonial__avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
