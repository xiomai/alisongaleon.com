import React from 'react';

const yearsExp = new Date().getFullYear() - 2012;

const About = () => (
  <section id="about" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>
        <small>/</small> About{' '}
      </h1>
      <p>
        Hi!, I am Alison Galeon and I am a {/* eslint-disable */}
          <a title="Front- and Back-end Development">Full Stack Web Deloper</a> for over {yearsExp} years.
          <br />I grow up in the Southern Philippines, graduated at Liceo de Cagayan University with
          Bachelor's Degree in Information Technology.
          <br />I am currently based in Brunei with my wife.
          <br />I enjoy learning, cooking, nature and my family.
          <br />
          <br />I am on <a href="https://github.com/xiomai">github</a> and{' '}
          <a href="https://www.facebook.com/xiomailuv">facebook</a>.<br />
          Fan of <a href="https://www.gocomics.com/calvinandhobbes/">Calvin and Hobbes</a> and <a href="https://www.basketball-reference.com/players/j/jamesle01.html">LeBron
          James</a>.
        </p>
        <ul className="actions">
          <li>
            <a href="#languageAndTools" className="button">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );

export default About;
