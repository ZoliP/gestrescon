import React, { Component } from "react";
import RowTransport from "./rowTransport";
import "./shadows.css";
class TableTransports extends Component {
  render() {
    const transportList = this.props.transports.map((item) => (
      <RowTransport
        key={item.id}
        id={item.id}
        nameOfMaterial={item.nameOfMaterial}
        value={item.value}
      />
    ));
    return (
      <div className="container w-75 bg-light styleTable">
        <h2 className="text-center">Lista transporturilor</h2>
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Denumirea materialului transportat</th>
              <th scope="col">Valoare</th>
            </tr>
          </thead>
          <tbody>{transportList}</tbody>
        </table>
      </div>
    );
  }
}

export default TableTransports;
