import React from 'react';
import './App.css';

export default class EasyABC extends React.Component{
  render(){
    return(
        <div className="game">
          <div className="option">
            <div className="fields">
              <div className="field-block">
                A
              </div>
            </div>
            <div className="button">
              <a href="#" className="button prev">Previous</a>
              <a href="#" className="button sound"> Play Sound</a>
              <a href="#" className="button next">Next</a>
            </div>
          </div>
        </div>
      );
  }
}

