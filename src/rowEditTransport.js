import React, { Component } from "react";
class RowEditTransport extends Component {
  render() {
    const { transports, deleteTransport, editTransport } = this.props;
    const { id, nameOfMaterial, value } = transports;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{nameOfMaterial}</td>
        <td>{value}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={editTransport}
            id={id}
          >
            Editare
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteTransport}
            id={id}
          >
            Ștergere
          </button>
        </td>
      </tr>
    );
  }
}

export default RowEditTransport;
