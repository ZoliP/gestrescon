import React, { Component } from "react";
import RowEditTransport from "./rowEditTransport";
import FormEditTransport from "./formEditTransport";
class EditTransport extends Component {
  constructor(props) {
    super(props);
    this.initialstate = {
      id: 0,
      nameOfMaterial: "",
      value: 0,
    };
    this.state = this.initialstate;
  }

  render() {
    const { transports, deleteTransport, editTransport } = this.props;

    const listTransport = transports.map((item) => (
      <RowEditTransport
        transports={item}
        deleteTransport={deleteTransport}
        editTransport={editTransport}
        key={item.id}
      />
    ));
    return (
      <div
        className="container bg-light styleTable"
        style={{ display: "flex" }}
      >
        <div className="form-group col-sm-9 bg-light ">
          <h2 className="text-center">Modificare date transport</h2>
          <table
            className="table table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Denumire material transportat</th>
                <th scope="col">Valoare</th>
                <th scope="col" colSpan="2">
                  Operații
                </th>
              </tr>
            </thead>
            <tbody>{listTransport}</tbody>
          </table>
        </div>
        <div className="form-group col-sm-3 ">
          <FormEditTransport
            formSubmitTransport={this.props.formSubmitTransport}
            transportEdit={this.props.transportEdit}
          />
        </div>
      </div>
    );
  }
}

export default EditTransport;
