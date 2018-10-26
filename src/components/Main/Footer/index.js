import React from 'react';

const year = new Date().getFullYear();

const Footer = () => (
  <footer id="footer" className="wrapper style4">
    <div className="inner">
      <ul className="menu">
        <li>&copy; AlisonGaleon[dot]com {year}. All rights reserved.</li>
        <li>
          Sidebar Image <a href="https://unsplash.com">Unsplash</a>
        </li>
        <li>
          Theme <a href="https://html5up.net/hyperspace">Hyperspace</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
