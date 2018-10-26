import React from 'react';

const SectionStyle = {
  backgroundImage: `url('https://source.unsplash.com/89xuP-XmyrA')`,
  backgroundSize: 'cover',
};

const styles = {
  section: SectionStyle,
};

const SideBar = () => (
  <section id="sidebar" style={styles.section}>
    <div className="inner">
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#languageAndTools">Language and Tools</a>
          </li>
          <li>
            {/* eslint-disable */}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );

export default SideBar;
