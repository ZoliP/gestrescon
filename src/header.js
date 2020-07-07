import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center text-light bg-secondary">
        <strong>
          <h3>
            Gestionarea resurselor tehnice pentru realizarea proiectelor de
            construcții
          </h3>
        </strong>
        <div>
          <img
            className="card-img-top"
            src="./images/header.jpg"
            alt="header pic"
          />
        </div>
      </div>
    );
  }
}

export default Header;
