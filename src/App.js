import React from 'react';
import numbers from './numbers.svg';
import './App.css';

class App extends React.Component {
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
    let number = this.state.value.replace(/\s/g, "");
    console.log(typeof(number), "this is the typeof");
    event.preventDefault();
    isNaN(number) || number % 1 !== 0 || number === '' ? this.setState({ alert: "Please Enter A Whole Number" })
      :  
        fetch(`http://localhost:3002/prime/${number}`, {
          mode: 'cors', // lowercase
          headers: {
          'Content-Type' : 'application/json'
          }
      })
        .then (res => res.json())
        .then (response => 
          response.data.length === 2 ? this.setState ({ alert: `The median prime numbers are ${response.data[0]} and ${response.data[response.data.length - 1]}` })
                                : this.setState ({ alert: `The median prime number is ${response.data}` }));
        
        // this.setState({ value: "" });
      }

  render () {
    return (
        <div className="App">
          <div className="App-Body">
            <img src={numbers} className="number-image" alt="logo" />
            <h1 className="alert">{this.state.alert}</h1>
            <p>Find The Median</p>
            <form onSubmit={this.handleSubmit}>
              <input
                className="text-input"
                type="text"
                placeholder="Enter Text Here"
                onChange={this.handleChange}
                value={this.state.value}
              />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
    );
  }
}
export default App;
