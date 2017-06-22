import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {GetEventById} from '../../Actions/EventAction';

class EventDetails extends Component {
  componentDidMount() {
    this.props.displayEvent(this.props.params.id);
  }

  render() {
    const {eventDetails} = this.props;
    if(eventDetails) {
      return (
        <div>
          <h1>{eventDetails.title}</h1>
          <span>{eventDetails.address}</span>
          <p>{eventDetails.description}</p>
        </div>
      );
    }
    return null;
  }
}

EventDetails.EventDetails = {
  eventDetails: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    eventDetails: state.events.eventDetails,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayEvent: (eventId) => dispatch(GetEventById(eventId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
