import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'Your Default State value'
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Widget update={this.update} txt={this.state.txt}/>
        <Widget update={this.update} txt={this.state.txt}/>
        <Widget update={this.update} txt={this.state.txt}/>
        <Widget update={this.update} txt={this.state.txt}/>
        <Widget update={this.update} txt={this.state.txt}/>
        <Widget update={this.update} txt={this.state.txt}/>
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type='text'
      onChange={props.update} />
      <h1> {props.txt}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
