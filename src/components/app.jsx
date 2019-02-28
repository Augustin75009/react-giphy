import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [
        { id: "4ytUZzb1pRPBS" },
        { id: "DGvZPfynTcj28" }
      ],
      selectedGifId: "4ytUZzb1pRPBS"
    };

    this.search("homer thinking");
  }

  selectGif = (src) => {
    // console.log("hello homer");
    this.setState({
      selectedGifId: src
    });
  }

  search = (query) => {
    giphy('GFRkUz5QGUdooZVz4QDPiiSxH1gNden8').search({
      q: query,
      rating: 'g',
      limit: 15,
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
