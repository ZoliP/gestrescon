import React, { Component } from "react";
import "./shadows.css";
class FormManagementTransport extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: 0,
      idSite: 0,
      idTransport: 0,
      date: "",
      value: 0,
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.calc = this.calc.bind(this);
    this.assignTransport = this.assignTransport.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  assignTransport(ev) {
    ev.preventDefault();
    this.props.assignNewTransport(this.state);
    this.setState(this.initialState);
  }

  calc(ev) {
    const idTransport = ev.target.value;
    const totalValue = this.props.transports.find(function (transport) {
      const { id } = transport;
      // console.log(`id`, id, `value`, value);
      if (id === idTransport) return transport;
    });
    const { value } = totalValue;
    let total = value;
    this.setState({ idTransport, value: total });
  }

  render() {
    const sites = this.props.sites.map((site) => {
      return (
        <option key={site.id} value={site.id}>
          {site.name}
        </option>
      );
    });

    const transports = this.props.transports.map((transport) => {
      return (
        <option key={transport.id} value={transport.id}>
          {transport.nameOfMaterial}
        </option>
      );
    });

    return (
      <div className="container w-75 bg-light styleTable">
        <h2 className="text-center">Adăugați transportul șantierelor</h2>

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

          <label>Alegeți materialul transportat pentru alocare</label>
          <select
            id="nameOfTransport"
            className="form-control"
            name="idTransport"
            type="text"
            value={this.state.idTransport}
            onChange={this.calc}
          >
            <option value></option>
            {transports}
          </select>
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
            onClick={this.assignTransport}
          >
            Adaugă transport
          </button>
        </form>
      </div>
    );
  }
}

export default FormManagementTransport;
