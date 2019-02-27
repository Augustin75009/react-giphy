import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class Hello extends Component {
  constructor (props) {
    super(props);

    this.state = { clicked: true };
  }

  handleClick= () => {
    this.setState ({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : null} onClick={this.handleClick.bind(this)}>
      Hello,
        {this.props.name}
      </div>
    );
  }
}


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
