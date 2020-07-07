import React, { Component } from "react";
import "./shadows.css";
class AddSite extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      name: "",
      investor: "",
      address: "",
      designer: "",
      picture: "",
      info: "",
      status: "",
    };
    this.state = this.initialstate;
    this.handleChange = this.handleChange.bind(this);
    this.addSite = this.addSite.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  addSite(ev) {
    ev.preventDefault();
    this.props.addNewSite(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className="container w-75 bg-info styleTable">
        <h2 className="text-center">Introduceți datele șantierului</h2>
        <form className=" container w-75">
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Denumirea șantierului"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            name="investor"
            type="text"
            placeholder="Beneficiar"
            value={this.state.investor}
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            name="address"
            type="text"
            placeholder="Adresa"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            name="designer"
            type="text"
            placeholder="Proiectant"
            value={this.state.designer}
            onChange={this.handleChange}
          />
          <input
            className="form-control "
            name="picture"
            type="file"
            placeholder="Imagine"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            name="info"
            type="text-area"
            placeholder="Descrierea lucrărilor"
            value={this.state.info}
            onChange={this.handleChange}
          />
          <select
            className="form-control w-25"
            name="status"
            type="text"
            value={this.state.status}
            onChange={this.handleChange}
          >
            <option value>Starea</option>
            <option>activ</option>
            <option>inactiv</option>
          </select>
          <br></br>
          <button
            type="submit"
            className="btn bg-secondary btn-block"
            onClick={this.addSite}
          >
            Adaugă șantierul
          </button>
        </form>
      </div>
    );
  }
}

export default AddSite;
