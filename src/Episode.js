import React from 'react';
import './Episode.css';


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
                  <div className="Episode">
                        <a href="/">
                              <img src={this.props.thumbnail} alt=""/>
                        </a>
                        <span className="title">{this.props.title}</span>

                  </div>
            );
      }
}

export default Episode;