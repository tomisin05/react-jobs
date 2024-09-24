import React from 'react';
import PostListing from './PostListing'; // Updated import to use PostListing
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const PostListings = ({ isHome = false }) => {
    const [posts, setPosts] = useState([]); // Changed state variable from jobs to posts
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const apiUrl = isHome ? "/api/posts?_limit=3" : "/api/posts"; // Updated endpoint for community posts
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { isHome ? "Recent Posts" : "Browse Posts" } {/* Changed the title accordingly */}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <PostListing key={post.id} post={post} /> // Updated to use PostListing
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default PostListings;