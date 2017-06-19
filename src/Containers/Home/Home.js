import React, { Component } from 'react';
import {GET_ALL_EVENTS} from  '../../Constants/api-url';

class Home extends Component {
  componentDidMount() {
      fetch(GET_ALL_EVENTS)
          .then(response => response.json())
          .then(response => {
            console.log('response', response)
          })
          .catch(error => {
            console.log(error);
          })
    }

  render() {
    return (
      <div className="App">
        Test
      </div>
    );
  }
}

export default Home;
