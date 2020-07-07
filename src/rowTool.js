import React, { Component } from "react";
class RowTool extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.nameOfTool}</td>
        <td>{this.props.manufacturer}</td>
        <td>{this.props.pricePerHour}</td>
      </tr>
    );
  }
}

export default RowTool;
