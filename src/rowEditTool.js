import React, { Component } from "react";
class RowEditTool extends Component {
  render() {
    const { tools, deleteTool, editTool } = this.props;
    const { id, nameOfTool, manufacturer, pricePerHour } = tools;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{nameOfTool}</td>
        <td>{manufacturer}</td>
        <td>{pricePerHour}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={editTool}
            id={id}
          >
            Editare
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteTool}
            id={id}
          >
            Ștergere
          </button>
        </td>
      </tr>
    );
  }
}

export default RowEditTool;
