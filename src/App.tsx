import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import JobsPages from './pages/JobsPages'
import AddJobsPage from './pages/AddJobsPage'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPages />} />
      <Route path='/add-job' element={<AddJobsPage />} />
    </Route>
  ))
  return <RouterProvider router={router} />

}

export default App