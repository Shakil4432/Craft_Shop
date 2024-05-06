import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Components/Pages/Home/Home"
import Login from "../LoginAndRegistration/Login";
import Register from "../LoginAndRegistration/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute1/PrivateRoute";
import Add_Jute_And_Wooden_Craft_Items from "../PrivateComponent/Add_Jute_And_Wooden_Craft_Items";
import CraftDetails from "../Pages/Home/CraftDetails";
import Allitems from "../Pages/Allitems/Allitems";
import MyItems from "../PrivateComponent/MyItems";
import NotFound from "../NotFound/NotFound";
import UpdateItem from "../PrivateComponent/UpdateItem";
import CategoryItems from "../CategoryItems/CategoryItems";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addjuteandwoodenitems",
        element: <PrivateRoute>
          <Add_Jute_And_Wooden_Craft_Items></Add_Jute_And_Wooden_Craft_Items>
        </PrivateRoute>
      },
      {
        path: '/allitems',
        element: <Allitems></Allitems>,
        loader: () => fetch('https://jute-and-wooden-craft-server-steel.vercel.app/JuteAndWoodenCraft'),
      },
      {
        path: '/myitems',
        element: <PrivateRoute>
          <MyItems></MyItems>
        </PrivateRoute>,
        loader: () => fetch('https://jute-and-wooden-craft-server-steel.vercel.app/JuteAndWoodenCraft'),
      },
      {
        path: '/updateitem/:id',
        element: <PrivateRoute>
          <UpdateItem></UpdateItem>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://jute-and-wooden-craft-server-steel.vercel.app/JuteAndWoodenCraft/${params.id}`)
      },
      {
        path: "/viewdetails/:id",
        element: <PrivateRoute>
          <CraftDetails></CraftDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://jute-and-wooden-craft-server-steel.vercel.app/JuteAndWoodenCraft/${params.id}`)
      },
      {
        path:'/categoriesitem',
        element:<CategoryItems></CategoryItems>
      }
      
    ]

  },

]);

export default router;