import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1}/>,
      document.getElementById('app')
    );
  }

  render() {
    return (
        <button onClick={this.update}> {this.props.val} </button>
    );
  }
}

App.defaultProps = {
  val: 1
};


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
export default App;
