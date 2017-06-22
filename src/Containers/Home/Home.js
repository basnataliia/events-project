import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {loadEvents} from '../../Actions/EventAction';
import {getGeoLocation} from '../../Actions/GeolocationAction';
import {handleMarkerClick} from '../../Actions/MarkerAction';
import LoadingPage from '../../Components/Loading/Loading';
import EventList from '../../Components/EventList/EventList';
import Search from '../../Components/Search/Search';
import getMarkers from '../../Components/Markers/getMarkers';
import EventsMapContainer from '../../Components/EventsMapContainer/EventsMapContainer';

class Home extends Component {
  componentDidMount() {
    this.props.getGeoLocation();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentLocation.postalCode !== nextProps.currentLocation.postalCode) {
      this.props.loadEvents(nextProps.currentLocation.postalCode);
    }
  }

  render() {
    if(this.props.loaded) {
      const markers = getMarkers(this.props.events);
      return (
        <div>
          <Search onSearch={this.props.loadEvents} location={this.props.currentLocation.postalCode}/>
          <EventList events={this.props.events}/>
          <EventsMapContainer markers={markers} currentLocation={this.props.currentLocation.coords} handleMarkerClick={this.props.handleMarkerClick}/>
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
  currentLocation: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  handleMarkerClick: PropTypes.func.isRequired,
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
    getGeoLocation: () => dispatch(getGeoLocation()),
    handleMarkerClick: (markerId, showInfo) => dispatch(handleMarkerClick(markerId, showInfo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
