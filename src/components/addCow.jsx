import ReactDOM from 'react-dom';
import React from 'react';
import { Parse } from '../parse.js';

class AddCow extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    Parse.create({ name, description }, () => {
      Parse.readAll(() => {})
    });

  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" name="description" />
        <button className="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>

    )
  }
}

export default AddCow;