import React from 'react';

const LanguageAndTools = () => (
  <section id="languageAndTools" className="wrapper style2 fade-up">
    <div className="inner">
      <h2>
        <small>/</small> Language and Tools{' '}
      </h2>
      <p>Learning and writing code is good but knowing which tools to use makes it fun!</p>
      <div className="features">
        <section>
          <span className="icon major fa-code" />
          <h3>Languages</h3>
          <p>
            PHP [Wordpress, Laravel], MySQL, JavaScipt [ES6], React, jQuery, HTML, CSS [Bootstrap,
            Sass]
          </p>
        </section>
        <section>
          <span className="icon major fa-desktop" />
          <h3>Environments</h3>
          <p>Linux [Ubuntu], Unix shell, Windows, nginx, Apache, Docker, Vagrant</p>
        </section>
        <section>
          <span className="icon major fa-wrench" />
          <h3>Tools</h3>
          <p>
            Webpack, git [github, bitbucket], nodejs npm
            <br />
            Visual Studio Code, notepad++, Atom, Sublimetext
          </p>
        </section>
        <section>
          <span className="icon major fa-youtube" />
          <h3>Learning</h3>
          <p>
            <a href="https://www.youtube.com/user/learncodeacademy">Wes Bos [LearnCode.academy]</a>,{' '}
            <a href="https://www.youtube.com/user/TechGuyWeb">Traversy Media</a>,{' '}
            <a href="https://www.youtube.com/user/howtocodewell">Peter Fisher</a> and{' '}
            <a href="https://www.youtube.com/user/LinusTechTips">Linus Tech Tips</a>
          </p>
        </section>
      </div>
    </div>
  </section>
);

export default LanguageAndTools;
