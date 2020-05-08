import React, { Component } from "react";
const data = import("../team.json");
const he ={
  a: "asd"
}
class Footer extends Component {
  state = {};
  render() {
    data.then(({name,description,links:{linkedin,github,insta}}) => {
      console.log(name,description,linkedin,github,insta);
    });
    return (
      <div className="col-md-4">
      <div className="card card-profile card-plain">
        <div className="card-header card-avatar">
          <a href="#pablo">
            <img
              className="img"
              src="/assets/img/coreteam/Members/dp.jpeg"
            />
          </a>
        </div>
        <div className="card-body ">
          <h4 className="card-title">Atishya</h4>
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
    );
  }
}

export default Footer;
