import React, { Component } from "react";
class RowEmployee extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.idJob}</td>
        <td>{this.props.pricePerHour}</td>
      </tr>
    );
  }
}

export default RowEmployee;
