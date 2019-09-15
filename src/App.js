import React from 'react';
// import logo from './logo.svg';
import logoCM from './logoCM.png';
import SideBar from './SideBar';
import Episode from './Episode';

import './App.css';

require('dotenv').config();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      episodes:[],
      playlists:[],
      season:1,
      markUp:"",
    };
  }
  // renderEpisodes(){
  //   console.log(this.state.season);
  // }
  async getEpisodes(url){
    await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId="+url+"&key=AIzaSyBcgLoZB4mhPtUusT4Ff3kn34KZ9jv_sWY")
      .then(e=>e.json())
      .then(res=>
        this.setState((state)=>{
          state.episodes.push(res.items);
        })
      ); 
  }
  async componentDidMount(){
    //this for S0.1 episodes
    //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=PLllaRC97fgczIkal5pcRZDKDvqHbsDqRw&key=AIzaSyBcgLoZB4mhPtUusT4Ff3kn34KZ9jv_sWY
    this.setState({
      playlists:["PLllaRC97fgczIkal5pcRZDKDvqHbsDqRw",
                 "PLllaRC97fgcxaq6Vu2zN9GxYh3Gckmj9k",
                 "PLllaRC97fgcyax2Yrwb0f6FiLi-WUQSQq",
                 "PLllaRC97fgcxlkrlCO5T3PCambA9s3Cz9",
                 "PLllaRC97fgcxMDrr4jY9YuBVxyf5d9o3O"]
    });
    // this.state.playlists.forEach((e)=>{
    //   this.getEpisodes(e);
    //   console.log(1);
    // });
    await this.getEpisodes('PLllaRC97fgczIkal5pcRZDKDvqHbsDqRw');
    await this.getEpisodes('PLllaRC97fgcxaq6Vu2zN9GxYh3Gckmj9k');
    await this.getEpisodes('PLllaRC97fgcyax2Yrwb0f6FiLi-WUQSQq');
    await this.getEpisodes('PLllaRC97fgcxlkrlCO5T3PCambA9s3Cz9');
    await this.getEpisodes('PLllaRC97fgcxMDrr4jY9YuBVxyf5d9o3O');
    this.changeSeason(1);
  }


  changeSeason(arg){
    this.setState({
      season:arg,
    },
    this.renderEpisodes
    );
    
  }
  prepareTitle(source){
    return source.replace("."," ");
  }
  
  render() {
    var changeSeason=this.changeSeason;
    let season=this.state.season-1;
    let aux = this.state.episodes[season];
    // console.log(this.state.episodes);
    const episodeRendered = (aux) ? aux.map((e)=>(
      <div key = {e.snippet.resourceId.videoId}>
        <Episode thumbnail={e.snippet.thumbnails.high.url} title={e.snippet.title} videoId={e.snippet.resourceId.videoId}/>
      </div>
    )) : "Loading";
    // let seasons = this.state.episodes;
    return (
      <div className="App">
        <SideBar onSeasonChange={changeSeason.bind(this)} />
        <header className="App-header">
          <h1>Sezonul {this.state.season}</h1>
          <br/>
          <img src={logoCM} className="App-logo" alt="logo" />
          <div className="episodes">
            {episodeRendered}
            {/* <Episode thumbnail="https://i.ytimg.com/vi/aYPFHoO-Ae0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBgZpeqU9eszObloGOrr6JCHAD90Q" title="Vin" />
            <Episode title="Buton" />
            <Episode title="Pilot" /> */}
          </div>
        </header>
      </div>
      
    );
  }
}

export default App;
