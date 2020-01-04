import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import imageLogo from './hesus.js';
import './reset.scss'
import './breakpoint.scss';
import './grid.scss';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="app">
        <header>
          <div className="image-wrap">
            <img src={imageLogo}/>
          </div>
          <div className="search-wrap">
            <input placeholder="Search..." />
          </div>
        </header>
        <main>
          <section className="main-dec">
            <article className="welcome-dec">
              <h1>Welcome <strong>Jack</strong></h1>
              <p>We are always looking forward to meet new talants! You are willing to become part of the  advanture and support us in the development of our activity? Dont hesitate anyomore and join us!</p>
            </article>

            <article className="about-us">
            <div className="color-strip"></div>
              <h1><strong>About Us</strong></h1>
              <p>Safe garding the environment has become a core concern of the developemnt of the large cities. <a><strong>View More</strong></a></p>
            </article>
          </section>
          <section className="news-feeds">
            <h1><strong>News Feed</strong></h1>
            <article className="new-card-wrap">
              <div className="color-strip"></div>
              <div className="news-box">
                <div className="rect-box"></div>
                <div className="news-info">
                <div className="title">CENTRALISE</div>
                <hr/>
                <div className="bottom-info"><div className="date-style">Oct 27, 2019</div><div className="name-style">Jack</div></div>
                </div>
              </div>
            </article>
            <article className="new-card-wrap">
              <div className="color-strip orange-strip"></div>
              <div className="news-box">
                <div className="rect-box"></div>
                <div className="news-info">
                <div className="title">CENTRALISE</div>
                <hr/>
                <div className="bottom-info"><div className="date-style">Oct 27, 2019</div><div className="name-style">Jack</div></div>
                </div>
              </div>
            </article>
            <article className="new-card-wrap">
              <div className="color-strip light-blue"></div>
              <div className="news-box">
                <div className="rect-box"></div>
                <div className="news-info">
                <div className="title">CENTRALISE</div>
                <hr/>
                <div className="bottom-info"><div className="date-style">Oct 27, 2019</div><div className="name-style">Jack</div></div>
                </div>
              </div>
            </article>
          </section>
          <section className="registration-wrap">
          <h1>Registration</h1>
          <form>
          </form>
          </section>
        </main>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
