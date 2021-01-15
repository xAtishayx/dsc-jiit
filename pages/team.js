import React from "react";
import Navbar2 from "../components/navbar2";
import Members from "../components/members";
import Contact from "../components/contact";
const img = "assets/img/fb.jpg";

export default function Team() {
  return (
    <div className="header-3">
      <Navbar2 />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" id ="about">
          <div className="carousel-item active">
            <div className="page-header header-filter" id="img">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-10 ml-auto mr-auto text-center"
                    style={{ marginTop: "250" }}
                  >
                    <h1 className="title team-main-title">About the Team
                    <h4>
                      DSC JIIT aspires to expand its student community of
                      passionate and fervent developers to encapsulate the
                      latest and advanced technologies such as cloud computing,
                      machine learning, big data, web, and app development, etc.
                      through their interactive and free workshops. The students
                      get an exceptional experience through the seminars
                      conducted involving the industry professionals. With the
                      cooperation of various domains such as Technical,
                      Business, Creatives and Public Relations and Documentation
                      these events are organized with rewarding feedbacks.
                    </h4>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      <style jsx>{`
        #img {
          background-image: url('/assets/img/events/1.jpeg');
        }
        .row{
          margin-right: 0;
      }
        @media(max-width:700px) {
          .about_section{
              margin-top: 10px;
              margin-bottom: 100px;
          }
          .row{
              margin-left: 0;
              margin-right: 0;
          }
      `}</style>



<div className="row" >
      <div className="bg-yellow" style={{height: 15, width: "33.33%", padding: 0, marginLeft: 0, marginRight: 0, display: "flex"}}></div>
      <div className="bg-blue" style={{height: 15, width: "33.33%", padding: 0, marginLeft: 0, marginRight: 0, display: "flex"}}></div>
      <div className="bg-red" style={{height: 15, width: "33.33%", padding: 0, marginLeft: 0, marginRight: 0, display: "flex"}}></div>
    </div>



      <Members />
      <Contact />
    </div>
  );
}
