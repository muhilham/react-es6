import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 10,
      blue: 100
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  }

  render() {
    return (
      <div>
        <Slide ref="red" update={this.update}/> {this.state.red} <br/>
        <Slide ref="green" update={this.update}/> {this.state.green} <br/>
        <Slide ref="blue" update={this.update}/> {this.state.blue} <br/>
      </div>
    );
  }
}

class Slide extends React.Component {
  render() {
    return (
      <div>
        <input
          ref='inp'
          type='range'
          min='0'
          max='255'
          onChange={this.props.update} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
