import React, { Component } from 'react';

import { PostProvider } from './PostContext'
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <PostProvider>
        <div className="App">
          <Blog />
        </div>
      </PostProvider>
    );
  }
}

export default App;
