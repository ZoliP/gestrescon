import React, { Component } from "react";
import RowEditTool from "./rowEditTool";
import FormEditTool from "./formEditTool";
class EditTool extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      nameOfTool: "",
      manufacturer: "",
      pricePerHour: 0,
    };
    this.state = this.initialstate;
  }

  render() {
    const { tools, deleteTool, editTool } = this.props;

    const listTool = tools.map((item) => (
      <RowEditTool
        tools={item}
        deleteTool={deleteTool}
        editTool={editTool}
        key={item.id}
      />
    ));
    return (
      <div
        className="container bg-danger styleTable"
        style={{ display: "flex" }}
      >
        <div className="form-group col-sm-9 bg-danger ">
          <h2 className="text-center">Modificare date utilaj</h2>
          <table
            className="table table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Denumire utilaj</th>
                <th scope="col">Producător</th>
                <th scope="col">Tarif orar</th>
                <th scope="col" colSpan="2">
                  Operații
                </th>
              </tr>
            </thead>
            <tbody>{listTool}</tbody>
          </table>
        </div>
        <div className="form-group col-sm-3 ">
          <FormEditTool
            formSubmitTool={this.props.formSubmitTool}
            toolEdit={this.props.toolEdit}
          />
        </div>
      </div>
    );
  }
}

export default EditTool;
