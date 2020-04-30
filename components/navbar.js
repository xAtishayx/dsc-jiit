import React, { Component } from "react";
import Link from "../src/Link";
import { Divider } from "@material-ui/core";
import $ from "jquery"

    $(".main-page .nav-item a").click(function () {
      hr = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(hr).offset().top - 50 }, 500);
    });


  

class Navbar extends Component{
    state = {  }

    render() {
        return (
            <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg " color-on-scroll="20" id="sectionsNav">
    <div className="container">
      <div className="navbar-translate">
        <div className="navbar-brand logo">
          <div className="logo-big">
            <img src="https://dsckitrc.tech/static/6b1acfe99af5a045f707d75f2510443a/fece7/build.png" className="img-fluid"  />
            <span> DSC JIIT </span>
          </div>
          <div className="logo-small">
            <img src="https://dsckitrc.tech/static/6b1acfe99af5a045f707d75f2510443a/fece7/build.png" className="img-fluid"  />
            <span> DSC JIIT </span>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="main-page navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#AboutUs" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="events.html" className="nav-link">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.medium.com/developer-student-clubs-iiitl" target="_blank" className="nav-link">Blog</a>
          </li>
          <li className="nav-item">
            <a href="https://www.github.com/DSC-IIITL" target="_blank" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="team.html" className="nav-link">Our Team</a>
          </li>
          <li className="nav-item">
            <a href="#ContactUs" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        );
    }
}

export default Navbar;