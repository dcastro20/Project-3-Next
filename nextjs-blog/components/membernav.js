import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">       
         <nav id="nav-wrap">

            {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
            <ul id="nav" className="nav">
                <br></br><br></br>
               <li className="current"><a className="smoothscroll" href="#library">Workouts</a></li>
               <li><a className="smoothscroll" href="#calculator">BMI</a></li>
             <li><a className="smoothscroll" href="#nutrition">Nutrition</a></li>
            </ul>
         </nav>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}