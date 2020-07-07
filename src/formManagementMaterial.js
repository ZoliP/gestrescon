import React, { Component } from "react";
import "./shadows.css";
class FormManagementMaterial extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: 0,
      idSite: 0,
      idMaterial: 0,
      quantity: 0,
      value: 0,
      date: "",
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.calc = this.calc.bind(this);
    this.assignMaterial = this.assignMaterial.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;

    this.setState({
      [name]: value,
    });
  }

  assignMaterial(ev) {
    ev.preventDefault();
    this.props.assignNewMaterial(this.state);
    this.setState(this.initialState);
  }

  calc(ev) {
    const quantity = ev.target.value;
    const { idMaterial } = this.state;
    //console.log(`idmaterial`, idMaterial);
    const value = this.props.materials.find(function (material) {
      const { id } = material;
      //console.log(`id`, id, `priceperunit`, pricePerUnit);
      if (id === idMaterial) return material;
    });
    //console.log(`unit`, value);
    const { pricePerUnit } = value;
    //console.log(`price`, pricePerUnit);
    const total = quantity * pricePerUnit;
    //console.log(`value`, total);
    //console.log(`quantity`, this.state);
    //console.log(document.querySelector("#value"));
    this.setState({ quantity, value: total });
  }

  render() {
    const sites = this.props.sites.map((site) => {
      return (
        <option key={site.id} value={site.id}>
          {site.name}
        </option>
      );
    });
    const materials = this.props.materials.map((material) => {
      return (
        <option key={material.id} value={material.id}>
          {material.materialName}
        </option>
      );
    });

    return (
      <div className="container w-75 bg-warning styleTable">
        <h2 className="text-center">Adăugați materiale șantierelor</h2>

        <form className=" container w-50">
          <label>Alegeți șantierul</label>
          <select
            className="form-control"
            name="idSite"
            type="number"
            value={this.state.idSite}
            onChange={this.handleChange}
          >
            <option value></option>
            {sites}
          </select>
          <br></br>
          <label>Alegeți materialul pentru alocare</label>
          <select
            id="material"
            className="form-control"
            name="idMaterial"
            type="number"
            value={this.state.idMaterial}
            onChange={this.handleChange}
          >
            <option value></option>
            {materials}
          </select>
          <br></br>
          <label>Cantitatea</label>
          <input
            id="quantity"
            className="form-control"
            name="quantity"
            type="number"
            value={this.state.quantity}
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

          <label>Data</label>
          <input
            className="form-control "
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <br></br>

          <button
            type="submit"
            className="btn bg-secondary"
            onClick={this.assignMaterial}
          >
            Adaugă material
          </button>
        </form>
      </div>
    );
  }
}

export default FormManagementMaterial;
