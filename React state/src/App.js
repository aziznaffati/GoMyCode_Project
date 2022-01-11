import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Comp from "./component/component.js";

export default class App extends Component {
  state = {
    Person: {
      fullName: "Lionel Andrés Messi Cuccitini",
      imgSrc: "/images/messi.jpg",
      Bio: {
        Profession: "Football Player",
        Clubs: ["FC Barcelone", "/Paris Saint-Germain"],
        Goals: 750,
        Languages: ["Spanish", "/Catalan"],
      },
    },

    show: false,
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        <Button
          variant="danger"
          onClick={this.handleShow}
          style={{ marginBottom: "10%" }}
        >
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show && <Comp Person={this.state.Person} />}
      </div>
    );
  }
}
