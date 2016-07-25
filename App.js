import ReactDOM from 'react-dom';
import React from 'react';

let MixinApp = InnerComponent => class extends React.Component {
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

  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    /**
     * Read this
     * https://facebook.github.io/react/docs/jsx-spread.html
     * for this stupid spread Operators shit
     */
    return (
      <InnerComponent update={this.update}
        {...this.state}
        {...this.props}
       />
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
}

const Button = (props) => {
  return (
    <button onClick={props.update}> {props.txt} - {props.val} </button>
  );
}

let ButtonMixed = MixinApp(Button);

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt= 'Button'/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
export default App;
