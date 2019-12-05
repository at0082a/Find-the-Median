import React from 'react';
import primes from './primes.svg';
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
    //check for spaces before or after
    let number = this.state.value.replace(/\s/g, "");
    event.preventDefault();
    //if user inputs text, a number lower than 3, or empty string, the error alert will appear below. 
    isNaN(number) || number % 1 !== 0 || number === '' || number <= 2 ? this.setState({ alert: "Please Enter A Whole Number Greater Than 2" })
      :  
        fetch(`http://localhost:3002/prime/${number}`, {
          mode: 'cors',
          headers: {
          'Content-Type' : 'application/json'
          }
      })
        .then (res => res.json())
        .then (response => 
          response.data.length === 2 ? this.setState ({ alert: `The median prime numbers are ${response.data[0]} and ${response.data[response.data.length - 1]}` })
                                     : this.setState ({ alert: `The median prime number is ${response.data}` }));
      }

  render () {
    return (
        <div className="App">
          <div className="App-Body">
            <img src={primes} className="number-image" alt="logo" />
            {!this.state.alert 
             ? <p> Find The Median </p>
             : <p> {this.state.alert} </p>
            }
            <form onSubmit={this.handleSubmit}>
              <input
                className="text-input"
                type="text"
                placeholder="Enter Number Here"
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
