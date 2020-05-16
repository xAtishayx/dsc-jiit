import React, { Component } from "react";
import data from "../team.json";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { peeps: [] };
  }
  componentDidMount() {
    var peeps = data.members.map((obj) => obj);
    this.setState({ peeps });
  }
  render() {
    console.log(this.state.peeps);
    return (
      <div  className="row">
        {this.state.peeps.map(({name,description,links:{linkedin,github,insta}}, i) => {
          let frame = 
            <div key={i} className="col-md-4">
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
                  <h4 className="card-title">{name}</h4>
                </div>
                <div className="card-footer justify-content-center">
                  
                  <a
                    href={linkedin}
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-github"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href={insta}
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            return frame;
        }
        )}
        {this.frame}
      </div>
    );
  }
}

export default Footer;
