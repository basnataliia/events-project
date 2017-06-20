import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {loadEvents} from '../../Actions/EventAction';
import {getGeoLocation} from '../../Actions/GeolocationAction';
import LoadingPage from '../../Components/Loading/Loading';
import EventList from '../../Components/EventList/EventList';

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
    if(this.props.loaded) {
      return (
        <EventList events={this.props.events}/>
      );
    }
    if(this.props.error) {
       return <p>Sorry, there was a problem loading the data.</p>;
     }
    return (
      <LoadingPage />
    );
  }
}

Home.propTypes = {
  loadEvents: PropTypes.func.isRequired,
  getGeoLocation: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  currentLocation: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  // error: PropTypes.symbol,
};

function mapStateToProps(state, ownProps) {
  return {
    currentLocation: state.events.location,
    events: state.events.events,
    loaded: state.events.loaded,
    error: state.events.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: location => dispatch(loadEvents(location)),
    getGeoLocation: () => dispatch(getGeoLocation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
