import React from 'react';
import './App.css';
import alphabets from './alphabets.json';
import classNames from 'classnames';

export default class EasyABC extends React.Component{

  constructor(){
    super()
    this.state = {
      alphabets: alphabets,
      currentPosition: 0,
      currentTick: 0
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next(){
    if(this.state.currentTick < 2){
      this.setState({
        currentTick: this.state.currentTick + 1
      })
    } else {
        this.setState({
          currentPosition: this.state.currentPosition + 1,
          currentTick: 0
    })
  }

  }

  prev(){
    console.log("the previous button has been clicked");
    if(this.state.currentPosition > 0){
      this.setState({
      currentPosition: this.state.currentPosition-1
    });
    } else {
      this.setState({
      currentPosition: this.state.alphabets.length
    })
    }
  }

  render(){
    let showImage = this.state.currentTick !== 0 ? true : false;
    let showWord = this.state.currentTick === 2 ? true : false;
    console.log(this.state.currentTick, showImage);
    return(
        <div className="game">
          <div className="option">
            <div className="fields">
              <div className="field-block">
                {this.state.alphabets[this.state.currentPosition].letter}
              </div>
            </div>
             The Current Position Is:{this.state.currentPosition}<br/>
             The Current Tick Is:{this.state.currentTick}
            <div className="button">
              <a className="button prev" onClick={this.prev}>Previous</a>
              <a className="button sound"> Play Sound</a>
              <a className="button next" onClick={this.next}>Next</a>
            </div>
            <div className="fields">
              <div className="field-block">
                <div className="left-field">
                  <div className={classNames('placeholder-span', {hide: showImage})}>
                    Click Next to View Image
                  </div>
                    <img className={classNames('letter-image', {hide: !showImage})} alt={this.state.alphabets[this.state.currentPosition].word} src={this.state.alphabets[this.state.currentPosition].image}/>
                </div>
                <div className="right-field">
                  <div className={classNames('placeholder-span', {hide: showWord})} >
                    Click Next to View the Spelling
                  </div>
                  <div className={classNames('word', {hide: !showWord})}>
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

