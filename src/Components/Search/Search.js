import React from 'react';
import {PropTypes} from 'prop-types';
import TextField from 'material-ui/TextField';

const Search = ({onSearch, location}) => {
  return (
    <div style={{textAlign:'center'}}>
      <TextField hintText="Search..." onChange={(e) => {onSearch(location, e.target.value)}}/>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export default Search
