import React, { Component } from 'react';
import logo from './logo.svg';
import { getTranslation } from './Routes.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: '',
      res: ''
    };

    this.translate = this.translate.bind(this);
  }

  translate(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({digit: val});
    const promise = getTranslation(val);
    promise.then((res) => 
      this.setState({ res }));
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.res}</p>
           <div class="phone">
            <div class="screen">
              <span class="prev"></span><span class="curr">{this.state.digit}</span>
            </div>
            <div class="keypad">
              <button class="key" value="1" disabled="disabled">
                1 <p>.,?</p>
              </button>
              <button class="key" value="2" onClick={this.translate}>
                2 <p>abc</p>
              </button>
              <button class="key" value="3" onClick={this.translate}>
                3 <p>def</p>
              </button>
              <button class="key" value="4" onClick={this.translate}>
                4 <p>ghi</p>
              </button>
              <button class="key" value="5" onClick={this.translate}>
                5 <p>jkl</p>
              </button>
              <button class="key" value="6" onClick={this.translate}>
                6 <p>mno</p>
              </button>
              <button class="key" value="7" onClick={this.translate}>
                7 <p>pqrs</p>
              </button>
              <button class="key" value="8" onClick={this.translate}>
                8 <p>tuv</p>
              </button>
              <button class="key" value="9" onClick={this.translate}>
                9 <p>wxyz</p>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
