import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>HOSSEIN ZAREI</h2>
        <p>
          <a href="mailto:hosseiny625@gmail.com">hosseiny625@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&rsquo;m Hossein. I&rsquo;m a software developer who loves building modern,
        user-friendly apps and sharing my knowledge with others.<br />
        Whether it&rsquo;s creating mobile apps,
        contributing to open-source projects, or writing about tech,
        I&rsquo;m always looking for ways to learn and grow.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Hossein Zarei <Link to="/">hosseinzi.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
