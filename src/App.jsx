import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobPage from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPageSing, { jobLoader } from './pages/JobPageSing'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'



const App = () => {
  //add new job
  const addJob = async (newjob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newjob)
    })
    return
    
  }

  //delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return

  }

  //update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return

  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
      <Route index element= {<HomePage/>}/>
      <Route path = "/jobs" element= {<JobPage/>}/>
      <Route path = "/edit-jobs/:id" element= {<EditJobPage updateJobSubmit={updateJob}/>} loader = {jobLoader}/>
      
      <Route path = "/add-job" element= {<AddJobPage addJobSubmit={ addJob }/>}/>
      <Route path = "/jobs/:id" element= {<JobPageSing deleteJob={deleteJob}/>} loader = {jobLoader}/>
      <Route path = "*" element= {<NotFoundPage/>}/>
      
      </Route>
        
    )
  )
  return <RouterProvider router={router} />
}
export default App