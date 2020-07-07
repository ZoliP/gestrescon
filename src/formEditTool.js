import React, { Component } from "react";
class FormEditTool extends Component {
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
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { toolEdit } = this.props;
    if (prevProps.toolEdit.nameOfTool !== toolEdit.nameOfTool) {
      this.setState({ nameOfTool: toolEdit.nameOfTool });
    }
    if (prevProps.toolEdit.manufacturer !== toolEdit.manufacturer) {
      this.setState({ manufacturer: toolEdit.manufacturer });
    }
    if (prevProps.toolEdit.pricePerHour !== toolEdit.pricePerHour) {
      this.setState({ pricePerHour: toolEdit.pricePerHour });
    }
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  }

  onFormSubmit(ev) {
    ev.preventDefault();
    const id = this.props.toolEdit.id;
    const submitedTool = this.state;
    this.props.formSubmitTool({ ...submitedTool, id });
  }

  render() {
    // const { toolEdit } = this.props;
    const { nameOfTool, manufacturer, pricePerHour } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>Denumire utilaj</label>
          <input
            className="form-control"
            name="nameOfTool"
            type="text"
            value={nameOfTool}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Producător</label>
          <input
            className="form-control"
            name="manufacturer"
            type="text"
            value={manufacturer}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Tarif orar</label>
          <input
            className="form-control"
            name="pricePerHour"
            type="number"
            value={pricePerHour}
            onChange={this.handleChange}
          />

          <br></br>
          <button
            type="submit"
            className="btn bg-secondary btn-block"
            onClick={this.onFormSubmit}
          >
            Modifică
          </button>
        </div>
      </form>
    );
  }
}

export default FormEditTool;
