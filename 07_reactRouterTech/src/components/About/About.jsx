import React from 'react';
import './About.css';
function About() {
  return (
    <div>
      <section className='about'>
        <h1>About Us</h1>
        <p>GeeksforGeeks is a leading platform...</p>
        <div className='about-info'>
          <div className='about-img'>
            <img
              src='https://media.geeksforgeeks.org/wp-content/uploads/20230824153359/
 371ba38b-8a03-4bff-916c-c3fa5396ceda.jfif'
              alt='Geeksforgeeks'
            />
          </div>
          <div>
            <p>
              GeeksforGeeks is a leading platform that provides computer science
              resources and coding challenges for programmers and technology
              enthusiasts,along with interview and exam preparations for
              upcoming aspirants. With a strong emphasis on enhancing coding
              skills and knowledge,it has become a trusted destination for over
              12 million plus registered users worldwide.
            </p>
            <button>Read More...</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
