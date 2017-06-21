import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {loadEvents} from '../../Actions/EventAction';
import {getGeoLocation} from '../../Actions/GeolocationAction';
import LoadingPage from '../../Components/Loading/Loading';
import EventList from '../../Components/EventList/EventList';
import Search from '../../Components/Search/Search';

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
        <div>
          <Search onSearch={this.props.loadEvents} location={this.props.currentLocation}/>
          <EventList events={this.props.events}/>
        </div>
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
    loadEvents: (location, search) => dispatch(loadEvents(location, search)),
    getGeoLocation: () => dispatch(getGeoLocation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
