import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Components/Pages/Home/Home"
import Login from "../LoginAndRegistration/Login";
import Register from "../LoginAndRegistration/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute1/PrivateRoute";
import Add_Jute_And_Wooden_Craft_Items from "../PrivateComponent/Add_Jute_And_Wooden_Craft_Items";
import PrivateRoute2 from "../PrivateRoutes/PrivateRoute2";
import PrivateRoute3 from "../PrivateRoutes/PrivateRoute3";
import CraftDetails from "../Pages/Home/CraftDetails";
import Allitems from "../Pages/Allitems/Allitems";
import MyItems from "../PrivateComponent/MyItems";
import NotFound from "../NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
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
        path:'/allitems',
        element:<Allitems></Allitems>,
        loader:()=>fetch('http://localhost:5000/JuteAndWoodenCraft'),
      },
     {
      path:'/myitems',
      element:<PrivateRoute3>
        <MyItems></MyItems>
      </PrivateRoute3>,
      loader:()=>fetch('http://localhost:5000/JuteAndWoodenCraft'),
     },
      {
        path:"/viewdetails/:id",
        element:<PrivateRoute2>
          <CraftDetails></CraftDetails>
        </PrivateRoute2>,
        loader:({params})=>fetch(`http://localhost:5000/JuteAndWoodenCraft/${params.id}`)
      }
    ]
    
  },
  
]);

export default router;