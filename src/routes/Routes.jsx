import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewLayout from "../layout/NewLayout";
import News from "../pages/Home/News/News";
import Login from "../pages/Shared/Login/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Shared/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndCondition from "../pages/Shared/TermsAndCondition/TermsAndCondition";

const router = createBrowserRouter([
    {
        path:"/",
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:"/",
                element:<Navigate to='/category/0'></Navigate>
            },

            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/terms",
                element:<TermsAndCondition></TermsAndCondition>
            }
          
        ]
    },
    {
        path:"/category",
        element:<Main></Main>,
        children:[
            {
                path:":id",
                element:<Category></Category>,
                loader:({params}) => fetch(`https://the-news-dragon-server-souravbsk.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path:"news",
        element:<NewLayout></NewLayout>,
        children:[
            {
                path:":id",
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`https://the-news-dragon-server-souravbsk.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;