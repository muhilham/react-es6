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
  componentDidMount() {
    console.log('this only trigger once after rendering');
  }
  componentWillUnmount() {
    console.log('this shit trigger once the component being unmount');
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }
  mount() {
    ReactDOM.render(
      <App/>,
      document.getElementById('a')
    );
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <section>
        <button onClick={this.mount}>Mount shit</button>
        <button onClick={this.unmount}>Unmount shit</button>
        <span id="a"></span>
      </section>
    );
  }
}

ReactDOM.render(
  <Wrapper/>,
  document.getElementById('app')
);
export default Wrapper;
