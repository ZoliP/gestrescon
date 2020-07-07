import React, { Component } from "react";
import RowEditEmployee from "./rowEditEmployee";
import FormEditEmployee from "./formEditEmployee";
import "./shadows.css";
class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      firstName: "",
      lastName: "",
      idJob: 0,
      pricePerHour: 0,
    };
    this.state = this.initialstate;
  }

  render() {
    const { employees, deleteEmployee, editEmployee } = this.props;

    const listEmployee = employees.map((item) => (
      <RowEditEmployee
        employees={item}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
        key={item.id}
      />
    ));
    return (
      <div className="container bg-info styleTable" style={{ display: "flex" }}>
        <div className="form-group col-sm-9 bg-info ">
          <h2 className="text-center">Editarea angajaților</h2>
          <table
            className="table table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nume</th>
                <th scope="col">Prenume</th>
                <th scope="col">Tarif orar</th>
                <th scope="col" colSpan="2">
                  Operații
                </th>
              </tr>
            </thead>
            <tbody>{listEmployee}</tbody>
          </table>
        </div>
        <div className="form-group col-sm-3 ">
          <FormEditEmployee
            formSubmitEmployee={this.props.formSubmitEmployee}
            manEdit={this.props.manEdit}
          />
        </div>
      </div>
    );
  }
}

export default EditEmployee;
