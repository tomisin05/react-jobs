// import React from 'react'
// import HomePage from './pages/HomePage'
// import MainLayout from './layouts/MainLayout'
// import JobPage from './pages/JobPage'
// import NotFoundPage from './pages/NotFoundPage'
// import JobPageSing, { jobLoader } from './pages/JobPageSing'
// import AddJobPage from './pages/AddJobPage'
// import EditJobPage from './pages/EditJobPage'

// import { 
//   Route, 
//   createBrowserRouter, 
//   createRoutesFromElements, 
//   RouterProvider 
// } from 'react-router-dom'



// const App = () => {
//   //add new job
//   const addJob = async (newjob) => {
//     const res = await fetch('/api/jobs', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newjob)
//     })
//     return
    
//   }

//   //delete job
//   const deleteJob = async (id) => {
//     const res = await fetch(`/api/jobs/${id}`, {
//       method: 'DELETE'
//     })
//     return

//   }

//   //update job
//   const updateJob = async (job) => {
//     const res = await fetch(`/api/jobs/${job.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(job)
//     })
//     return

//   }
  
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<MainLayout/>}>
//       <Route index element= {<HomePage/>}/>
//       <Route path = "/jobs" element= {<JobPage/>}/>
//       <Route path = "/edit-jobs/:id" element= {<EditJobPage updateJobSubmit={updateJob}/>} loader = {jobLoader}/>
      
//       <Route path = "/add-job" element= {<AddJobPage addJobSubmit={ addJob }/>}/>
//       <Route path = "/jobs/:id" element= {<JobPageSing deleteJob={deleteJob}/>} loader = {jobLoader}/>
//       <Route path = "*" element= {<NotFoundPage/>}/>
      
//       </Route>
        
//     )
//   )
//   return <RouterProvider router={router} />
// }
// export default App


import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import PostPage from './pages/PostPage'; // Main page for Community Posts
import NotFoundPage from './pages/NotFoundPage';
import PostPageSing, { communityPostLoader } from './pages/PostPageSing'; // Page for single Community Post
import AddCommunityPostPage from './pages/AddCommunityPostPage'; // Page for adding a new Community Post
import EditCommunityPostPage from './pages/EditCommunityPostPage'; // Page for editing an existing Community Post

import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';


const App = () => {
  // Add new Community Post
  const addCommunityPost = async (newPost) => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    });
    return res.json(); // Return the created post
  };

  // Delete Community Post
  const deleteCommunityPost = async (id) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
    return res.json(); // Return the response from deletion
  };

  // Update Community Post
  const updateCommunityPost = async (post) => {
    const res = await fetch(`/api/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    return res.json(); // Return the updated post
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        
        {/* Community Posts Routes */}
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/add" element={<AddCommunityPostPage addPostSubmit={addCommunityPost} />} />
        <Route path="/posts/edit/:id" element={<EditCommunityPostPage updatePostSubmit={updateCommunityPost} />} />
        <Route path="/posts/:id" element={<PostPageSing deleteCommunityPost={deleteCommunityPost} />} loader={communityPostLoader} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
