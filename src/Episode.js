import React from 'react';
import './Episode.css';
// import playArrow from './24px.svg';



class Episode extends React.Component {
      constructor(props) {
            super(props);
            this.state = {};
      }
      //Exemple from official docs
      // componentDidMount() {
      //       fetchPosts().then(response => {
      //             this.setState({
      //                   posts: response.posts
      //             });
      //       });

      //       fetchComments().then(response => {
      //             this.setState({
      //                   comments: response.comments
      //             });
      //       });
      // }
      render() {
            return (
                  <div className="Episode" >
                        {/* eslint-disable-next-line */}
                        <a rel="noopener norefereer"  target="_blank" href={"https://youtu.be/"+this.props.videoId}  >
                              <img src={this.props.thumbnail} alt=""/>
                        </a>
                        <span className="title">{this.props.title}</span>
                        {/* <img src={playArrow} className="playArrow"/> */}
                        {/* <svg className="playArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                              <path fill="none" d="M0 0h24v24H0z" />
                        </svg> */}
                  </div>
            );
      }
}

export default Episode;