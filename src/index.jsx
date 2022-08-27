import ReactDOM from 'react-dom';
import React from 'react';
import Cow from './components/cow.jsx';
import Cowlist from './components/cowlist.jsx';
import AddCow from './components/addCow.jsx';
import { Parse } from './parse.js';
import { sampleCowData } from './cowDataSet.js';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {data: sampleCowData, cowClicked: undefined};
  }

  componentDidMount() {
    setInterval(() => {
      Parse.readAll((result) => {
        this.setState({data: result})
      });
    }, 3000);
  }

  handleClick(e) {
    this.setState({cowClicked: e.target.innerHTML});
  }

  render() {
    return (
      <div>
        <h1>Cow List</h1>
        <div id="top panel">
          <Cow clicked={this.state.cowClicked} data={this.state.data}/>
        </div>
        <AddCow />
        <Cowlist data={this.state.data} cowClicked={this.handleClick.bind(this)}/>
      </div>
      )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;