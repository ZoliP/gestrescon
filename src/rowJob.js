import React, { Component } from "react";
class RowJob extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
      </tr>
    );
  }
}

export default RowJob;
