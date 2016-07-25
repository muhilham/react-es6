import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      increase : false,
      currentProps: null,
      nextProps: null
    };
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1}/>,
      document.getElementById('app')
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      increase: nextProps.val > this.props.val,
      currentProps: this.props.val,
      nextProps: nextProps.val
    });
  }

  render() {
    console.log({
      now: this.state.currentProps,
      nextProps: this.state.nextProps
    },this.state.increase);
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
