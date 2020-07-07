import React, { Component } from "react";
class RowMaterial extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
        <td>{this.props.unit}</td>
        <td>{this.props.pricePerUnit}</td>
        <td>{this.props.idDealer}</td>
      </tr>
    );
  }
}

export default RowMaterial;
