import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: '/browse',
    element : <Browse/>
  }
])

const Body = () => <RouterProvider router={appRouter} />

export default Body

