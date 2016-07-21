import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'Your Default State value'
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <hr/>
        <Slide update={this.update}/>
        <Slide update={this.update}/>
        <Slide update={this.update}/>
        <Slide update={this.update}/>
        <Slide update={this.update}/>
        <Slide update={this.update}/>
      </div>
    );
  }
}

class Slide extends React.Component {
  render() {
    return (
      <div>
        <input
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
