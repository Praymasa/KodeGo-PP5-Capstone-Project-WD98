import { useEffect, useState } from "react";
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { fetchEmployees } from "../servicesApi";
import EmployeeCard from "./EmployeeCard";
import ReservationForm from "./ReservationForm";
import { Employee } from "../Employee";

interface Props {
  onSelectEmployee: (employee: Employee) => void;
}

function EmployeeList({}: Props) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [showReservationForm, setShowReservationForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchData();
  }, []);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setSelectedPosition("");
  };

  const handlePositionChange = (position: string) => {
    setSelectedPosition(position);
  };

  const handleBookMeNowClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowReservationForm(true);
    console.log("Clicked Employee:", employee);
  };

  const locations = Array.from(
    new Set(employees.map((employee) => employee.emp_location))
  );

  const positions = Array.from(
    new Set(
      employees
        .filter((employee) => employee.emp_location === selectedLocation)
        .map((employee) => employee.emp_position)
    )
  );

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: "1rem" }}>
        <Typography color="secondary">Select Location</Typography>
        {locations.map((location, index) => (
          <Box key={location}>
            {index > 0 && <span className="breadcrumb-divider">/</span>}
            <Link
              color={selectedLocation === location ? "inherit" : "primary"}
              onClick={() => handleLocationChange(location)}
            >
              {location}
            </Link>
          </Box>
        ))}
      </Breadcrumbs>

      {selectedLocation && (
        <Box>
          <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: "1rem" }}>
            <Typography color="secondary">Select Position</Typography>
            {positions.map((position, index) => (
              <div key={position}>
                {index > 0 && <span className="breadcrumb-divider">/</span>}
                <Link
                  color={selectedPosition === position ? "inherit" : "primary"}
                  onClick={() => handlePositionChange(position)}
                >
                  {position}
                </Link>
              </div>
            ))}
          </Breadcrumbs>

          <Typography variant="h6" gutterBottom>
            Employees in {selectedLocation}
          </Typography>
          <Grid container spacing={2}>
            {employees
              .filter(
                (employee) =>
                  employee.emp_location === selectedLocation &&
                  (!selectedPosition ||
                    employee.emp_position === selectedPosition)
              )
              .map((employee) => (
                <Grid item key={employee.emp_id} xs={12} sm={6} md={4} xl={3}>
                  <EmployeeCard
                    employee={employee}
                    onBookMeNowClick={handleBookMeNowClick}
                    isAuthenticated={false}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      )}

      {showReservationForm && (
        <ReservationForm
          employee={selectedEmployee!}
          onClose={() => setShowReservationForm(false)}
        />
      )}
    </Box>
  );
}

export default EmployeeList;
