import React, { Component } from "react"

export default class About extends Component {
    render() {
        return (
            <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Computers have always been my thing.Initially, I started out playing with blogs,changing templates,writing and publishing articles.
                  No sooner, my interest grew more towards coding and stuff,and since then I've never turned back.
                  I like turning ideas into reality, and make a global impact for a better future.
                  Hit me up,if you think you've got an idea.<br/>
                  <i>"Poor people talk about people,average people talk events,and great people talk ideas."</i>
                  <br/>
                  If not at work, I love to travel and see new places.


            </p>
            <div className="row">
              
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
        );
    }
}