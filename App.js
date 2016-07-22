import ReactDOM from 'react-dom';
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };

    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      val: this.state.val +1
    });
  }
  componentWillMount() {
    console.log('this only trigger once before render');
  }
  render() {
    console.log('this will always keep firing');
    return (
      <button onClick={this.update}>{this.state.val}</button>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
export default App;
