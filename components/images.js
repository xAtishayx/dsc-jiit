import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image="assets/img/events/webinar.jpeg"
export default function Images() {
  return (
<div className="slide-section" data-parallax="false" >
      <div className="container-fluid" style={{padding: 0}}>
        <div className="row" style={{marginRight: 0,marginLeft: 0}}>
          <div className="col-md-6 ml-auto mr-auto">
            <div id="Events" className="d-none event-tile col-md-6 ml-auto mr-auto">
              <h2 className="title text-center" style={{color:"#333"}}>Events</h2>
            </div>
          </div>
          <div className="container-fluid text-center" style={{zIndex:3, marginTop: 30,padding: 0}}>
            <div className="main-carousel">
              <div className="carousel-cell"><img src="assets/img/events/1.jpeg" /></div>
              <div className="carousel-cell"><img src="assets/img/events/5.jpeg" /></div>
              <div className="carousel-cell"><img src="assets/img/events/2.jpeg" /></div>
              <div className="carousel-cell"><img src="assets/img/events/3.jpeg" /></div>
              <div className="carousel-cell"><img src="assets/img/events/4.jpeg" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}