import React, { Component } from "react";

export class Social extends Component {
  render() {
    return (
      <div className="mt-5">
        <h5 class="">Follow me on social media 💜</h5>
        <div className="social">
          <a
            href="https://github.com/Economicsnerd"
            target="_blank"
            class="mr-4"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/idrissdebeard"
            target="_blank"
            class="mr-4"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/idriss-amraoui-036176123/"
            target="_blank"
            class="mr-4"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/econnerd2" target="_blank" class="mr-4">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
