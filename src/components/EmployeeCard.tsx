import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Employee } from "../Employee";

interface EmployeeCardProps {
  employee: Employee;
  onBookMeNowClick: (employee: Employee) => void;
  isAuthenticated: boolean;
}

export default function EmployeeCard({
  employee,
  onBookMeNowClick,
}: EmployeeCardProps) {
  const handleBookNowClick = () => {
    onBookMeNowClick(employee);
  };

  return (
    <Card
      style={{
        maxWidth: 345,
        height: "100%",
        backgroundColor: "#fff0f0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Box style={{ textAlign: "center" }}>
          <Avatar
            src={employee.emp_image_path}
            alt={employee.emp_name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              margin: "auto",
            }}
          />
          <Typography variant="h5">{employee.emp_name}</Typography>
          <Typography variant="body1" gutterBottom color="secondary">
            <b>{employee.emp_position}</b>
          </Typography>
        </Box>
        <Typography variant="body1">
          <b>Age:</b> {employee.emp_age}
        </Typography>
        <Typography variant="body1">
          <b>Bio:</b> {employee.emp_bio}
        </Typography>
      </CardContent>
      <CardActions
        style={{ marginTop: "auto", display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={handleBookNowClick}
        >
          Book Me Now
        </Button>
      </CardActions>
    </Card>
  );
}
