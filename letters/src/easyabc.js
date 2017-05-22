import React from 'react';
import './App.css';
import alphabets from './alphabets.json';

export default class EasyABC extends React.Component{

  constructor(){
    super()
    this.state = {
      alphabets: alphabets,
      currentPosition: 0,
      currentTick: 0
    }
    this.next = this.next.bind(this);
  }

  next(){
    console.log("next button clicked");
    if(this.state.currentTick < 2){
      this.setState({
        currentTick: this.state.currentTick + 1
      })
    }
    this.setState({
      currentPosition: this.state.currentPosition + 1
    })
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
              <a className="button prev">Previous</a>
              <a className="button sound"> Play Sound</a>
              <a className="button next" onClick={this.next}>Next</a>
            </div>
            <div className="fields">
              <div className="field-block">
                <div className="left-field">
                  <div className="placeholder-span hide">
                    Click Next to View Image
                  </div>
                    <img className="letter-image" alt={this.state.alphabets[this.state.currentPosition].word} src={this.state.alphabets[this.state.currentPosition].image}/>
                </div>
                <div className="right-field">
                  <div className="placeholder-span hide" >
                    Click Next to View the Spelling
                  </div>
                  <div className="word">
                    {this.state.alphabets[this.state.currentPosition].word}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

