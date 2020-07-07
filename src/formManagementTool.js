import React, { Component } from "react";
import "./shadows.css";
class FormManagementTool extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: 0,
      idSite: 0,
      idTool: 0,
      startDate: "",
      endDate: "",
      value: 0,
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.assignTool = this.assignTool.bind(this);
    this.calc = this.calc.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  assignTool(ev) {
    ev.preventDefault();
    this.props.assignNewTool(this.state);
    this.setState(this.initialState);
  }

  calc(ev) {
    const endDate = ev.target.value;
    const { idTool } = this.state;
    const startDate = document.querySelector("#startDate").value;

    const value = this.props.tools.find(function (tool) {
      const { id } = tool;
      if (id === idTool) return tool;
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
    this.setState({ endDate, value: total });
  }

  render() {
    const sites = this.props.sites.map((site) => {
      return (
        <option key={site.id} value={site.id}>
          {site.name}
        </option>
      );
    });

    const tools = this.props.tools.map((tool) => {
      return (
        <option key={tool.id} value={tool.id}>
          {tool.nameOfTool}
        </option>
      );
    });

    return (
      <div className="container w-75 bg-danger styleTable">
        <h2 className="text-center">Adăugați utilaje șantierelor</h2>

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
          <label>Alegeți utilajul pentru alocare</label>
          <select
            id="tool"
            className="form-control"
            name="idTool"
            type="text"
            value={this.state.idTool}
            onChange={this.handleChange}
          >
            <option value></option>
            {tools}
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
            className="form-control "
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
            onClick={this.assignTool}
          >
            Adaugă utilaj
          </button>
        </form>
      </div>
    );
  }
}

export default FormManagementTool;
