import React from "react";
import "../App.css";
import Information from "./Information";
import Equipe from "./Equipe";
import Recrutement from "./Recrutement";
import ToDoList from "./ToDoList";
import PartageFichier from "./PartageFichier";
import Parametre from "./Parametre";

class MyApp extends React.Component {
  state = {
    currentTab: "information"
  };

  changeTab = tab => {
    this.setState({
      currentTab: tab
    });
  };

  change(etat) {
    console.log("on est dans change");
    console.log(etat);
    switch (etat) {
      case "information":
        return <Information />;
      case "equipe":
        return <Equipe />;
      case "Recrutement":
        return <Recrutement />;
      case "To_Do_list":
        return <ToDoList />;
      case "Partage_de_fichiers":
        return <PartageFichier />;
      case "Paramètres":
        return <Parametre />;
      default:
        return null;
    }
  }

  //   displayTab() {
  //     if (this.state.currentTab === "information") {
  //       return <div>Dans information</div>;
  //     } else if (this.state.currentTab === "equipe") {
  //       return <div>Dans équipe</div>;
  //     } else if (this.state.currentTab === "Recrutement") {
  //       return <div>Dans Recrutement</div>;
  //     } else if (this.state.currentTab === "To_Do_list") {
  //       return <div>Dans To-Do list</div>;
  //     } else if (this.state.currentTab === "Partage_de_fichiers") {
  //       return <div>Dans Partage de fichiers</div>;
  //     } else if (this.state.currentTab === "Paramètres") {
  //       return <div>Dans Paramètres</div>;
  //     }
  //   }

  render() {
    return (
      <section className="gerer-projet">
        <article className="list">
          <p
            onClick={e => {
              this.changeTab("information");
            }}
          >
            information
          </p>
          <p
            onClick={e => {
              this.changeTab("equipe");
            }}
          >
            équipe
          </p>
          <p
            onClick={e => {
              this.changeTab("Recrutement");
            }}
          >
            Recrutement
          </p>
          <p
            onClick={e => {
              this.changeTab("To_Do_list");
            }}
          >
            To-Do list
          </p>
          <p
            onClick={e => {
              this.changeTab("Partage_de_fichiers");
            }}
          >
            Partage de fichiers
          </p>
          <p
            onClick={e => {
              this.changeTab("Paramètres");
            }}
          >
            Paramètres
          </p>
          {/* {this.displayTab()} */}
          {/* {this.change(this.state.currentTab)} */}
        </article>
        <article className="contenu">
          {this.change(this.state.currentTab)}
        </article>
      </section>
    );
  }
}

export default MyApp;
