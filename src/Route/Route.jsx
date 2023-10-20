import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AddProduct from "../Page/AddProduct/AddProduct";
import MyCart from "../Page/MyCart/MyCart";
import Login from "../Components/Path/Login";
import Register from "../Components/Path/Register";
import ErrorPage from "../Page/Error/ErrorPage";
import LogoPage from "../Components/Banner/Section/LogoPage";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('data.json'),
                
            },
            {
                path:'/brand/:name',
                element:<LogoPage></LogoPage>,
                // loader:({params}) =>fetch(`http://localhost:5000/brandName/${params.name}`)
                
                
               
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/myCart',
                element:<MyCart></MyCart>
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