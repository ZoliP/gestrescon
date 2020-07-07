import React, { Component } from "react";
import "./shadows.css";
class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const idSite = ev.target.value;
    console.log(`idSite:`, idSite);
    this.props.refreshResourceMaterial(idSite).then((matList) => {
      const listaMat = matList.map((mat) => (
        <tr key={mat.id}>
          <td>{mat.name}</td>
          <td>{mat.quantity}</td>
          <td>{mat.unit}</td>
          <td>{mat.value}</td>
        </tr>
      ));
      this.setState({ listaMat });
    });
    this.props.refreshResourceEmployee(idSite).then((manList) => {
      const listaMan = manList.map((man) => (
        <tr key={man.id}>
          <td>
            {man.firstName} {man.lastName}
          </td>
          <td>{man.pricePerHour}</td>
          <td>{man.value}</td>
        </tr>
      ));
      this.setState({ listaMan });
    });
    this.props.refreshResourceTool(idSite).then((utList) => {
      const listaUt = utList.map((ut) => (
        <tr key={ut.id}>
          <td>{ut.nameOfTool}</td>
          <td>{ut.pricePerHour}</td>
          <td>{ut.value}</td>
        </tr>
      ));
      this.setState({ listaUt });
    });
    this.props.refreshResourceTransport(idSite).then((trList) => {
      const listaTr = trList.map((tr) => (
        <tr key={tr.id}>
          <td>{tr.nameOfMaterial}</td>
          <td>{tr.value}</td>
        </tr>
      ));
      this.setState({ listaTr });
    });
  }

  render() {
    const cardStyle = {
      width: "28rem",
      display: "inline-flex",
      boxShadow: "10px 10px 18px #333333",
      margin: "10px",
    };
    const sites = this.props.sites.map((site) => {
      return (
        <option key={site.id} value={site.id}>
          {site.name}
        </option>
      );
    });

    return (
      <div className="container w-75 bg-light styleTable">
        <form className=" container w-50">
          <label>Alegeți șantierul</label>
          <select
            id="idSites"
            className="form-control"
            name="idSite"
            type="number"
            value={this.props.idSite}
            onChange={this.handleChange}
          >
            <option value></option>
            {sites}
          </select>
          <br></br>
        </form>

        <div className="cards card bg-light " style={cardStyle}>
          <img
            className="card-img-top"
            src="/images/materiale.jpg"
            alt="materiale.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text text-dark">
              <strong>Materiale alocate:</strong>
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Denumire</th>
                <th>Cantitate</th>
                <th>U.M.</th>
                <th>Valoare</th>
              </tr>
            </thead>
            <tbody>{this.state.listaMat}</tbody>
          </table>
          <div style={{ margin: "auto" }}></div>
        </div>

        <div className="cards card bg-light " style={cardStyle}>
          <img
            className="card-img-top"
            src="/images/manopera.jpg"
            alt="manopera.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text text-dark">
              <strong>Fortă de muncă alocate:</strong>
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nume Prenume</th>
                <th>Tarif orar</th>
                <th>Valoare</th>
              </tr>
            </thead>
            <tbody>{this.state.listaMan}</tbody>
          </table>
          <div style={{ margin: "auto" }}></div>
        </div>

        <div className="cards card bg-light " style={cardStyle}>
          <img
            className="card-img-top"
            src="/images/utilaje.jpg"
            alt="utilaje.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text text-dark">
              <strong>Utilaje alocate:</strong>
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Denumirea utilajului</th>
                <th>Tarif orar</th>
                <th>Valoare</th>
              </tr>
            </thead>
            <tbody>{this.state.listaUt}</tbody>
          </table>
          <div style={{ margin: "auto" }}></div>
        </div>

        <div className="cards card bg-light " style={cardStyle}>
          <img
            className="card-img-top"
            src="/images/transport.jpg"
            alt="transport.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text text-dark">
              <strong>Transporturi alocate:</strong>
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Denumire</th>
                <th>Valoare</th>
              </tr>
            </thead>
            <tbody>{this.state.listaTr}</tbody>
          </table>
          <div style={{ margin: "auto" }}></div>
        </div>
      </div>
    );
  }
}

export default Resources;
