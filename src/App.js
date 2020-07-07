import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";
import AllSites from "./allSites";
import ActiveSites from "./activeSites";
import FormManagementMaterial from "./formManagementMaterial";
import FormManagementEmployee from "./formManagementEmployee";
import FormManagementTool from "./formManagementTool";
import FormManagementTransport from "./formManagementTransport";
import Resources from "./resources";
import TableMaterials from "./tableMaterials";
import TableDealers from "./tableDealers";
import TableEmployees from "./tableEmployees";
import TableJobs from "./tableJobs";
import TableTools from "./tableTools";
import TableTransports from "./tableTransport";
import FormAddSite from "./formAddSite";
import FormAddMaterial from "./formAddMaterial";
import FormAddEmployee from "./formAddEmployee";
import FormAddTool from "./formAddTool";
import FormAddTransport from "./formAddTransport";
import EditMaterial from "./editMaterial";
import EditEmployee from "./editEmployee";
import EditTool from "./editTool";
import EditTransport from "./editTransport";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [
        // {id: 1, name: "Izolare fațadă", investor: "Mircea Novac", address: "Cluj-Napoca", designer: "Proiectantul SRL",
        //   picture: "/images/izolare_fatada.jpg",
        //   info: `Prin acest proiect s-a dorit reabilitarea termică a fațadei
        //         construcției prin aplicarea izolației termice din vată minerală
        //         bazaltică.`, status: "activ" },
        // {id: 2, name: "Construire pensiune agroturistică", investor: "Ovidiu Mircea", address: "Cluj-Napoca",
        //   designer: "Arhitectul SRL", picture: "/images/construire_pensiune_agroturistica.jpg",
        //   info: `Beneficiarul proiectului a dorit repararea cladirii vechi
        //          și construirea unui corp nou având funcția de cazare a oaspeților.`, status: "activ"},
        // {id: 3, name: "Reparatii acoperis si invelitoare", investor: "Biserica Evanghelica", address: "Targu Mures",
        //   designer: "Restauratorul SRL", picture: "/images/reparatii_invelitoare.jpg",
        //   info: `Prin acest proiect s-a realizat reparația învelitorii din țiglă ceramică tip solzi
        //         și schimbarea șipcilor.`, status: "inactiv"},
        // {id: 4, name: "Reparatii sarpanta si invelitoare la turn", investor: "Turnul SRL", address: "Sighișioara",
        //   designer: "Restauratorul SRL", picture: "/images/reparatii_sarpanta.jpg",
        //   info: `S-a realizat înlocuirea elementelor structurale degradate și reparația învelitorii din
        //         țiglă ceramică tip solzi respectiv schimbarea șipcilor.`, status: "activ"},
      ],
      siteEdit: {
        id: 0,
        name: "",
        investor: "",
        address: "",
        designer: "",
        picture: "",
        info: "",
        status: "",
      },
      keySite: 0,

      materials: [
        //{id: 1, name: "balast", unit: "mc", pricePerUnit: 45, idDealer: 3},
        //{id: 2, name: "caramida Porotherm", unit: "buc", pricePerUnit: 12, idDealer: 1},
        //{id: 3, name: "ciment", unit: "kg", pricePerUnit: 1, idDealer: 3},
        //{id: 4, name: "cuie", unit: "kg", pricePerUnit: 6, idDealer: 1},
        //{id: 5, name: "fier beton", unit: "kg", pricePerUnit: 3, idDealer: 1},
      ],
      matEdit: {
        id: 0,
        materialName: "", //changed in query in php script from name to materialName
        unit: "",
        pricePerUnit: 0,
        idDealer: 0,
      },
      keyMat: 0,

      dealers: [
        //{id: 1, name: "Dedeman", address: "Cluj-Napoca", phone: "0264123456", email: "office@dedeman.ro"},
        //{id: 2, name: "Romstal", address: "Cluj-Napoca", phone: "0264111222", email: "office@romstal.ro"},
        //{id: 3, name: "Ambient", address: "Targu-Mures", phone: "0265222333", email: "office@ambient.ro"},
      ],

      employees: [
        // {id: 1, firstName: "Constantin", lastName: "Avram", idJob: 2, pricePerHour: 25},
        // {id: 2, firstName: "Demetrescu", lastName: "Daniel",idJob: 6, pricePerHour: 25},
        // {id: 3, firstName: "Kadar", lastName: "Bela", idJob: 5, pricePerHour: 20},
      ],
      manEdit: {
        id: 0,
        firstName: "",
        lastName: "",
        idJob: 0,
        pricePerHour: 0,
      },
      keyMan: 0,

      jobs: [
        // {id: 1, name: "zidar"},
        // {id: 2, name: "dulgher"},
        // {id: 3, name: "fierar"},
        // {id: 4, name: "rigipsar"},
        // {id: 5, name: "muncitor necalificat"},
        // {id: 6, name: "finisor"},
      ],

      tools: [
        // {id: 1, nameOfTool: "buldoexcavator", manufacturer: "Caterpillar", pricePerHour: 150},
        // {id: 2, nameOfTool: "Rotoperutor", manufacturer: "Makita", pricePerHour: 30},
        // {id: 3, nameOfTool: "betoniera", manufacturer: "Imer", pricePerHour: 50},
      ],
      toolEdit: {
        id: 0,
        nameOfTool: "",
        manufacturer: "",
        pricePerHour: 0,
      },
      keyUt: 0,

      transports: [
        // {id: 1, nameOfMaterial: "material lemnos", value: 1000},
        // {id: 2, nameOfMaterial: "balast 7 mc", value: 500},
        // {id: 3, nameOfMaterial: "var pasta 40 saci", value: 400},
      ],
      transportEdit: {
        id: 0,
        nameOfMaterial: "",
        value: 0,
      },
      keyTr: 0,

      move_materials: [
        // {id: 1,idSite: 2,idMaterial: 1,quantity: 5,value: 225,date: "2020-01-20"},
        // {id: 2,idSite: 2,idMaterial: 12,quantity: 10,value: 500,date: "2020-01-20"},
        // {id: 3,idSite: 2,idMaterial: 2,quantity: 100,value: 1200,date: "2020-01-20"},
        // {id: 4,idSite: 2,idMaterial: 3,quantity: 400,value: 400,date: "2020-01-20"},
        // {id: 5,idSite: 1,idMaterial: 1,quantity: 7,value: 315,date: "2020-01-27"},
      ],
      assMatEdit: {
        id: 0,
        idSite: 0,
        idMaterial: 0,
        quantity: 0,
        value: 0,
        date: "",
      },
      keyAssMat: 0,

      move_employees: [
        // {id: 1,idSite: 2,idEmployee: 1,startDate: "2020-01-20",endDate: "2020-01-31",value: 2500},
        // {id: 2,idSite: 2,idEmployee: 2,startDate: "2020-01-20",endDate: "2020-01-31",value: 2500},
        // {id: 3,idSite: 2,idEmployee: 3,startDate: "2020-01-20",endDate: "2020-01-31",value: 2300},
        // {id: 4,idSite: 2,idEmployee: 4,startDate: "2020-01-20",endDate: "2020-01-31",value: 2000},
        // {id: 5,idSite: 1,idEmployee: 5,startDate: "2020-01-27",endDate: "2020-01-31",value: 1250},
        // {id: 6,idSite: 1,idEmployee: 6,startDate: "2020-01-27",endDate: "2020-01-31",value: 1250},
      ],
      assManEdit: {
        id: 0,
        idSite: 0,
        idEmployee: 0,
        startDate: "",
        endDate: "",
        value: 0,
      },
      keyAssMan: 0,

      move_tools: [
        // {id: 1,idSite: 2,idTools: 3,startDate: "2020-01-20",endDate: "2020-01-31",value: 500},
        // {id: 2,idSite: 2,idTools: 1,startDate: "2020-01-22",endDate: "2020-01-31",value: 1200},
        // {id: 3,idSite: 1,idTools: 3,startDate: "2020-01-29",endDate: "2020-01-31",value: 150},
        // {id: 4,idSite: 1,idTools: 4,startDate: "2020-01-29",endDate: "2020-01-31",value: 450},
      ],
      assUtEdit: {
        id: 0,
        idSite: 0,
        idTool: 0,
        startDate: "",
        endDate: "",
        value: 0,
      },
      keyAssUt: 0,

      move_transports: [
        // {id: 1,idSite: 2,idTransport: 2,date: "2020-01-20",value: 500},
        // {id: 2,idSite: 2,idTransport: 4,date: "2020-01-20",value: 1000},
        // {id: 3,idSite: 1,idTransport: 1,date: "2020-01-28",value: 1000},
        // {id: 4,idSite: 1,idTransport: 5,date: "2020-01-29",value: 1000},
      ],
      assTrEdit: {
        id: 0,
        idSite: 0,
        idTransport: 0,
        date: "",
        value: 0,
      },
      keyAssTr: 0,
    };

    this.assignNewMaterial = this.assignNewMaterial.bind(this);
    this.assignNewEmployee = this.assignNewEmployee.bind(this);
    this.assignNewTool = this.assignNewTool.bind(this);
    this.assignNewTransport = this.assignNewTransport.bind(this);

    this.addNewSite = this.addNewSite.bind(this);
    this.addNewMaterial = this.addNewMaterial.bind(this);
    this.addNewEmployee = this.addNewEmployee.bind(this);
    this.addNewTool = this.addNewTool.bind(this);
    this.addNewTransport = this.addNewTransport.bind(this);

    this.deleteMaterial = this.deleteMaterial.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.deleteTool = this.deleteTool.bind(this);
    this.deleteTransport = this.deleteTransport.bind(this);

    this.editMaterial = this.editMaterial.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.editTool = this.editTool.bind(this);
    this.editTransport = this.editTransport.bind(this);

    this.formSubmitMaterial = this.formSubmitMaterial.bind(this);
    this.formSubmitEmployee = this.formSubmitEmployee.bind(this);
    this.formSubmitTool = this.formSubmitTool.bind(this);
    this.formSubmitTransport = this.formSubmitTransport.bind(this);

    this.refreshSites = this.refreshSites.bind(this);
    this.refreshMaterial = this.refreshMaterial.bind(this);
    this.refreshDealer = this.refreshDealer.bind(this);
    this.refreshEmployee = this.refreshEmployee.bind(this);
    this.refreshJob = this.refreshJob.bind(this);
    this.refreshTool = this.refreshTool.bind(this);
    this.refreshTransport = this.refreshTransport.bind(this);

    this.refreshAssMaterial = this.refreshAssMaterial.bind(this);
    this.refreshAssEmployee = this.refreshAssEmployee.bind(this);
    this.refreshAssTool = this.refreshAssTool.bind(this);
    this.refreshAssTransport = this.refreshAssTransport.bind(this);

    this.refreshResourceMaterial = this.refreshResourceMaterial.bind(this);
    this.refreshResourceEmployee = this.refreshResourceEmployee.bind(this);
    this.refreshResourceTool = this.refreshResourceTool.bind(this);
    this.refreshResourceTransport = this.refreshResourceTransport.bind(this);
  }

  refreshSites() {
    return fetch("http://localhost/gestresconDB/api/sites.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshMaterial() {
    return fetch("http://localhost/gestresconDB/api/materials.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshDealer() {
    return fetch("http://localhost/gestresconDB/api/dealers.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshEmployee() {
    return fetch("http://localhost/gestresconDB/api/employees.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshJob() {
    return fetch("http://localhost/gestresconDB/api/jobs.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshTool() {
    return fetch("http://localhost/gestresconDB/api/tools.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshTransport() {
    return fetch("http://localhost/gestresconDB/api/transports.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }

  refreshAssMaterial() {
    return fetch("http://localhost/gestresconDB/api/assignMaterials.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshAssEmployee() {
    return fetch("http://localhost/gestresconDB/api/assignEmployees.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshAssTool() {
    return fetch("http://localhost/gestresconDB/api/assignTools.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshAssTransport() {
    return fetch("http://localhost/gestresconDB/api/assignTransports.php")
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }

  refreshResourceMaterial(idSite) {
    return fetch(
      `http://localhost/gestresconDB/api/resourcesMaterials.php?idSite=${idSite}`
    )
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshResourceEmployee(idSite) {
    return fetch(
      `http://localhost/gestresconDB/api/resourcesEmployees.php?idSite=${idSite}`
    )
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshResourceTool(idSite) {
    return fetch(
      `http://localhost/gestresconDB/api/resourcesTools.php?idSite=${idSite}`
    )
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }
  refreshResourceTransport(idSite) {
    return fetch(
      `http://localhost/gestresconDB/api/resourcesTransports.php?idSite=${idSite}`
    )
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.log("Request failed", error));
  }

  componentDidMount() {
    this.refreshSites().then((siteList) => {
      this.setState({ sites: siteList });
    });
    this.refreshMaterial().then((matList) => {
      this.setState({ materials: matList });
    });
    this.refreshDealer().then((dealList) => {
      this.setState({ dealers: dealList });
    });
    this.refreshEmployee().then((manList) => {
      this.setState({ employees: manList });
    });
    this.refreshJob().then((jobList) => {
      this.setState({ jobs: jobList });
    });
    this.refreshTool().then((utList) => {
      this.setState({ tools: utList });
    });
    this.refreshTransport().then((trList) => {
      this.setState({ transports: trList });
    });

    this.refreshAssMaterial().then((assMatList) => {
      this.setState({ move_materials: assMatList });
    });
    this.refreshAssEmployee().then((assManList) => {
      this.setState({ move_employees: assManList });
    });
    this.refreshAssTool().then((assUtList) => {
      this.setState({ move_tools: assUtList });
    });
    this.refreshAssTransport().then((assTrList) => {
      this.setState({ move_transports: assTrList });
    });

    this.refreshResourceMaterial().then((resMatList) => {
      this.setState({ move_materials: resMatList });
    });
    this.refreshResourceEmployee().then((resManList) => {
      this.setState({ move_employees: resManList });
    });
    this.refreshResourceTool().then((resUtList) => {
      this.setState({ move_tools: resUtList });
    });
    this.refreshResourceTransport().then((resTrList) => {
      this.setState({ move_transports: resTrList });
    });
  }

  addNewSite(newSite) {
    const dateScript = JSON.stringify(newSite);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/sites.php";
    if (parseInt(newSite.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshSites().then((siteList) => {
            this.setState({
              sites: siteList,
              siteEdit: {
                id: 0,
                name: "",
                investor: "",
                address: "",
                designer: "",
                picture: "",
                info: "",
                status: "",
              },
              keySite: ident,
            });
          });
        });
    }
  }
  addNewMaterial(newMaterial) {
    const dateScript = JSON.stringify(newMaterial);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/materials.php";
    if (parseInt(newMaterial.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshMaterial().then((materialList) => {
            this.setState({
              materials: materialList,
              matEdit: {
                id: 0,
                materialName: "",
                unit: "",
                pricePerUnit: 0,
                idDealer: 0,
              },
              keyMat: ident,
            });
          });
        });
    }
  }
  addNewEmployee(newEmployee) {
    const dateScript = JSON.stringify(newEmployee);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/employees.php";
    if (parseInt(newEmployee.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshEmployee().then((employeeList) => {
            this.setState({
              employees: employeeList,
              manEdit: {
                id: 0,
                firstName: "",
                lastName: "",
                idJob: 0,
                pricePerHour: 0,
              },
              keyMan: ident,
            });
          });
        });
    }
  }
  addNewTool(newTool) {
    const dateScript = JSON.stringify(newTool);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/tools.php";
    if (parseInt(newTool.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshTool().then((toolList) => {
            this.setState({
              tools: toolList,
              toolEdit: {
                id: 0,
                nameOfTool: "",
                manufacturer: "",
                pricePerHour: 0,
              },
              keyUt: ident,
            });
          });
        });
    }
  }
  addNewTransport(newTransport) {
    const dateScript = JSON.stringify(newTransport);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/transports.php";
    if (parseInt(newTransport.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshTransport().then((transportList) => {
            this.setState({
              transports: transportList,
              transportEdit: {
                id: 0,
                nameOfMaterial: "",
                value: 0,
              },
              keyTr: ident,
            });
          });
        });
    }
  }

  deleteMaterial(ev) {
    const dateScript = JSON.stringify({ id: parseInt(ev.target.id) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    fetch("http://localhost/gestresconDB/api/materials.php", config)
      .then(this.refreshMaterial) //  this.refreshMaterial returns the decoded (from JSON) list
      .then((matList) => this.setState({ materials: matList }));
  }
  deleteEmployee(ev) {
    const dateScript = JSON.stringify({ id: parseInt(ev.target.id) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    fetch("http://localhost/gestresconDB/api/employees.php", config)
      .then(this.refreshEmployee) //  this.refreshEmployee returns the decoded (from JSON) list
      .then((manList) => this.setState({ employees: manList }));
  }
  deleteTool(ev) {
    const dateScript = JSON.stringify({ id: parseInt(ev.target.id) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    fetch("http://localhost/gestresconDB/api/tools.php", config)
      .then(this.refreshTool) //  this.refreshTool returns the decoded (from JSON) list
      .then((utList) => this.setState({ tools: utList }));
  }
  deleteTransport(ev) {
    const dateScript = JSON.stringify({ id: parseInt(ev.target.id) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    fetch("http://localhost/gestresconDB/api/transports.php", config)
      .then(this.refreshTransport) //  this.refreshTransport returns the decoded (from JSON) list
      .then((trList) => this.setState({ transports: trList }));
  }

  editMaterial(ev) {
    const idEdit = parseInt(ev.target.id);
    console.log(`id edit material ${idEdit}`);
    const listMaterial = this.state.materials;
    const editMat = listMaterial.find((item) => {
      return parseInt(item.id) === idEdit;
    });
    console.log(`name edit material ${editMat.materialName}`);
    this.setState({
      //materials: listMaterial,
      matEdit: editMat,
      key: idEdit,
    });
  }
  editEmployee(ev) {
    const idEdit = parseInt(ev.target.id);
    console.log(`id edit employee ${idEdit}`);
    const listEmployee = this.state.employees;
    const editMan = listEmployee.find((item) => {
      return parseInt(item.id) === idEdit;
    });
    console.log(`name edit employee ${editMan.firstName}`);
    this.setState({
      //employees: listEmployee,
      manEdit: editMan,
      key: idEdit,
    });
  }
  editTool(ev) {
    const idEdit = parseInt(ev.target.id);
    console.log(`id edit employee ${idEdit}`);
    const listTool = this.state.tools;
    const editTool = listTool.find((item) => {
      return parseInt(item.id) === idEdit;
    });
    console.log(`name edit tool ${editTool.nameOfTool}`);
    this.setState({
      //tools: listTool,
      toolEdit: editTool,
      key: idEdit,
    });
  }
  editTransport(ev) {
    const idEdit = parseInt(ev.target.id);
    console.log(`id edit employee ${idEdit}`);
    const listTransport = this.state.transports;
    const editTransport = listTransport.find((item) => {
      return parseInt(item.id) === idEdit;
    });
    console.log(`name edit transport ${editTransport.nameOfMaterial}`);
    this.setState({
      //transports: listTransport,
      transportEdit: editTransport,
      key: idEdit,
    });
  }

  formSubmitMaterial(submitedMaterial) {
    const dateScript = JSON.stringify(submitedMaterial);
    let config = {
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/materials.php";
    if (submitedMaterial.id !== 0) {
      config.method = "PUT";
      fetch(url, config)
        .then((result) => {
          console.log(result);
          return result.json();
        })
        .then(() => {
          this.refreshMaterial().then((updatedMaterials) => {
            this.setState({
              materials: updatedMaterials,
              matEdit: {
                id: 0,
                materialName: "",
                unit: "",
                pricePerUnit: 0,
                idDealer: 0,
              },
              keyMat: 0,
            });
          });
        });
    }
  }
  formSubmitEmployee(submitedEmployee) {
    const dateScript = JSON.stringify(submitedEmployee);
    let config = {
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/employees.php";
    if (submitedEmployee.id !== 0) {
      config.method = "PUT";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then(() => {
          this.refreshEmployee().then((updatedEmployees) => {
            this.setState({
              employees: updatedEmployees,
              manEdit: {
                id: 0,
                firstName: "",
                lastName: "",
                idJob: 0,
                pricePerHour: 0,
              },
              keyMan: 0,
            });
          });
        });
    }
  }
  formSubmitTool(submitedTool) {
    const dateScript = JSON.stringify(submitedTool);
    let config = {
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/tools.php";
    if (submitedTool.id !== 0) {
      config.method = "PUT";
      fetch(url, config)
        .then((result) => {
          console.log(result);
          return result.json();
        })
        .then(() => {
          this.refreshTool().then((updatedTools) => {
            this.setState({
              tools: updatedTools,
              toolEdit: {
                id: 0,
                nameOfTool: "",
                manufacturer: "",
                pricePerHour: 0,
              },
              keyUt: 0,
            });
          });
        });
    }
  }
  formSubmitTransport(submitedTransport) {
    const dateScript = JSON.stringify(submitedTransport);
    let config = {
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/transports.php";
    if (submitedTransport.id !== 0) {
      config.method = "PUT";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then(() => {
          this.refreshTransport().then((updatedTransports) => {
            this.setState({
              transports: updatedTransports,
              transportEdit: {
                id: 0,
                nameOfMaterial: "",
                value: 0,
              },
              keyTr: 0,
            });
          });
        });
    }
  }

  assignNewMaterial(material) {
    const dateScript = JSON.stringify(material);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/assignMaterials.php";
    if (parseInt(material.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshAssMaterial().then((assignMatList) => {
            this.setState({
              move_materials: assignMatList,
              assMatEdit: {
                id: 0,
                idSite: 0,
                idMaterial: 0,
                quantity: 0,
                value: 0,
                date: "",
              },
              keyAssMat: ident,
            });
          });
        });
    }
  }
  assignNewEmployee(employee) {
    const dateScript = JSON.stringify(employee);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/assignEmployees.php";
    if (parseInt(employee.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshAssEmployee().then((assignManList) => {
            this.setState({
              move_employees: assignManList,
              assManEdit: {
                id: 0,
                idSite: 0,
                idEmployee: 0,
                startDate: "",
                endDate: "",
                value: 0,
              },
              keyAssMan: ident,
            });
          });
        });
    }
  }
  assignNewTool(tool) {
    const dateScript = JSON.stringify(tool);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/assignTools.php";
    if (parseInt(tool.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshAssTool().then((assignUtList) => {
            this.setState({
              move_tools: assignUtList,
              assUtEdit: {
                id: 0,
                idSite: 0,
                idTool: 0,
                startDate: "",
                endDate: "",
                value: 0,
              },
              keyAssUt: ident,
            });
          });
        });
    }
  }
  assignNewTransport(transport) {
    const dateScript = JSON.stringify(transport);
    let config = {
      headers: { "Content-type": "application/json" },
      body: dateScript,
    };
    const url = "http://localhost/gestresconDB/api/assignTransports.php";
    if (parseInt(transport.id) === 0) {
      config.method = "POST";
      fetch(url, config)
        .then((result) => {
          return result.json();
        })
        .then((feedback) => {
          return feedback[1].id;
        })
        .then((ident) => {
          this.refreshAssTransport().then((assignTrList) => {
            this.setState({
              move_transports: assignTrList,
              assTrEdit: {
                id: 0,
                idSite: 0,
                idTransport: 0,
                date: "",
                value: 0,
              },
              keyAssTr: ident,
            });
          });
        });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ActiveSites {...props} sites={this.state.sites} />
            )}
          />
          <Route
            path="/allSites"
            render={(props) => (
              <AllSites
                {...props}
                sites={this.state.sites}
                siteEdit={this.state.siteEdit}
              />
            )}
          />
          <Route
            path="/formAddSite"
            render={(props) => (
              <FormAddSite
                {...props}
                sites={this.state.sites}
                addNewSite={this.addNewSite}
              />
            )}
          />
          <Route
            path="/materials"
            render={(props) => (
              <TableMaterials
                {...props}
                materials={this.state.materials}
                dealers={this.state.dealers}
              />
            )}
          />
          <Route
            path="/formAddMaterial"
            render={(props) => (
              <FormAddMaterial
                {...props}
                matEdit={this.state.matEdit}
                materials={this.state.materials}
                dealers={this.state.dealers}
                addNewMaterial={this.addNewMaterial}
              />
            )}
          />
          <Route
            path="/editMaterial"
            render={(props) => (
              <EditMaterial
                {...props}
                matEdit={this.state.matEdit}
                materials={this.state.materials}
                dealers={this.state.dealers}
                deleteMaterial={this.deleteMaterial}
                editMaterial={this.editMaterial}
                formSubmitMaterial={this.formSubmitMaterial}
              />
            )}
          />
          <Route
            path="/dealers"
            render={(props) => (
              <TableDealers {...props} dealers={this.state.dealers} />
            )}
          />
          <Route
            path="/employees"
            render={(props) => (
              <TableEmployees
                {...props}
                employees={this.state.employees}
                jobs={this.state.jobs}
              />
            )}
          />
          <Route
            path="/formAddEmployee"
            render={(props) => (
              <FormAddEmployee
                {...props}
                employees={this.state.employees}
                jobs={this.state.jobs}
                manEdit={this.state.manEdit}
                addNewEmployee={this.addNewEmployee}
              />
            )}
          />
          <Route
            path="/editEmployee"
            render={(props) => (
              <EditEmployee
                {...props}
                manEdit={this.state.manEdit}
                employees={this.state.employees}
                jobs={this.state.jobs}
                deleteEmployee={this.deleteEmployee}
                editEmployee={this.editEmployee}
                formSubmitEmployee={this.formSubmitEmployee}
              />
            )}
          />
          <Route
            path="/jobs"
            render={(props) => <TableJobs {...props} jobs={this.state.jobs} />}
          />
          <Route
            path="/tools"
            render={(props) => (
              <TableTools {...props} tools={this.state.tools} />
            )}
          />
          <Route
            path="/formAddTool"
            render={(props) => (
              <FormAddTool
                {...props}
                tools={this.state.tools}
                toolEdit={this.state.toolEdit}
                addNewTool={this.addNewTool}
              />
            )}
          />
          <Route
            path="/editTool"
            render={(props) => (
              <EditTool
                {...props}
                toolEdit={this.state.toolEdit}
                tools={this.state.tools}
                deleteTool={this.deleteTool}
                editTool={this.editTool}
                formSubmitTool={this.formSubmitTool}
              />
            )}
          />

          <Route
            path="/transports"
            render={(props) => (
              <TableTransports {...props} transports={this.state.transports} />
            )}
          />
          <Route
            path="/formAddTransport"
            render={(props) => (
              <FormAddTransport
                {...props}
                transports={this.state.transports}
                transportEdit={this.state.transportEdit}
                addNewTransport={this.addNewTransport}
              />
            )}
          />
          <Route
            path="/editTransport"
            render={(props) => (
              <EditTransport
                {...props}
                transportEdit={this.state.transportEdit}
                transports={this.state.transports}
                deleteTransport={this.deleteTransport}
                editTransport={this.editTransport}
                formSubmitTransport={this.formSubmitTransport}
              />
            )}
          />
          <Route
            path="/formManagementMaterial"
            render={(props) => (
              <FormManagementMaterial
                {...props}
                sites={this.state.sites}
                materials={this.state.materials}
                move_materials={this.state.move_materials}
                assignNewMaterial={this.assignNewMaterial}
              />
            )}
          />
          <Route
            path="/formManagementEmployee"
            render={(props) => (
              <FormManagementEmployee
                {...props}
                sites={this.state.sites}
                employees={this.state.employees}
                move_employees={this.state.move_employees}
                assignNewEmployee={this.assignNewEmployee}
              />
            )}
          />
          <Route
            path="/formManagementTool"
            render={(props) => (
              <FormManagementTool
                {...props}
                sites={this.state.sites}
                tools={this.state.tools}
                move_tools={this.state.move_tools}
                assignNewTool={this.assignNewTool}
              />
            )}
          />
          <Route
            path="/formManagementTransport"
            render={(props) => (
              <FormManagementTransport
                {...props}
                sites={this.state.sites}
                transports={this.state.transports}
                move_transports={this.state.move_transports}
                assignNewTransport={this.assignNewTransport}
              />
            )}
          />
          <Route
            path="/resources"
            render={(props) => (
              <Resources
                {...props}
                sites={this.state.sites}
                refreshResourceMaterial={this.refreshResourceMaterial}
                refreshResourceEmployee={this.refreshResourceEmployee}
                refreshResourceTool={this.refreshResourceTool}
                refreshResourceTransport={this.refreshResourceTransport}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
