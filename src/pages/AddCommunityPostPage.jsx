import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCommunityPostPage = ({ addCommunityPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // Changed from description to content
  const [type, setType] = useState('Announcement'); // Changed category to type
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [authorContact, setAuthorContact] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(), // Use unique ID generation, could be backend-side
      title,
      type,
      content,
      author: {
        name: authorName,
        email: authorEmail,
        contact: authorContact,
      },
      timestamp: new Date().toISOString(), // Generate current timestamp
    };
    
    addCommunityPostSubmit(newPost);
    toast.success('Community post added successfully');
    
    return navigate('/posts');
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Community Post</h2>

            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Post Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter the title of the post"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
              <textarea
                id="content"
                name="content"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add the content of your community post"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Announcement">Announcement</option>
                <option value="Discussion">Discussion</option>
                <option value="Event">Event</option>
                <option value="Question">Question</option>
              </select>
            </div>

            <h3 className="text-2xl mb-5">Author Info</h3>

            <div className="mb-4">
              <label htmlFor="authorName" className="block text-gray-700 font-bold mb-2">Author Name</label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                className="border rounded w-full py-2 px-3"
                placeholder="Author's name"
                required
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="authorEmail" className="block text-gray-700 font-bold mb-2">Author Email</label>
              <input
                type="email"
                id="authorEmail"
                name="authorEmail"
                className="border rounded w-full py-2 px-3"
                placeholder="Author's email"
                required
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="authorContact" className="block text-gray-700 font-bold mb-2">Author Contact</label>
              <input
                type="tel"
                id="authorContact"
                name="authorContact"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone number"
                value={authorContact}
                onChange={(e) => setAuthorContact(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCommunityPostPage;
