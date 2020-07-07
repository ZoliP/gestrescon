import React, { Component } from "react";
import RowJob from "./rowJob";
import "./shadows.css";
class TableJobs extends Component {
  render() {
    const jobList = this.props.jobs.map((item) => (
      <RowJob key={item.id} id={item.id} name={item.name} />
    ));
    return (
      <div className="container w-75 bg-info styleTable">
        <h2 className="text-center">Lista funcțiilor</h2>
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Funcția</th>
            </tr>
          </thead>
          <tbody>{jobList}</tbody>
        </table>
      </div>
    );
  }
}

export default TableJobs;
