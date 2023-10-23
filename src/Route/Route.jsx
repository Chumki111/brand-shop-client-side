import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AddProduct from "../Page/AddProduct/AddProduct";
import MyCart from "../Page/MyCart/MyCart";
import Login from "../Components/Path/Login";
import Register from "../Components/Path/Register";
import ErrorPage from "../Page/Error/ErrorPage";
import LogoPage from "../Components/Banner/Section/LogoPage";
import Details from "../Components/Banner/Section/Details";
import Updates from "../Components/Banner/Section/Updates";
import PrivetRoute from "./PrivetRoute";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('/data.json'),
                
            },
            {
                path:'/brand/:name',
                element:<LogoPage></LogoPage>,
                loader:({params}) =>fetch(`http://localhost:5000/brandName/${params.name}`)
                
                
               
            },
            {
                path:'/details/:_id',
                element:<PrivetRoute><Details></Details></PrivetRoute>,
                loader:({params}) => fetch(`http://localhost:5000/brandName/brand/${params._id}`)
            },
            {
                path:'/updates/:_id',
                element:<PrivetRoute><Updates></Updates></PrivetRoute>,
                loader:({params}) => fetch(`http://localhost:5000/brandName/brand/${params._id}`)
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/myCart',
                element:<PrivetRoute><MyCart></MyCart></PrivetRoute>,
                loader:() => fetch('http://localhost:5000/cart')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default Route;