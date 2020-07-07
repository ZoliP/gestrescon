import React, { Component } from "react";
import "./shadows.css";
class FormAddMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.matEdit;
    this.handleChange = this.handleChange.bind(this);
    this.addMaterial = this.addMaterial.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  addMaterial(ev) {
    ev.preventDefault();
    this.props.addNewMaterial(this.state);
    this.setState(this.props.matEdit);
  }

  render() {
    const dealers = this.props.dealers.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
    console.log(`the dealers:`, { dealers });
    return (
      <div className="container w-75 bg-warning styleTable">
        <h2 className="text-center">Introduceți datele materialului</h2>

        <form className=" container w-50">
          <label>Denumire material</label>
          <input
            className="form-control"
            name="materialName"
            type="text"
            value={this.state.materialName}
            onChange={this.handleChange}
          />
          <br></br>
          <label>U.M.</label>
          <input
            className="form-control"
            name="unit"
            type="text"
            value={this.state.unit}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Preț unitar</label>
          <input
            className="form-control"
            name="pricePerUnit"
            type="number"
            value={this.state.pricePerUnit}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Furnizorul</label>
          <select
            className="form-control "
            name="idDealer"
            type="text"
            value={this.state.idDealer}
            onChange={this.handleChange}
          >
            <option value></option>
            {dealers}
          </select>
          <br></br>
          <button
            type="submit"
            className="btn bg-secondary"
            onClick={this.addMaterial}
          >
            Adaugă material
          </button>
        </form>
      </div>
    );
  }
}

export default FormAddMaterial;
