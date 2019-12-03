import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", alert: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let number = this.state.value;
    event.preventDefault();
    let checkPalindrome;
    !str || newStr.length === 0
      ? this.setState({ alert: "Please Enter Text" })
      : (checkPalindrome =
          [...newStr].reduce((previous, next) => next + previous) === newStr
            ? this.setState({ alert: `${str} is a Palindrome :)` })
            : this.setState({ alert: `${str} is not a Palindrome :(` }));
    this.setState({ value: "" });
  }

  render () {
    return (

    );
  }
}