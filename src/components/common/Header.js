import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>Welcome ! Deepak Rai Portfolio</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
        />
        {/* <link rel="stylesheet" href={process.env.PUBLIC_URL + "/style.css"} /> */}
        {/* <link rel="stylesheet" href="public/style.css" /> */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.min.css.css'
        />
        <header>
          <div className='container'>
            <div className='header-inner'>
              <div className='logo'>
                <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt='' />
              </div>
              <nav className='navigation'>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  {/* <li><a href="#">Portfolio</a></li> */}
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className='hamburger'>
                <div className='line line1' />
                <div className='line line2' />
                <div className='line line3' />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
