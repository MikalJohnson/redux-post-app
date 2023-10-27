import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const PostList = ({ posts, loading, error, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  loading: state.postReducer.loading,
  error: state.postReducer.error,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);