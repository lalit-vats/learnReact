import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './views/dashboard/Home'
import Enquiry from './views/enquiry/Enquiry'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path : '',
                element : <Home/>
            },
            {
                path : '/enquiry',
                element : <Enquiry/>
            },
        ]
    }
])

export default routes;