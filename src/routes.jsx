import About from "./About";
import App from "./App";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Works from "./Works";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "works",
                element: <Works />,
            },
        ]
    },

]

export default routes;