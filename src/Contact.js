import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div class="card text-white mt-4 text-center" id="contact-card">
        <img
          class="card-img"
          src="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Card image"
        ></img>
        <div class="card-img-overlay">
          <div className="mt-4">
            <h2 class="card-header">CONTACT</h2>
          </div>

          <div className="contact-text">
            <h3 class="card-title">Got a Project to build ?</h3>
            <h4 class="card-title">Contact me</h4>
            <a
              href="mailto:idrisscodes@gmail.com"
              class="btn btn-outline-light m-2"
            >
              Email <i class="fas fa-envelope-open"></i>
            </a>
            <a
              href="https://twitter.com/econnerd2"
              class="btn btn-outline-light m-2"
            >
              Twitter <i class="fab fa-twitter "></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
