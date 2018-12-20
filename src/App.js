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
    this.translate = this.translate.bind(this);
  }

  getValue(e){
    e.preventDefault();
    let val = e.target.value;
    if(val){
      let tempPrev = this.state.prev;
      tempPrev.push(val);
      this.setState({prev: tempPrev});
      this.setState({digit: val});
      this.translate(this.state.prev);
    }
  }

  translate(val){
    const promise = getTranslation(val);
    promise.then((res) => 
      this.setState({ res }));
  }

  select(){

  }

  render() {
    let response = this.state.response;

    return (
      <div className="App">

        <span onclick={this.select}>{this.state.res[0]}</span>
        <span onclick={this.select}>{this.state.res[2]}</span>
        <span onclick={this.select}>{this.state.res[4]}</span>
        <span onclick={this.select}>{this.state.res[6]}</span>

           <div class="phone">
            <div class="screen">
              <span class="prev">{this.state.prev}</span>
            </div>
            <div class="keypad">
              <button class="key" value="1" disabled="disabled">
                1 <p>.,?</p>
              </button>
              <button class="key" value="2" onClick={this.getValue}>
                2 <p>abc</p>
              </button>
              <button class="key" value="3" onClick={this.getValue}>
                3 <p>def</p>
              </button>
              <button class="key" value="4" onClick={this.getValue}>
                4 <p>ghi</p>
              </button>
              <button class="key" value="5" onClick={this.getValue}>
                5 <p>jkl</p>
              </button>
              <button class="key" value="6" onClick={this.getValue}>
                6 <p>mno</p>
              </button>
              <button class="key" value="7" onClick={this.getValue}>
                7 <p>pqrs</p>
              </button>
              <button class="key" value="8" onClick={this.getValue}>
                8 <p>tuv</p>
              </button>
              <button class="key" value="9" onClick={this.getValue}>
                9 <p>wxyz</p>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
