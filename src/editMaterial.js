import React, { Component } from "react";
import RowEditMaterial from "./rowEditMaterial";
import FormEditMaterial from "./formEditMaterial";
import "./shadows.css";
class EditMaterial extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      name: "",
      unit: "",
      pricePerUnit: 0,
      idDealer: 0,
    };
    this.state = this.initialstate;
  }

  render() {
    const { materials, deleteMaterial, editMaterial } = this.props;

    const listMaterial = materials.map((item) => (
      <RowEditMaterial
        materials={item}
        deleteMaterial={deleteMaterial}
        editMaterial={editMaterial}
        key={item.id}
      />
    ));
    return (
      <div
        className="container bg-warning styleTable"
        style={{ display: "flex" }}
      >
        <div className="form-group col-sm-9 bg-warning ">
          <h2 className="text-center">Editarea materialelor</h2>
          <table
            className="table table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Denumirea materialului</th>
                <th scope="col">Unitatea de măsură</th>
                <th scope="col">Preț unitar</th>
                <th scope="col" colSpan="2">
                  Operații
                </th>
              </tr>
            </thead>
            <tbody>{listMaterial}</tbody>
          </table>
        </div>
        <div className="form-group col-sm-3 ">
          <FormEditMaterial
            formSubmitMaterial={this.props.formSubmitMaterial}
            matEdit={this.props.matEdit}
          />
        </div>
      </div>
    );
  }
}

export default EditMaterial;
