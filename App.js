import ReactDOM from 'react-dom';
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      username: '',
      lastGistUrl: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.serverRequest = $.get(this.props.source, this.serverResponse.bind(this));
  }

  serverResponse(result) {
    console.log('serverResponse',result);
    let lastGist = result[0];
    this.setState({
      data: result,
      username: lastGist.owner.login,
      lastGistUrl: lastGist.html_url
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.serverRequest.abort();
  }

  render() {
    let rows = this.state.data.map( (gist, index) => {
      return (
        <PersonRow key={index} index={index} data={gist} />
      );
    });
    return(
      <div>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.data.description}</td>
      <td>{props.data.url}</td>
    </tr>
  );
};

ReactDOM.render(
  <App source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('app')
);
export default App;
