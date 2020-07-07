import React, { Component } from "react";
import "./shadows.css";
class FormAddTool extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      nameOfTool: "",
      manufacturer: "",
      pricePerHour: 0,
    };
    this.state = this.initialstate;
    this.handleChange = this.handleChange.bind(this);
    this.addTool = this.addTool.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  addTool(ev) {
    ev.preventDefault();
    this.props.addNewTool(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className="container w-75 bg-danger styleTable">
        <h2 className="text-center">Introduceți datele utilajului</h2>
        <form className="container w-50">
          <label>Denumirea utilajului</label>
          <input
            className="form-control"
            name="nameOfTool"
            type="text"
            value={this.state.nameOfTool}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Producătorul</label>
          <input
            className="form-control"
            name="manufacturer"
            type="text"
            value={this.state.manufacturer}
            onChange={this.handleChange}
          />
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
            onClick={this.addTool}
          >
            Adaugă utilaj
          </button>
        </form>
      </div>
    );
  }
}

export default FormAddTool;
