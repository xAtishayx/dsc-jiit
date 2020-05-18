import React, { Component } from "react";
class Whatwedo extends Component {
  state = {};
  render() {
    return (
      <div className="about_section">
        <div className="container">
          <div className="row pt-4 pb-4 text-center">
            <div className="col-lg-4 col-sm-12">
              <h4 className="title" style={{ color: "#333333" }}>
                What we do?
              </h4>
              <p className="description" style={{ color: "#333333" }}>
                A Developer Student Clubs is a Google recognised student body at
                a college which directly reports to Google for their activities.
                <br />
                <br />A DSC conducts workshops, seminars and other fun
                activities which help the students connect with Google.
              </p>
              <br />
            </div>

            <div className="col-lg-8 col-sm-12">
              <div
                className="row text-center"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className="col-lg-3 col-sm-6 col-6">
                  <i
                    className="fa fa-users   description"
                    style={{ fontSize: "40px" }}
                  />
                  <br />
                  <br />
                  <h5 className="title">Talks</h5>
                  <p className="description">
                    Get updated with the latest news and announcements
                  </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-6">
                  <i
                    className="fa fa-code description"
                    style={{ fontSize: "40px" }}
                  />
                  <br />
                  <br />
                  <h5 className="title">Codelabs</h5>
                  <p className="description">
                    Get hands-on experience and guidance from the community
                    members
                  </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-6">
                  <i
                    className="fa fa-graduation-cap description"
                    style={{ fontSize: "40px" }}
                  />
                  <br />
                  <br />
                  <h5 className="title">Projects</h5>
                  <p className="description">
                    We make projects that help individuals to learn more.
                  </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-6">
                  <i
                    className="fa fa-coffee description"
                    style={{ fontSize: "40px" }}
                  />
                  <br />
                  <br />
                  <h5 className="title">Meetups</h5>
                  <p className="description">
                    We love to discuss on open innovations to create something
                    big
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whatwedo;
