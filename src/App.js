import React from 'react';
// import logo from './logo.svg';
import logoCM from './logoCM.png';
import SideBar from './SideBar';
import Episode from './Episode'

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      episodes:[],
      playlists:[]
    };
  }
  getEpisodes(url){
    fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId="+url+"&key=AIzaSyBcgLoZB4mhPtUusT4Ff3kn34KZ9jv_sWY")
      .then(e=>e.json())
      .then(res=>{
        this.setState((state)=>{
          state.episodes.push(res);
        })
      })
  }
  componentWillMount(){
    //this for S0.1 episodes
    //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=PLllaRC97fgczIkal5pcRZDKDvqHbsDqRw&key=AIzaSyBcgLoZB4mhPtUusT4Ff3kn34KZ9jv_sWY
    this.setState({
      playlists:["PLllaRC97fgczIkal5pcRZDKDvqHbsDqRw",
                 "PLllaRC97fgcxaq6Vu2zN9GxYh3Gckmj9k",
                 "PLllaRC97fgcyax2Yrwb0f6FiLi-WUQSQq",
                 "PLllaRC97fgcxlkrlCO5T3PCambA9s3Cz9",
                 "PLllaRC97fgcxMDrr4jY9YuBVxyf5d9o3O"]
    });
  }
  componentDidMount(){
    this.state.playlists.forEach(e=>{
      this.getEpisodes(e);
    })
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <header className="App-header">
          <img src={logoCM} className="App-logo" alt="logo" />
          <div className="episodes">
            <Episode thumbnail="https://i.ytimg.com/vi/aYPFHoO-Ae0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBgZpeqU9eszObloGOrr6JCHAD90Q" title="Vin" />
            <Episode title="Buton" />
            <Episode title="Pilot" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
