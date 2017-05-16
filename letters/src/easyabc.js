import React from 'react';
import './App.css';
import alphabets from './alphabets.json';

export default class EasyABC extends React.Component{

  constructor(){
    super()
    this.state = {
      alphabets: alphabets,
      currentPosition: 0
    }
  }

  render(){
    return(
        <div className="game">
          <div className="option">
            <div className="fields">
              <div className="field-block">
                {this.state.alphabets[this.state.currentPosition].letter}
              </div>
            </div>
            <div className="button">
              <a href="#" className="button prev">Previous</a>
              <a href="#" className="button sound"> Play Sound</a>
              <a href="#" className="button next">Next</a>
            </div>
            <div className="fields">
              <div className="field-block">
                <div className="left-field">
                  <div className="placeholder-span">
                    Click Next to View Image
                  </div>
                    <img src={this.state.alphabets[this.state.currentPosition].image}/>
                </div>
                <div className="right-field">
                  <div className="placeholder-span">
                    Click Next to View the Spelling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

