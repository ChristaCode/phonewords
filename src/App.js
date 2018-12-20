import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: null
    };

    this.translate = this.translate.bind(this);
  }

  translate(e){
    let val = e.target.value;
    let res = '';
    axios.get('http://localhost:8000/translate/' + val + '/')
    .then(function (response) {
      console.log(response.data.number);
      res = response.data.number;
      this.setState({res});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Name:
            <input type="text" 
                   onChange={this.translate}
                  />
          </label>
        </form>
        <p>{this.state.res}</p>
      </div>
    );
  }
}

export default App;
