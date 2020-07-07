import React, { Component } from "react";
class FormEditTransport extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      nameOfMaterial: "",
      value: 0,
    };
    this.state = this.initialstate;
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { transportEdit } = this.props;
    if (
      prevProps.transportEdit.nameOfMaterial !== transportEdit.nameOfMaterial
    ) {
      this.setState({ nameOfMaterial: transportEdit.nameOfMaterial });
    }
    if (prevProps.transportEdit.value !== transportEdit.value) {
      this.setState({ value: transportEdit.value });
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
    const id = this.props.transportEdit.id;
    const submitedTransport = this.state;
    this.props.formSubmitTransport({ ...submitedTransport, id });
  }

  render() {
    // const { transportEdit } = this.props;
    const { nameOfMaterial, value } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>Denumire material</label>
          <input
            className="form-control"
            name="nameOfMaterial"
            type="text"
            value={nameOfMaterial}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Valoarea</label>
          <input
            className="form-control"
            name="value"
            type="number"
            value={value}
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

export default FormEditTransport;
