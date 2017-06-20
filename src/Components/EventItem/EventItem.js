import React from 'react';
import {PropTypes} from 'prop-types';
// import {Link} from 'react-router-dom';
import DateFormat from '../DateFormat/DateFormat';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

const EventItem = ({event}) => {
  return (
    // <Link style={{textDecoration: 'none'}} to={'/EventDetails/' + event.id}>
     <Card style={{width: '320px', margin: '20px', height: '346px'}}>
      <CardHeader
        title={event.venue_name}
        subtitle={<DateFormat pubDate={event.start_time} />}
      />
      <CardMedia
        overlay={<CardTitle title={<span style={{fontSize:'14px'}}>{event.title}</span>}/>}
      >
        <img src={event.image.perspectivecrop290by250.url} style={{height: '276px'}}/>
      </CardMedia>
     </Card>
    // </Link>
  );
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventItem
