import React, {Component} from 'react';

export default class Header extends Component{

    render() {
        return (
    
          <header id="home">
            <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">Hello,World!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr />
                <ul className="social">
                  <li><a href="https://www.facebook.com/prajwal.kulkarni.756"><i className="fa fa-facebook" /></a></li>
                  <li><a href="https://twitter.com/prajwalinbizz"><i className="fa fa-twitter" /></a></li>
                  <li><a href="https://www.linkedin.com/in/prajwal-kulkarni-70a61b85/"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="https://instagram.com/prajwalkulkarni_"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="https://www.github.com/prajwalkulkarni"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
            <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
          </header>
        );
      }
}