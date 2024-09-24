import React from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostPageSing = ({ deletePost }) => {  // Change parameter name
    const { id } = useParams();
    const post = useLoaderData(); // Change variable name to post
    const navigate = useNavigate();

    const onDeleteClick = (postId) => {  // Change parameter name
        const confirm = window.confirm('Are you sure you want to delete this post?'); // Update message
        if (!confirm) {
           return;
        }
        deletePost(postId);
        toast.success('Post deleted successfully'); // Update message
        navigate('/posts'); // Update navigation path
    }

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/posts" // Update link path
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Post Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-gray-500 mb-4">{post.type}</div> {/* Update to post */}
                                <h1 className="text-3xl font-bold mb-4">
                                    {post.title} {/* Update to post */}
                                </h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <FaMapMarker className='text-lg text-orange-700 mr-1' />
                                    <p className="text-orange-700">{post.location}</p> {/* Update to post */}
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Post Description {/* Update to Post Description */}
                                </h3>

                                <p className="mb-4">
                                    {post.description} {/* Update to post */}
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4">{post.salary} / Year</p> {/* Update to post */}
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            {/* <!-- Company Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                <h2 className="text-2xl">{post.company.name}</h2> {/* Update to post */}

                                <p className="my-2">
                                    {post.company.description} {/* Update to post */}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {post.company.contactEmail} {/* Update to post */}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">{post.company.contactPhone} {/* Update to post */}</p>
                            </div>

                            {/* <!-- Manage --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Post</h3>
                                <Link
                                    to={`/edit-posts/${post.id}`} // Update to Post
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Post</Link> {/* Update to Post */}
                                <button
                                    onClick={() => onDeleteClick(post.id)} // Update to post
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Post {/* Update to Post */}
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

const communityPostLoader  = async ({ params }) => { // Update function name
    const res = await fetch(`/api/posts/${params.id}`); // Update to posts
    const data = await res.json();
    return data;
}

export { PostPageSing as default, communityPostLoader  }; // Export with updated name
