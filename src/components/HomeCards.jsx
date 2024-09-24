import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Browse Posts</h2>
            <p className="mt-2 mb-4">
              💬 Looking for inspiration or interested in what others have shared? Browse through current community posts and join the conversation!
            </p>
            <Link
              to="/posts" // Updated link to community posts
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Posts
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">Add Post</h2>
            <p className="mt-2 mb-4">
              ✨ Have something to share? Add your community post below and let others engage with your thoughts, ideas, or announcements!
            </p>
            <Link
              to="/posts/add" // Updated link to add a new community post
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Post
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HomeCards;