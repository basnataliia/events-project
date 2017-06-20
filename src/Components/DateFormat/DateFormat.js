import React from 'react';
import {PropTypes} from 'prop-types';

const formatDate = (props) => {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];
  
  const date = new Date(props.pubDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return (
        <div style={{paddingTop: '5px'}}>{`${day}  ${monthNames[monthIndex]} ${ year}`}</div>
  );
};

formatDate.propTypes = {
  pubDate: PropTypes.string,
};

export default formatDate;
