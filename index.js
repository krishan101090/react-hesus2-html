import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import imageLogo from './hesus.js';
import './reset.scss'
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
        <div className="header-content-wrap">
          <div className="image-wrap">
            <img src={imageLogo}/>
          </div>
          <div className="search-wrap">
            <input placeholder="Search..." />
          </div>
          </div>
        </header>
        <main className="col-12">
          <section className="main-dec col-4">
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
          <hr className="divider" />
          <section className="news-feeds col-4">
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
          <hr className="divider" />
          <section className="registration-wrap col-3">
          <h1><strong>Registration</strong></h1>
          <form>
            <div className="input-wrap">
            <label>First Name</label>
            <input />
            </div>
            <div className="input-wrap">
            <label>Email</label>
            <input />
            </div>
            <div className="input-wrap">
            <label>Password</label>
            <input />
            </div>
            <div className="button-container">
              <button className="cancel-btn">Cancel</button>
              <button className="submit-btn">Submit</button>
            </div>
          </form>
          </section>
        </main>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
