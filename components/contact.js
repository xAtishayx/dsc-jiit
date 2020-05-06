import React, { Component } from "react";
import Link from "../src/Link";
import { makeStyles } from '@material-ui/core/styles';
class Contact extends Component {
  state = {};
  render() {
    return (
      <div id="contact" className="footer contact-us-section container-fluid">
        <img className="blue-2" src="assets/img/blue-2.svg" />
        <img className="green-2" src="assets/img/green-2.svg" />
        <img className="yellow-2" src="assets/img/yellow-2.svg" />
        <img className="red-2" src="assets/img/red-2.svg"  />
        <div className="section">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-10 offset-1 offset-md-2">
              <h2 className="">Send us a message</h2> <br />
              <form
                role="form"
                id="contact-form"
                method="post"
                action="https://formspree.io/mknqnbgb"
              >
                <div className="form-group">
                  <label htmlFor="name" className="bmd-label-floating">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmails"
                    className="bmd-label-floating"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="emails"
                    required
                  />
                  <span className="bmd-help">
                    We'll never share your email with anyone else.
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="bmd-label-floating">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
                <div className="form-group label-floating">
                  <label
                    className="form-control-label bmd-label-floating"
                    htmlFor="message"
                  >
                    {" "}
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    id="message"
                    required
                  />
                </div>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact mail!"
                />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <br />
                <div className="submit text-center">
                  <input
                    type="submit"
                    className="btn btn-danger  btn-raised"
                    
                    value="Contact Us"
                    id="sbtns"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 offset-md-2">
              <h3 className="footer-title">
                DSC JIIT, powered by Google Developers
              </h3>
              <h4>
                Jaypee Institute Of Information Technology,
                <br />
                Noida, Uttar Pradesh, 201309
                <br />
                India
              </h4>
            </div>
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h3 className="follow-title">Follow us on</h3>
              <br />
              <div className="social-links list-unstyled">
                <a href="https://www.facebook.com/dscjiitnoida/">
                  <img src="assets/img/fb.png" width="35px" height="35px" />
                </a>
                <a href="https://www.linkedin.com/company/dscjiitnoida/">
                  <img
                    src="assets/img/linkedin.png"
                    width="35px"
                    height="35px"
                  />
                </a>
                <a href="https://github.com/GDGJIITNOIDA">
                  <img
                    src="https://image.flaticon.com/icons/svg/25/25231.svg"
                    width="35px"
                    height="35px"
                  />
                </a>
                <a href="https://twitter.com/gdg_jiit_noida?lang=en">
                  <img
                    src="assets/img/twitter.png"
                    width="35px"
                    height="35px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <center>
        <span>
          Made with <i className="fa fa-heart pulse"></i> by
          <a href="https://github.com/xatishayx" target="_blank">
            xAtishayx
          </a>
        </span>
      </center>
      </div>
    );
  }
}

export default Contact;
