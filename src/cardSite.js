import React, { Component } from "react";

class CardSite extends Component {
  render() {
    const cardStyle = {
      width: "20rem",
      display: "inline-flex",
      boxShadow: "10px 10px 18px #333333",
      margin: "5px",
    };

    return (
      <div className="cards card bg-info " style={cardStyle}>
        <img
          className="card-img-top"
          src={this.props.picture}
          alt="/images/izolare_fatada.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text text-dark">
            <strong>Descriere:</strong> {this.props.info}
          </p>
        </div>
        <ul className="list-group list-group-flush text-center ">
          <li className="list-group-item bg-light">
            Investitor: {this.props.investor}
          </li>
          <li className="list-group-item bg-light">
            Locație: {this.props.address}
          </li>
          <li className="list-group-item bg-light">
            Proiectant: {this.props.designer}
          </li>
          <li className="list-group-item bg-light font-weight-bold">
            Starea șantierului: {this.props.status}
          </li>
        </ul>
      </div>
    );
  }
}

export default CardSite;
