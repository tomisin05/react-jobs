import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import PostListings from '../components/PostListings'; // Renamed from JobListings
import ViewAllPosts from '../components/ViewAllPosts'; // Updated to match potential new component

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <PostListings isHome={true} /> {/* Updated to PostListings */}
      <ViewAllPosts /> {/* Updated to ViewAllPosts */}
    </>
  );
};

export default HomePage;
