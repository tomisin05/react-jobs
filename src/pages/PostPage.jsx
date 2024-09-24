import React from 'react';
import PostListings from '../components/PostListings'; // Ensure this is the correct import

const PostPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <PostListings />  {/* Updated to PostListings */}
    </section>
  );
};

export default PostPage;
