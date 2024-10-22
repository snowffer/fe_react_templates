import {
  createBrowserRouter,
} from "react-router-dom"
import MainPage from 'pages/MainPage/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/main_page",
    element: <MainPage />,
  }
])

export default router