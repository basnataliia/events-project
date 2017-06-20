import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {loadEvents} from '../../Actions/EventAction';

import {GET_ALL_EVENTS} from  '../../Constants/api-url';


class Home extends Component {
  componentDidMount() {
    this.props.loadEvents('test');
  }

  render() {
    return (
      <div className="App">
        {
          this.props.events.map(event => {
            return <p key={event.id}>{event.title}</p>
          })
        }
      </div>
    );
  }
}

Home.propTypes = {
  loadEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    events: state.events.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: location => dispatch(loadEvents(location))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
