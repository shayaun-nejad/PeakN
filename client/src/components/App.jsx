import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  
  render() {
    return (
      <div>
        <h2>Peak Nootropics</h2>
        <h4>Sign up to be on the premier waitlist </h4>
        <div id='form'>
        <form> 
          <input type='text' value='enter email here'/>
          <input type='submit' />
        </form>
        </div>
        <div id='energyDrink'>
          <div id='imo'>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
