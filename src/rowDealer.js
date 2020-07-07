import React, { Component } from "react";
class RowDealer extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
        <td>{this.props.address}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
      </tr>
    );
  }
}

export default RowDealer;
