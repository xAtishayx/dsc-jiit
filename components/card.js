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
    return (
      <div className="row">
        {this.state.peeps.map(
          ({ name, description, img, links: { linkedin, github, fb } }, i) => {
            let frame = (
              <div key={i} className="col-md-4">
                <div className="card card-profile card-plain">
                  <div className="card-header card-avatar">
                    <a href="#pablo">
                      <img className="img" src={img} />
                    </a>
                  </div>
                  <div className="card-body ">
                    <h4 className="card-title">{name}</h4>
                    <h6 class="card-category text-m orange-color"></h6>
                    <p style={{ color: "teal" }}>{description}</p>
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
                    
                    {(fb!=" ")?<a
                        href={fb}
                        target="_blank"
                        className="btn btn-just-icon btn-link btn-facebook"
                      >
                        <i className="fa fa-facebook-square"></i>
            </a> : <></>   }
                      
                  </div>
                </div>
              </div>
            );
            return frame;
          }
        )}
        {this.frame}
      </div>
    );
  }
}

export default Footer;
