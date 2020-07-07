import React, { Component } from "react";
class RowEditMaterial extends Component {
  render() {
    const { materials, deleteMaterial, editMaterial } = this.props;
    const { id, materialName, unit, pricePerUnit } = materials;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{materialName}</td>
        <td>{unit}</td>
        <td>{pricePerUnit}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={editMaterial}
            id={id}
          >
            Editare
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteMaterial}
            id={id}
          >
            Ștergere
          </button>
        </td>
      </tr>
    );
  }
}

export default RowEditMaterial;
