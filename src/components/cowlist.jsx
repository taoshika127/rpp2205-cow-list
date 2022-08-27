import ReactDOM from 'react-dom';
import React from 'react';
import Cow from './cow.jsx';

class Cowlist extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.data.map((cow, index) => (<h4 key={index} onClick={this.props.cowClicked}>{cow.name}</h4>))}
      </div>
    )
  }
}

export default Cowlist;