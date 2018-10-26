/* eslint-disable */
import React from 'react';

const Contact = () => (
  <section id="contact" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Get in touch</h2>
      {/* <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies
        erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem,
        sit amet imperdiet est velit quis lorem.
      </p> */}
      <div className="split style1">
        <section>
          {/* <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" />
              </div>
            </div>
            <ul className="actions">
              <li>
                <a href="" className="button submit">
                  Send Message
                </a>
              </li>
            </ul>
          </form> */}
        </section>
        <section>
          <ul className="contact">
            <li>
              <h3>Email</h3>
              <a href="mailto:me@alisongaleon.com">me@alisongaleon.com</a>
            </li>
            <li>
              <h3>Phone</h3>
              <span>(673) 883-6224</span>
            </li>
            <li>
              <h3>Social</h3>
              <ul className="icons">
                <li>
                  <a href="https://github.com/xiomai" class="fa-github">
                    <span class="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/alison-galeon-a54b7549/" class="fa-linkedin">
                    <span class="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/xiomailuv" class="fa-facebook">
                    <span class="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/xiomaidotnet" class="fa-twitter">
                    <span class="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/xiomaidotnet/" class="fa-instagram">
                    <span class="label">Instagram</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
);

export default Contact;
