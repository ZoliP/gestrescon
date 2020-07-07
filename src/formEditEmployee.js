import React, { Component } from "react";
class FormEditEmployee extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      firstName: "",
      lastName: "",
      idJob: 0,
      pricePerHour: 0,
    };
    this.state = this.initialstate;
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { manEdit } = this.props;
    if (prevProps.manEdit.firstName !== manEdit.firstName) {
      this.setState({ firstName: manEdit.firstName });
    }
    if (prevProps.manEdit.lastName !== manEdit.lastName) {
      this.setState({ lastName: manEdit.lastName });
    }
    if (prevProps.manEdit.idJob !== manEdit.idJob) {
      this.setState({ idJob: manEdit.idJob });
    }
    if (prevProps.manEdit.pricePerHour !== manEdit.pricePerHour) {
      this.setState({ pricePerHour: manEdit.pricePerHour });
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
    const id = this.props.manEdit.id;
    const submitedMan = this.state;
    this.props.formSubmitEmployee({ ...submitedMan, id });
  }

  render() {
    //const { manEdit } = this.props;
    const { firstName, lastName, pricePerHour } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>Nume</label>
          <input
            className="form-control w-20"
            name="firstName"
            type="text"
            value={firstName}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Prenume</label>
          <input
            className="form-control w-20"
            name="lastName"
            type="text"
            value={lastName}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Tarif orar</label>
          <input
            className="form-control w-20"
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

export default FormEditEmployee;
