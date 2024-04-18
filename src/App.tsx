import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import routes from "./routes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <>
        <Navigation window={undefined} />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
