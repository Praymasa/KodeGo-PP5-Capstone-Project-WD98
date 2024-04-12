import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const managementTeam = [
  {
    name: "John Doe",
    position: "CEO",
    bio: "John Doe has extensive experience in the industry and has led the company to great success.",
    image: "../../public/Images/mgt-man3.png",
  },
  {
    name: "Jane Smith",
    position: "COO",
    bio: "Jane Smith is a seasoned professional with a proven track record in strategic planning and operations.",
    image: "../../public/Images/mgt-lady1.jpg",
  },
  {
    name: "Michael Johnson",
    position: "CFO",
    bio: "Michael Johnson is a finance expert with a strong background in financial management and analysis.",
    image: "../../public/Images/mgt-man1.png",
  },
  {
    name: "Emily Davis",
    position: "CTO",
    bio: "Emily Davis is a technology enthusiast who has spearheaded numerous successful digital transformation projects.",
    image: "../../public/Images/mgt-lady10.jpg",
  },
];

export default function ManagementTeam() {
  return (
    <>
      <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
        <Carousel>
          {managementTeam.map((member, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{ backgroundColor: "#fff0f0" }}
            >
              <CardMedia
                component="img"
                height="500px"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body1">{member.position}</Typography>
                <Typography variant="body1">{member.bio}</Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
