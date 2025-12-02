    import { createBrowserRouter } from "react-router-dom";
    import App from "../App";
    import About from "../sections/About";
    import Services from "../sections/Services";
    import Portfolio from "../sections/Portfolio";
    import Contact from "../sections/Contact";
    import Testimonials from "../sections/Testimonials";
    import { Home } from "../pages/Home";

    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        {
            index: true,
            element: <Home />,
        },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "work", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "testimonials", element: <Testimonials /> },
        ],
    },
    ]);

    export default router;
