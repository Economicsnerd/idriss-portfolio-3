import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div class="card text-center" id="contact-card">
        <h5 class="card-header">CONTACT</h5>
        <div class="card-body">
          <h5 class="card-title">Got a Project to build ?</h5>
          <p class="card-text">
            Contact me! I'll get back to you as soon as I can.
          </p>
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
    );
  }
}

export default Contact;
