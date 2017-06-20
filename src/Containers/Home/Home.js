import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {loadEvents} from '../../Actions/EventAction';
import {getGeoLocation} from '../../Actions/GeolocationAction';


class Home extends Component {
  componentDidMount() {
    this.props.getGeoLocation();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentLocation !== nextProps.currentLocation) {
      this.props.loadEvents(nextProps.currentLocation);
    }
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
  getGeoLocation: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  currentLocation: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    currentLocation: state.events.location,
    events: state.events.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: location => dispatch(loadEvents(location)),
    getGeoLocation: () => dispatch(getGeoLocation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
