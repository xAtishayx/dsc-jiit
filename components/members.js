import React, { Component } from "react";
import Footer from "./footer";


class Members extends Component {
  render() {

    return (
      <div className="team-container team-lead-div" style={{ zIndex: 99 }}>
        <div className="red-circle circles circle1"></div>
        <div className="yellow-circle circles circle2"></div>
        <div className="red-light-circle circles circle3"></div>
        <div className="green-circle circles circle4"></div>
        <div className="green-light-circle circles circle5"></div>
        <div className="blue-light-circle circles circle6"></div>
        <div className="blue-light-circle circles circle7"></div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">DSC Lead</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 ml-auto mr-auto">
              <div className="card card-profile card-plain">
                <div className="card-header card-avatar">
                  <a href="#pablo">
                    <img
                      className="img"
                      src="/assets/img/coreteam/Members/dsc_lead.jpg"
                    />
                  </a>
                </div>
                <div className="card-body ">
                  <h4 className="card-title">Medha Saha</h4>
                </div>
                <div className="card-footer justify-content-center">
                  <a
                    href=""
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-github"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-facebook"
                  >
                    <i className="fa fa-facebook-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">Core Members</h2>
              </div>
            </div>
                  <Footer />
            
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
