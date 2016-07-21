import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <CustomButton> <Heart/> Press Me</CustomButton>
    );
  }
}

class CustomButton extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    );
  }
}

const Heart = () => {
  return (
    <i className='glyphicon glyphicon-heart'></i>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
