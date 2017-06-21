import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetEventById} from '../../Actions/EventAction';
// import {withRouter} from 'react-router';

class EventDetails extends Component {
  componentDidMount() {
    this.props.displayEvent(this.props.params.id);
  }

  render() {
    const {eventDetails} = this.props;
    if(eventDetails) {
      return (
        <div>
          {eventDetails.title}
        </div>
      );
    }
    return null;
  }
}

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
