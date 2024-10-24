import './App.css'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage';
const routerDefinition = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/' element={<HomePage/>}/>

  </Route>
);
const router = createBrowserRouter(routerDefinition);
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
