import React, { Component } from "react";
import "./shadows.css";
class FormAddTransport extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      nameOfMaterial: "",
      value: 0,
    };
    this.state = this.initialstate;
    this.handleChange = this.handleChange.bind(this);
    this.addTransport = this.addTransport.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  addTransport(ev) {
    ev.preventDefault();
    this.props.addNewTransport(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className="container w-75 bg-light styleTable">
        <h2 className="text-center">
          Introduceți datele materialului transportat
        </h2>
        <form className="container w-50">
          <label>Denumirea materialului</label>
          <input
            className="form-control"
            name="nameOfMaterial"
            type="text"
            value={this.state.nameOfMaterial}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Valoarea</label>
          <input
            className="form-control"
            name="value"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br></br>
          <button
            type="submit"
            className="btn bg-secondary"
            onClick={this.addTransport}
          >
            Adaugă transport
          </button>
        </form>
      </div>
    );
  }
}

export default FormAddTransport;
