import React, { Component } from 'react';
import logo from './logo.svg';
import { getTranslation } from './Routes.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: '',
      res: '',
      prev: []
    };

    this.getValue = this.getValue.bind(this);
  }

  getValue(e){
    let val = e.target.value;
    if(val){
      this.setState({digit: val});
      let tempPrev = this.state.prev;
      tempPrev.push(val);
      this.setState({prev: tempPrev});
      const promise = getTranslation(this.state.prev);
      promise.then((res) => 
        this.setState({ res }));
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.res}
           <div class="phone">
            <div class="screen">
              <span class="prev">{this.state.prev}</span>
            </div>
            <div class="keypad">
              <button class="key" value="1" disabled="disabled">
                1 <span>.,?</span>
              </button>
              <button class="key" value="2" onClick={this.getValue}>
                2 <span>abc</span>
              </button>
              <button class="key" value="3" onClick={this.getValue}>
                3 <span>def</span>
              </button>
              <button class="key" value="4" onClick={this.getValue}>
                4 <span>ghi</span>
              </button>
              <button class="key" value="5" onClick={this.getValue}>
                5 <span>jkl</span>
              </button>
              <button class="key" value="6" onClick={this.getValue}>
                6 <span>mno</span>
              </button>
              <button class="key" value="7" onClick={this.getValue}>
                7 <span>pqrs</span>
              </button>
              <button class="key" value="8" onClick={this.getValue}>
                8 <span>tuv</span>
              </button>
              <button class="key" value="9" onClick={this.getValue}>
                9 <span>wxyz</span>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
