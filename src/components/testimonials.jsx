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
                  “I am sure Aiden has what it takes to be a great developer. He
                  has a strong sense of responsibility for what he is given and
                  has the ability to clearly show what he understands or ideas
                  to others. Aiden also showed not only no afraid of learning
                  new skills but also tried to solve the difficult problem
                  quickly and accurately when it faced with him.”
                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/in/abraham-sohn-b35b5aa8/">
                    Abraham Sohn
                  </a>{' '}
                  / Senior Software Developer at Skyplan Services Ltd.
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
