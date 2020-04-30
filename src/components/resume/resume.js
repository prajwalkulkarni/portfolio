import React,{Component} from 'react';

export default class Resume extends Component{

  constructor(props){
    super(props)

    this.state={
      pts:['Sql','Networking','User authentication','Multiscreen apps','JSON parsing','Debugging','Material design']
    }
  }

    render(){

    const listItems = this.state.pts.map((arg)=> <li type="square" align="left">{arg}</li>)
        return(
            <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Major|Computer Science</h3>
                <p className="info">Android|Full-Stack dev <span>•</span> <em className="date">April 2018</em></p>
                <p>
                  19 y/o undergrad doing major in Computer Science.
                  I've made a couple of apps(Android) and functional websites.
                </p>
              </div>
            </div> {/* item end */}
           
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Android Developer</h3>
                <p className="info">Experience:2-3years <span>•</span> <em className="date">March 2017 - Present</em></p>
                <p align="left">
                  I've worked on a wide range of components,and have a good grip over concepts such as:
                  <ul type="square">
                    {listItems}
                  </ul>

                  You could contact me to get your work done.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Web Development</h3>
                <p className="info">Full stack web development <span>•</span> <em className="date">Dec 2019-Present</em></p>
                <p>
                  Fairly recently, i've been experimenting with full stack web development(frontend+backend),
                  Working only on specific frameworks and still not a master.
                  
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand python" /><em>Python</em></li>
                <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand swift" /><em>Swift</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> 
        );
    }
}