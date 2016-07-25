import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      val: 1
    };
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
  }

  render() {
    return (
      <button onClick={this.update}>
        {this.props.txt} - {this.state.val}
      </button>
    );
  }
}

App.defaultProps = {
  txt: 'Button'
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
export default App;
