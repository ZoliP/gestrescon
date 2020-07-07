import React, { Component } from "react";
import RowMaterial from "./rowMaterial";
import "./shadows.css";
class TableMaterials extends Component {
  render() {
    const materialList = this.props.materials.map((material) => {
      // const dealer = this.props.dealers.find(
      //   (dealer) => dealer.id === parseInt(material.idDealer)
      // );
      return (
        <RowMaterial
          id={material.id}
          name={material.materialName}
          unit={material.unit}
          pricePerUnit={material.pricePerUnit}
          idDealer={material.dealerName} //{dealer.name}
          key={material.id}
        />
      );
    });
    console.log(`listamat:`, materialList);
    return (
      <div className="container w-75 bg-warning styleTable">
        <h2 className="text-center">Lista materialelor în baza de date</h2>
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Denumirea materialului</th>
              <th scope="col">Unitatea de măsură</th>
              <th scope="col">Preț unitar</th>
              <th scope="col">Furnizor</th>
            </tr>
          </thead>
          <tbody>{materialList}</tbody>
        </table>
      </div>
    );
  }
}

export default TableMaterials;
