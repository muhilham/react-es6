import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      increase : false,
      currentProps: null,
      nextProps: null,
      isRendered: false
    };
  }

  update() {
    console.log('update');
    ReactDOM.render(
      <App val={this.props.val + 1}/>,
      document.getElementById('app')
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    let isRendered = nextProps.val % 5 === 0;
    return isRendered;
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    this.setState({
      increase: nextProps.val > this.props.val,
      currentProps: this.props.val,
      nextProps: nextProps.val,
      isRendered: nextProps.val % 5 === 0
    });
  }

  render() {
    console.log({
      now: this.state.currentProps,
      nextProps: this.state.nextProps,
      isRendered: this.state.isRendered
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
