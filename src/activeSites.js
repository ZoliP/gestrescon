import React, { Component } from "react";
import CardSite from "./cardSite";

class AllSites extends Component {
  render() {
    let today = new Date();
    let date =
      today.getDate() +
      "/" +
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getFullYear();

    const list = this.props.sites
      .filter((site) => {
        return site.status === "activ";
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
        <h2 className="text-center">
          Lista șantierelor active la data de {date}
        </h2>
        {list}
      </div>
    );
  }
}

export default AllSites;
