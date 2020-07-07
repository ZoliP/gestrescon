import React, { Component } from "react";
import RowTool from "./rowTool";
import "./shadows.css";
class TableTools extends Component {
  render() {
    const toolList = this.props.tools.map((item) => (
      <RowTool
        key={item.id}
        id={item.id}
        nameOfTool={item.nameOfTool}
        manufacturer={item.manufacturer}
        pricePerHour={item.pricePerHour}
      />
    ));
    return (
      <div className="container w-75 bg-danger styleTable">
        <h2 className="text-center">Lista utilajelor/sculelor</h2>
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Denumirea sculei/utilajului</th>
              <th scope="col">Producător</th>
              <th scope="col">Tarif orar</th>
            </tr>
          </thead>
          <tbody>{toolList}</tbody>
        </table>
      </div>
    );
  }
}

export default TableTools;
