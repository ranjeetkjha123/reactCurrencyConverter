import React, { Component } from 'react';
class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'dddddddd' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.setValue(e.target.value);
  }
  render(props) {
    return (
      <select onChange={this.handleChange} id={this.props.id} name={this.props.name}

       disabled={this.props.disabled}>
      {this.props.options.map(element => {
          return <option value={element.name} key={element.name} >{element.name}</option>
        })}
      </select>
    );
  }
}
export default Select;
