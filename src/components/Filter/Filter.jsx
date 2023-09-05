import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';
import { Component } from 'react';

class Filter extends Component {
  handleInputChange = event => {
    this.props.onFilter(event.target.value);
  };

  render() {
    return (
      <StyledFilter>
        <p className="margin-right">Find contacts by name</p>
        <input
          onChange={this.handleInputChange}
          value={this.props.filter}
          type="text"
        />
      </StyledFilter>
    );
  }
}
Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
