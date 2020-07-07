import React, { Component } from "react";
import RowEmployee from "./rowEmployee";
import "./shadows.css";
class TableEmployees extends Component {
  render() {
    const employeeList = this.props.employees.map((employee) => {
      return (
        <RowEmployee
          key={employee.id}
          id={employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
          idJob={employee.jobName}
          pricePerHour={employee.pricePerHour}
        />
      );
    });
    return (
      <div className="container w-75 bg-info styleTable">
        <h2 className="text-center">Lista angajațiilor</h2>
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nume</th>
              <th scope="col">Prenume</th>
              <th scope="col">Funcția</th>
              <th scope="col">Tarif orar</th>
            </tr>
          </thead>
          <tbody>{employeeList}</tbody>
        </table>
      </div>
    );
  }
}

export default TableEmployees;
