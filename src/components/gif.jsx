import React, { Component } from 'react';

class Gif extends Component {
  picked = (event) => {
    this.props.selectGif(this.props.id);
  }

  render() {
    const src = `https://media1.giphy.com/media/${ this.props.id }/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.picked} />
    );
  }
}

export default Gif;
