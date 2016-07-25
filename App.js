import ReactDOM from 'react-dom';
import React from 'react';

let MixinApp = InnerComponent => class extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      currentValue: parseInt(props.val)
    };
  }

  update() {
    this.setState({
      currentValue: this.state.currentValue + 1
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
    <button onClick={props.update}> {props.txt} - {props.currentValue} </button>
  );
}

const Label = (props) => {
  return (
    <label onMouseMove={props.update}> {props.txt} - {props.currentValue} </label>
  );
}

let ButtonMixed = MixinApp(Button);
let LabelMixed = MixinApp(Label);

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt= 'Button' val={10} /> - 
        <LabelMixed txt= 'Label' val={10} />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
export default App;
