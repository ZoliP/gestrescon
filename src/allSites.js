import React, { Component } from "react";
import CardSite from "./cardSite";

class AllSites extends Component {
  render() {
    const list = this.props.sites
      .sort((a, b) => {
        var statusA = a.status;
        var statusB = b.status;
        if (statusA < statusB) return -1;
        else return 1;
      })
      .map((item) => (
        <CardSite
          key={item.id}
          id={item.id}
          name={item.name}
          investor={item.investor}
          address={item.address}
          designer={item.designer}
          picture={item.picture}
          info={item.info}
          status={item.status}
        />
      ));

    return (
      <div>
        <h2 className="text-center">Lista șantierelor</h2>
        {list}
      </div>
    );
  }
}

export default AllSites;
