import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    name: "Sign Up",
    path: "/singup",
    element: <Signup />,
  },
  {
    name: "Sign In",
    path: "/singin",
    element: <Login />,
  },
];

export default routes;
