import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div id="about" className=" about-section container-fluid   ">
          <div className="section text-center">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center">
                <div className="text-area col-md-8 offset-md-2">
                  <h2 className="">
                    <b>About DSC </b>
                  </h2>
                  <h4>
                    Developer Student Clubs (DSC) is a Google Developers program
                    for university students to learn mobile and web development
                    skills. The clubs are open to any student, ranging from
                    novice developers who are just starting, to advanced
                    developers who want to further their skills. The clubs are
                    intended as a space for students to try out new ideas and
                    collaborate to solve mobile and web development problems.
                    <br />
                  </h4>{" "}
                  <br />
                  <a
                    href="https://developers.google.com/programs/dsc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary prime_btn mb-4"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="d-none d-md-block d-xl-block col-lg-7 col-md-7 about-section-img"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
