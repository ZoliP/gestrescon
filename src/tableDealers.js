import React, { Component } from "react";
import RowDealer from "./rowDealer";
import "./shadows.css";
class TableDealers extends Component {
  render() {
    const dealerList = this.props.dealers.map((item) => (
      <RowDealer
        key={item.id}
        id={item.id}
        name={item.name}
        address={item.address}
        phone={item.phone}
        email={item.email}
      />
    ));
    return (
      <div className="container w-75 bg-warning styleTable">
        <h2 className="text-center">Lista furnizorilor</h2>
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Denumirea</th>
              <th scope="col">Adresa</th>
              <th scope="col">Telefon</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>{dealerList}</tbody>
        </table>
      </div>
    );
  }
}

export default TableDealers;
