import React, { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditCommunityPostPage = ({ updatePostSubmit }) => {
  const post = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState(post.title);
  const [type, setType] = useState(post.type);
  const [content, setContent] = useState(post.content);
  const [authorName, setAuthorName] = useState(post.author.name);
  const [authorEmail, setAuthorEmail] = useState(post.author.email);
  const [authorContact, setAuthorContact] = useState(post.author.contact);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPost = {
      id,
      title,
      type,
      content,
      author: {
        name: authorName,
        email: authorEmail,
        contact: authorContact,
      },
      timestamp: new Date().toISOString(), // Automatically update the timestamp on edit
    };

    console.log(updatedPost);

    updatePostSubmit(updatedPost);
    toast.success('Post Updated Successfully');

    return navigate(`/community/${id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Update Post</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Post Type</label>
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
              <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Post Content</label>
              <textarea
                id="content"
                name="content"
                className="border rounded w-full py-2 px-3"
                rows="6"
                placeholder="Write your post content here"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <h3 className="text-2xl mb-5">Author Info</h3>

            <div className="mb-4">
              <label htmlFor="authorName" className="block text-gray-700 font-bold mb-2">Author Name</label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                className="border rounded w-full py-2 px-3"
                placeholder="Author's Name"
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
                placeholder="Author's Email"
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
                Update Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditCommunityPostPage;
