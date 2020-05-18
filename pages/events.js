import React, { Component } from "react";
import Navbar2 from "../components/navbar2";
import Contact from "../components/contact";
import data from "../team.json";
export default class Events extends Component {
  state = { peeps: [] };
  componentDidMount() {
    var peeps = data.events.map((obj) => obj);
    this.setState({ peeps });
  }
  render() {
    return (
      <div>
        <Navbar2 />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="page-header header-filter" id="img"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="bg-yellow"
            style={{
              height: 15,
              width: "33.33vw",
              padding: 0,
              marginLeft: 0,
              marginRight: 0,
              display: "flex",
            }}
          ></div>
          <div
            className="bg-blue"
            style={{
              height: 15,
              width: "33.33vw",
              padding: 0,
              marginLeft: 0,
              marginRight: 0,
              display: "flex",
            }}
          ></div>
          <div
            className="bg-red"
            style={{
              height: 15,
              width: "33.33vw",
              padding: 0,
              marginLeft: 0,
              marginRight: 0,
              display: "flex",
            }}
          ></div>
        </div>

        <div className="workshop-main-div" data-parallax="false">
          <div className="red-circle circles circle1"></div>
          <div className="yellow-circle circles circle2"></div>
          <div className="red-light-circle circles circle3"></div>
          <div className="green-circle circles circle4"></div>
          <div className="green-light-circle circles circle5"></div>
          <div className="blue-light-circle circles circle6"></div>
          <div className="blue-light-circle circles circle7"></div>
          <div className="container workshop-main-container">
            <div className="row text-center">
              <div className="col-12">
                <h2
                  className="title text-center"
                  style={{ padding: 50, paddingLeft: 80 }}
                >
                  Past Events{" "}
                </h2>
                <h1
                  className="light-offset-title d-none d-md-block title text-center"
                  style={{
                    padding: 50,
                    position: "absolute",
                    top: -28,
                    width: "100%",
                    opacity: 0.1,
                  }}
                >
                  Past Events
                </h1>
              </div>
            </div>
            <div className="row">
              {this.state.peeps.map(({ name, link, img, date }, i) => {
                let frame = (
                  <div className="col-md-5 ml-auto mr-auto" key={i}>
                    <div className="workshop-card card card-profile">
                      <div className="card-avatar">
                        <a href="#pablo">
                          <img
                            className="img"
                            src={img}
                            style={{ background: "#000" }}
                          />
                        </a>
                      </div>
                      <div className="card-body ">
                        <span className="badge badge-pill badge-default">
                          {date}
                        </span>
                        <h4 className="card-title">{name}</h4>
                        <div className="link-container">
                          <a
                            href={link}
                            className="link btn btn-primary btn-round btn-block btn-lg"
                          >
                            <i className="material-icons">done</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                return frame;
              })}
              {this.frame}
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="bg-yellow"
            style={{
              height: 15,
              width: "33.33vw",
              padding: 0,
              marginLeft: 0,
              marginRight: 0,
              display: "flex",
            }}
          ></div>
          <div
            className="bg-blue"
            style={{
              height: 15,
              width: "33.33vw",
              padding: 0,
              marginLeft: 0,
              marginRight: 0,
              display: "flex",
            }}
          ></div>
          <div
            className="bg-red"
            style={{
              height: 15,
              width: "33.33vw",
              padding: 0,
              marginLeft: 0,
              marginRight: 0,
              display: "flex",
            }}
          ></div>
        </div>

        <Contact />

        <style jsx>{`
              #img {
                background-image: url('/assets/img/events/2.jpeg');
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
      </div>
    );
  }
}
