import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    isNaN(number) || number % 1 !== 0 ? this.setState({ alert: "Please Enter A Whole Number" })
      : fetch (`https:localhost:3001/prime/${number}`)
          .then(response => response.json())
          .then(data => this.setState({value: data}));
    
    this.setState({ value: "" });
  }

  render () {
    return (
        <div className="App">
          <div className="App-Body">
            <img src={tacocat} className="cat-image" alt="logo" />
            <h1 className="alert">{this.state.alert}</h1>
            <p>Find The Median</p>
            <form className="median-check" onSubmit={this.handleSubmit}>
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
