import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';

class FeedPage extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await api.get('/posts');

    this.setState({
      posts: response.data
    });
  }

  renderPosts() {
    return this.state.posts.map(post => (
      <article className="post" key={post._id}>
        <header className="post-header">
          <div className="post-info">
            <span className="post-user">{post.author}</span>
            <span className="post-place">{post.place}</span>
          </div>

          <img src="" alt="Mais" />
        </header>

        <img className="post-image" src={`http://localhost:3333/files/${post.image}`} alt={post.description} />

        <footer className="post-footer">
          <div className="post-footer-actions">
            <img src="" alt="Like" />
            <img src="" alt="Comment" />
            <img src="" alt="Send" />  
          </div>

          <strong>{post.likes} curtidas</strong>
          <p>{post.description} <span>{post.hashtags}</span></p>
        </footer>
      </article>
    ))
  }

  render() {
    return (
      <section className="feed-list">
        {this.renderPosts()}
      </section>
    )
  }
}

export default FeedPage;