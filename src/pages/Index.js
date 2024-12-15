import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Hossein Zarei's personal website. Mobile Application developer, "
      + 'Computer Engineering Student'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            On this website, you&rsquo;ll find my projects, tools I&rsquo;ve created,
            and insights I&rsquo;ve picked up along the way.
            Feel free to explore, and let&rsquo;s connect
            if you want to collaborate or chat about tech!
          </p>
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
