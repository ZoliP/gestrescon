import React, { Component } from "react";
import "./shadows.css";
class FormManagementEmployee extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: 0,
      idSite: 0,
      idEmployee: 0,
      startDate: "",
      endDate: "",
      value: 0,
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.calc = this.calc.bind(this);
    this.assignEmployee = this.assignEmployee.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  calc(ev) {
    const endDate = ev.target.value;
    const { idEmployee } = this.state;
    const startDate = document.querySelector("#startDate").value;
    const value = this.props.employees.find(function (employee) {
      const { id } = employee;
      if (id === idEmployee) return employee;
    });
    const { pricePerHour } = value;
    const moment = require("moment");
    var end = moment(endDate);
    var start = moment(startDate);
    var diff = end.diff(start, "days");
    let total;
    if (diff !== 0) {
      total = diff * pricePerHour * 8;
    } else {
      total = pricePerHour * 8;
    }
    // console.log(`total value`, total);
    this.setState({ endDate, value: total });
  }

  assignEmployee(ev) {
    ev.preventDefault();
    this.props.assignNewEmployee(this.state);
    this.setState(this.initialState);
  }
  render() {
    const sites = this.props.sites.map((site) => {
      return (
        <option key={site.id} value={site.id}>
          {site.name}
        </option>
      );
    });

    const employees = this.props.employees.map((employee) => {
      return (
        <option key={employee.id} value={employee.id}>
          {employee.firstName} {employee.lastName}
        </option>
      );
    });

    return (
      <div className="container w-75 bg-info styleTable">
        <h2 className="text-center">Adăugați forță de muncă șantierelor</h2>

        <form className=" container w-50">
          <label>Alegeți șantierul</label>
          <select
            className="form-control"
            name="idSite"
            type="text"
            value={this.state.idSite}
            onChange={this.handleChange}
          >
            <option value></option>
            {sites}
          </select>
          <br></br>
          <label>Alegeți angajatul pentru alocare</label>
          <select
            id="employee"
            className="form-control"
            name="idEmployee"
            type="text"
            value={this.state.idEmployee}
            onChange={this.handleChange}
          >
            <option value></option>
            {employees}
          </select>
          <br></br>
          <label>Data început</label>
          <input
            id="startDate"
            className="form-control"
            name="startDate"
            type="date"
            value={this.state.startDate}
            onChange={this.handleChange}
          />
          <br></br>

          <label>Data sfârșit</label>
          <input
            id="endDate"
            className="form-control"
            name="endDate"
            type="date"
            value={this.state.endDate}
            onChange={this.calc}
          />
          <br></br>

          <label>Valoarea</label>
          <input
            id="value"
            className="form-control "
            name="value"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            readOnly
          />

          <br></br>
          <button
            type="submit"
            className="btn bg-secondary"
            onClick={this.assignEmployee}
          >
            Adaugă angajat
          </button>
        </form>
      </div>
    );
  }
}

export default FormManagementEmployee;
