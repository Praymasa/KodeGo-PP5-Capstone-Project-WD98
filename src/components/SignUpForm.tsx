import { useEffect, useState } from "react";
import { TextField, Button, Typography, Container, Paper } from "@mui/material";
import { api, fetchClients } from "../servicesApi";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_password: "",
    contact_number: "",
    detailed_address: "",
    city: "",
    province: "",
  });
  const [, setClients] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchClientsData();
  }, []);

  const fetchClientsData = async () => {
    try {
      const data = await fetchClients();
      setClients(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contactNumberRegex = /^\d{3}-?\d{3}-?\d{4}$/;
    if (!contactNumberRegex.test(formData.contact_number)) {
      setMessage("Please enter a valid contact number (e.g., 123-456-7890).");
      return;
    }

    try {
      const response = await api.post("/clients.php", formData);
      setMessage(response.data.message);
      setFormData({
        client_name: "",
        client_email: "",
        client_password: "",
        contact_number: "",
        detailed_address: "",
        city: "",
        province: "",
      });
      console.log(formData);
      fetchClientsData();
    } catch (error: any) {
      setMessage(error.response?.data.error ?? "An error occurred");
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginY: 7 }}>
      <Paper
        elevation={12}
        sx={{
          p: 3,
          backgroundColor: "#fff0f0",
          boxShadow: "15px 15px #A53860",
          border: "1px solid black",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="client_name"
            value={formData.client_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            name="client_email"
            value={formData.client_email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="client_password"
            value={formData.client_password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact Number"
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Detailed Address"
            type="text"
            name="detailed_address"
            value={formData.detailed_address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Province"
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              display: "flex",
              justifySelf: "center",
              m: "auto",
            }}
          >
            Sign Up
          </Button>
        </form>
        {message && (
          <Typography variant="body1" color="error" align="center">
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default SignUpForm;
