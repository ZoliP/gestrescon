import React, { Component } from "react";
class RowTransport extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.nameOfMaterial}</td>
        <td>{this.props.value}</td>
      </tr>
    );
  }
}

export default RowTransport;
