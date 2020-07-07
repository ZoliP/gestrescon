import React, { Component } from "react";
class FormEditMaterial extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      materialName: "",
      unit: "",
      pricePerUnit: 0,
      idDealer: 0,
    };
    this.state = this.initialstate;
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { matEdit } = this.props;
    if (prevProps.matEdit.materialName !== matEdit.materialName) {
      this.setState({ materialName: matEdit.materialName });
    }
    if (prevProps.matEdit.unit !== matEdit.unit) {
      this.setState({ unit: matEdit.unit });
    }
    if (prevProps.matEdit.pricePerUnit !== matEdit.pricePerUnit) {
      this.setState({ pricePerUnit: matEdit.pricePerUnit });
    }
    if (prevProps.matEdit.idDealer !== matEdit.idDealer) {
      this.setState({ idDealer: matEdit.idDealer });
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
    const id = this.props.matEdit.id;
    const submitedMat = this.state;
    this.props.formSubmitMaterial({ ...submitedMat, id });
  }

  render() {
    // const { matEdit } = this.props;
    const { materialName, unit, pricePerUnit, idDealer } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>Denumire material</label>
          <input
            className="form-control w-20"
            name="materialName"
            type="text"
            value={materialName}
            onChange={this.handleChange}
          />
          <br></br>
          <label>U.M.</label>
          <input
            className="form-control w-20"
            name="unit"
            type="text"
            value={unit}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Preț unitar</label>
          <input
            className="form-control w-20"
            name="pricePerUnit"
            type="number"
            value={pricePerUnit}
            onChange={this.handleChange}
          />
          <br></br>
          {/* <input
            style={{ display: "none" }}
            className="form-control w-20"
            name="idDealer"
            type="text"
            value={idDealer}
            onChange={this.handleChange}
          />
          <br></br> */}
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

export default FormEditMaterial;
