import React, { Component } from "react";
import "./component.css";

export default class Comp extends Component {
  state = {
    count: 0,
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <img src={this.props.Person.imgSrc} width={320} alt="ProfilePhoto" />
        <h2> FullName :{this.props.Person.fullName} </h2>
        <h2> Profession: {this.props.Person.Bio.Profession} </h2>
        <h2> Clubs :{this.props.Person.Bio.Clubs} </h2>
        <h2> Goals : {this.props.Person.Bio.Goals} </h2>
        <h2>Languages : {this.props.Person.Bio.Languages} </h2>
      </div>
    );
  }
}
