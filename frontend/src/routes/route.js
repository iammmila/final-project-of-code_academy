import Home from "../pages/Home"
import About from "../pages/About"
import Add from "../pages/Add"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import Blog from "../pages/Blog"
import MainRoot from "../pages/MainRoot"
export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            }, {
                path: "about",
                element: <About />
            }, {
                path: "services",
                element: <Services />
            }, {
                path: "blog",
                element: <Blog />
            }, {
                path: "contact",
                element: <Contact />
            }, {
                path: "add",
                element: <Add />
            }
        ]
    }
]