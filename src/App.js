import React, { Component } from 'react';
import Article from './Article';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: true
    };
    this.toggleArticle = this.toggleArticle.bind(this);

  }

  toggleArticle() {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleArticle}>Toggle Article</button>
        {this.state.display && <Article />}
      </div>
    );
  }
}

export default App;
