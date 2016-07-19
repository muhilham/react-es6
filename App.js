import ReactDOM from 'react-dom';
import React from 'react';
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return (
      <div>
        <h1>Hello world</h1>
        <b>{txt}</b>
      </div>
    );
  }
}

ReactDOM.render(
  <App txt="this is props text"/>,
  document.getElementById('app')
);
export default App;
