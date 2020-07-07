import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseDamage,
  faHome,
  faPaintRoller,
  faHardHat,
  faHammer,
  faTruckPickup,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faHome} />
          Home
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faHouseDamage} />
                Șantiere
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/allSites">
                  Lista șantierelor
                </a>
                <a className="dropdown-item" href="/formAddSite">
                  Adăugare șantier nou
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faPaintRoller} />
                Materiale
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/materials">
                  Lista materialelor în baza de date
                </a>
                <a className="dropdown-item" href="/formAddMaterial">
                  Adăugare material nou
                </a>
                <a className="dropdown-item" href="/editMaterial">
                  Editare material existent
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/dealers">
                  Lista furnizorilor
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faHardHat} />
                Forță de muncă
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/employees">
                  Lista angajaților
                </a>
                <a className="dropdown-item" href="/formAddEmployee">
                  Adăugare angajat nou
                </a>
                <a className="dropdown-item" href="/editEmployee">
                  Editare date angajat
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/jobs">
                  Lista funcțiilor
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faHammer} />
                Utilaje
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/tools">
                  Lista utilajelor
                </a>
                <a className="dropdown-item" href="/formAddTool">
                  Adăugare utilaj nou
                </a>
                <a className="dropdown-item" href="editTool">
                  Modificare date utilaj
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faTruckPickup} />
                Transporturi
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/transports">
                  Lista transporturilor de materiale
                </a>
                <a className="dropdown-item" href="/formAddTransport">
                  Adăugare transport nou
                </a>
                <a className="dropdown-item" href="/editTransport">
                  Modificare date transport
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faExchangeAlt} />
                <b>Gestionare</b>
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/formManagementMaterial">
                  Alocare Materiale
                </a>
                <a className="dropdown-item" href="/formManagementEmployee">
                  Alocare forță de muncă
                </a>
                <a className="dropdown-item" href="/formManagementTool">
                  Alocare utilaje
                </a>
                <a className="dropdown-item" href="/formManagementTransport">
                  Alocare transporturi
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/resources">
                  Vizualizarea resurselor șantierelor
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
