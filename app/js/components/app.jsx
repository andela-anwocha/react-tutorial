import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render(){
    return <div>
                Hello React!
           </div>
  }
}

render(<App/>, document.getElementById('container'));