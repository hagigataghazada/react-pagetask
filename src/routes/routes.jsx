import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../errors/404";
import Contact from "../pages/Contact";
import ContactMessages from "../pages/ContactMessages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/contact-messages",
    element: <ContactMessages/>
  },
]);