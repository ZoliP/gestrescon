import React, { Component } from "react";
import "./shadows.css";
class FormAddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.manEdit;
    this.handleChange = this.handleChange.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  addEmployee(ev) {
    ev.preventDefault();
    this.props.addNewEmployee(this.state);
    this.setState(this.props.manEdit);
  }

  render() {
    const jobs = this.props.jobs.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
    return (
      <div className="container w-75 bg-info styleTable">
        <h2 className="text-center">Introduceți datele angajatului</h2>
        <form className=" container w-50">
          <label>Nume</label>
          <input
            className="form-control"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Prenume</label>
          <input
            className="form-control"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Funcția</label>
          <select
            className="form-control"
            name="idJob"
            type="text"
            value={this.state.idJob}
            onChange={this.handleChange}
          >
            <option value></option>
            {jobs}
          </select>
          <br></br>
          <label>Tarif orar</label>
          <input
            className="form-control"
            name="pricePerHour"
            type="number"
            value={this.state.pricePerHour}
            onChange={this.handleChange}
          />
          <br></br>
          <button
            type="submit"
            className="btn bg-secondary"
            onClick={this.addEmployee}
          >
            Adaugă angajat
          </button>
        </form>
      </div>
    );
  }
}

export default FormAddEmployee;
