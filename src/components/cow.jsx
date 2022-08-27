import ReactDOM from 'react-dom';
import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var cowClicked = this.props.clicked;
    if (cowClicked) {
      var targetCow = this.props.data.find(cow => cow.name === cowClicked);
      return (
        <div>
          <h3>{targetCow.name}</h3>
          <h5>{targetCow.description}</h5>
        </div>
      )
    }
  }
}

export default Cow;