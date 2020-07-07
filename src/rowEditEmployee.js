import React, { Component } from "react";
class RowEditEmployee extends Component {
  render() {
    const { employees, deleteEmployee, editEmployee } = this.props;
    const { id, firstName, lastName, pricePerHour } = employees;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{pricePerHour}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={editEmployee}
            id={id}
          >
            Editare
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteEmployee}
            id={id}
          >
            Ștergere
          </button>
        </td>
      </tr>
    );
  }
}

export default RowEditEmployee;
