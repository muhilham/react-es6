import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'Your Default State value'
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type='text'
        onChange={this.update.bind(this)} />
        <h1> {this.state.txt}</h1>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
export default App;
