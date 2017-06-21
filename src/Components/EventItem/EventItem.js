import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router';
import DateFormat from '../DateFormat/DateFormat';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

const EventItem = ({event}) => {
  let title = '';
  if(event.title.length > 50) {
    title = `${event.title.substring(0, 47)} ...`;
  } else {
    title = event.title;
  }

  return (
     <Card style={{width: '320px', margin: '20px', height: '346px'}}>
      <CardHeader
        title={<Link style={{color: 'grey'}} to={'/EventDetails/' + event.id}>{title}</Link>}
        subtitle={<DateFormat pubDate={event.start_time} />}
      />
      <CardMedia
        overlay={<CardTitle title={<span style={{fontSize:'14px', lineHeight:'5'}}>Where: {event.venue_name}</span>}/>}
      >
        <img src={event.image.perspectivecrop290by250.url} style={{height: '276px'}}/>
      </CardMedia>
     </Card>
  );
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventItem
