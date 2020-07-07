import React, { Component } from 'react';
export default class MainHeader extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
             
            {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#workoutcard">The Workouts</a></li>
               <li><a className="smoothscroll" href="#bmicard">BMI Calculator</a></li>
             <li><a className="smoothscroll" href="#nutritioncard">Nutrition Database</a></li>
             <li><a className="smoothscroll" href="#calendarcard">User Calendar</a></li>
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