import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import ClientList from "./components/ClientList";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SignUpForm from "./components/SignUpForm";
import { Employee } from "./Employee";
import BookingForm from "./components/BookingForm";
import About from "./pages/About";
import Footer from "./components/Footer";
import EmployeesPortal from "./pages/EmployeesPortal";

export default function App() {
  return (
    <>
      <Router>
        <Navigation window={undefined} />
        <Routes>
          <Route
            path="/booking"
            element={
              <BookingForm
                open={false}
                onClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route
            path="/employees"
            element={
              <EmployeeList
                onSelectEmployee={function (_employee: Employee): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/employeesportal" element={<EmployeesPortal />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
