import { Avatar, Button, Divider, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Family from "../../public/Images/Family at home.png";
import FamilyLife from "../../public/Images/home-front.png";
import FamilyPhone from "../../public/Images/family-phone.webp";
import HomeCare from "../../public/Images/Loyal-Employment-Home.png";
import "../App.css";
import React from "react";
import BookingForm from "../components/BookingForm";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Home() {
  const [openBookingModal, setOpenBookingModal] = React.useState(false);

  const handleBookingModalOpen = () => {
    setOpenBookingModal(true);
  };

  const handleBookingModalClose = () => {
    setOpenBookingModal(false);
  };

  return (
    <>
      <Box id="welcome-pg">
        <Grid
          container
          spacing={2}
          sx={{
            py: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "auto", md: "90vh" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Paper
              elevation={12}
              className="welcome-pg-img"
              sx={{
                backgroundColor: "#4e4d66",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "auto",
                mx: 2,
                py: 2,
              }}
            >
              <Avatar
                variant="square"
                src={Family}
                sx={{ width: "75%", height: "75%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                px: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{ p: 2, boxShadow: "-5px -5px #A53860" }}
              >
                <span>B</span>alanc<span>E</span> <span>S</span>tar
                <span>T</span>
                's at Home
                <Diversity2Icon color="secondary" />
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: "inline", mb: 5, boxShadow: "5px 5px #A53860" }}
              >
                <span>Your</span> Home, Our <span>Care</span>.
              </Typography>
              <Button
                onClick={handleBookingModalOpen}
                variant="contained"
                color="secondary"
                sx={{
                  alignSelf: "flex-end",
                  marginRight: 6,
                  mb: 5,
                  boxShadow: "5px 5px #4e4d66",
                }}
              >
                Book a Service Now!
              </Button>
              <Grid container spacing={2} sx={{ mt: "auto" }}>
                <Grid item>
                  <Button
                    component={HashLink}
                    to="/services#housekeeping"
                    variant="contained"
                    className="btn-links"
                  >
                    Housekeeping
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={HashLink}
                    to="/services#seniorcare"
                    variant="contained"
                    className="btn-links"
                  >
                    Senior Care
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={HashLink}
                    to="/services#childcare"
                    variant="contained"
                    className="btn-links"
                  >
                    Child Care
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        id="hth"
        sx={{
          m: 2,
          my: { xs: 2, lg: 15 },
          overflow: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            visibility: { xs: "visible", md: "hidden" },
            my: 2,
          }}
        >
          Here To Help to be at <span>Y</span>our<span>B</span>est.
        </Typography>

        <Avatar
          variant="square"
          src={FamilyLife}
          sx={{
            float: "right",
            width: { xs: "100%", sm: "50%" },
            height: { xs: "50%", xl: "65%" },
            objectFit: "cover",
            m: { xs: 2, sm: 2 },
            border: "1px solid black",
            boxShadow: { xs: "15px 15px  #A53860", md: "-15px -15px  #A53860" },
            borderRadius: "5px",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            marginTop: { xs: 2, xl: 10 },
            marginLeft: { xs: 0, lg: 5 },
            maxWidth: 500,
          }}
        >
          <span className="family-word">Family Life</span> is challenging, and
          so, too, is the role mothers and fathers play at work and at home.
          Juggling to the roles as a parent, partner, employee, and household
          manager is a delicate balancing act. From prioritizing tasks to
          maintaining communication and finding time for self-care, navigating
          these responsibilities requires finesse.
        </Typography>
        <br />
        <Typography
          variant="h4"
          sx={{
            display: "inline",
            visibility: { xs: "hidden", md: "visible" },
            position: { xs: "absolute", md: "relative" },
            my: 5,
            marginLeft: { xs: 0, lg: 20 },
            boxShadow: "10px 10px #A53860",
          }}
        >
          Here To Help to be at <span>Y</span>our<span>B</span>est.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginLeft: { xs: 0, lg: 30 }, marginTop: 5 }}
        >
          We offer{" "}
          <HashLink to={"/services#housekeeping"} className="hashlink">
            Housekeeping
          </HashLink>{" "}
          ,{" "}
          <HashLink to={"/services#childcare"} className="hashlink">
            Child Care
          </HashLink>
          , and{" "}
          <HashLink to={"/services#seniorcare"} className="hashlink">
            Senior Care
          </HashLink>{" "}
          services to ease the burden of managing multiple responsibilities. By
          outsourcing these tasks to our professionals, you can reclaim valuable
          time to focus on work, family, and personal well-being. Our services
          not only ensure a clean and organized living environment but also
          provide expert care for children and seniors, offering peace of mind
          and support for busy individuals balancing numerous roles.
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          id: "why",
          m: 2,
          mb: 7,
          mt: { xs: 2, md: 15 },
          overflow: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            visibility: { xs: "visible", md: "hidden" },
            position: { xs: "relative", md: "absolute" },
            m: 3,
          }}
        >
          Why Choose <span className="color">U</span>s?
        </Typography>
        <Typography
          variant="body1"
          textAlign={{ xs: "start", md: "center" }}
          sx={{
            visibility: { xs: "visible", sm: "hidden" },
            position: { xs: "relative", sm: "absolute" },
            marginBottom: 5,
          }}
        >
          Balancing work and family can be a daunting task for working parents.
          At{" "}
          <b>
            <span className="color">Y</span>
          </b>
          our
          <b>
            <span className="color">B</span>
          </b>
          est Care, we understand the challenges you face. Our mission is
          simple: to support your needs and help you achieve your goals. With
          our caring team by your side, together we can conquer challenges,
          accomplish each other's goals, and thrive.
        </Typography>

        <Avatar
          variant="square"
          src={HomeCare}
          className="why-img"
          sx={{
            height: { xs: "100%", sm: "50%", xl: "30%" },
            width: { xs: "100%", sm: "50%", xl: "30%" },
            objectFit: "cover",
            float: "right",
          }}
        />

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            visibility: { xs: "hidden", md: "visible" },
            position: { xs: "absolute", md: "relative" },
            marginBottom: 2,
          }}
        >
          Why Choose <span className="color">U</span>s?
        </Typography>
        <Typography
          variant="body1"
          textAlign={{ xs: "start", md: "center" }}
          sx={{
            visibility: { xs: "hidden", sm: "visible" },
            position: { xs: "absolute", sm: "relative" },
            marginBottom: 5,
          }}
        >
          Balancing work and family can be a daunting task for working parents.
          At{" "}
          <b>
            <span className="color">Y</span>
          </b>
          our
          <b>
            <span className="color">B</span>
          </b>
          est Care, we understand the challenges you face. Our mission is
          simple: to support your needs and help you achieve your goals. With
          our caring team by your side, together we can conquer challenges,
          accomplish each other's goals, and thrive.
        </Typography>
        <Box
          className="why"
          sx={{ marginLeft: { xs: "0", md: 3 }, marginTop: { xs: 1, md: 3 } }}
        >
          <Typography variant="h6" className="color" gutterBottom>
            Quality Assurance of Service Providers
          </Typography>
          <Typography variant="body1" gutterBottom>
            We focus our efforts on bringing you the most capable and
            professional foreign domestic workers for you and your family. Your
            satisfaction is our top priority as we understand the need for
            someone that you can trust and rely on to take care of your family.
          </Typography>
          <Typography variant="h6" className="color" gutterBottom>
            Comprehensive Checks
          </Typography>
          <Typography variant="body1" gutterBottom>
            We have conducted comprehensive background checks and interviews to
            better understand the needs. It is particularly important so as to
            establish a better understanding and working relationship which
            would benefit both the employer and employee subsequently.
          </Typography>
          <Typography variant="h6" className="color" gutterBottom>
            True Care
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our sole purpose as a family is to ensure quality service and
            genuine care to you as our extended family. Your expectations are
            important to us.
          </Typography>
          <Typography variant="h6" className="color" gutterBottom>
            Flexibility
          </Typography>
          <Typography variant="body1" gutterBottom>
            Understanding the norm that sometimes nothing goes as planned, we
            dedicate our service to ensure that we are able to cater to your
            needs especially during the last unexpected service requests.
          </Typography>
          <Typography variant="h6" className="color" gutterBottom>
            Affordability
          </Typography>
          <Typography variant="body1" gutterBottom>
            We do everything we can to make our services as affordable as
            possible. Our budget flexibility extends all the way to employing
            the right amount of help at the right times to make a positive
            difference in our customers’ lives.
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box id="difference" margin={2}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              visibility: { xs: "visible", sm: "hidden" },
              position: { xs: "relative", sm: "absolute" },
              textAlign: "center",
            }}
          >
            What Makes <span className="color">U</span>s Different?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              visibility: { xs: "visible", sm: "hidden" },
              position: { xs: "relative", sm: "absolute" },
              textAlign: "center",
            }}
          >
            See Why Homeowners Nationwide Prefer Our Company.{" "}
            <small>
              <Link to={"/"}>visit blog post</Link>
            </small>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginTop: 2,
              visibility: { xs: "hidden", sm: "visible", md: "hidden" },
              position: { xs: "absolute", sm: "relative", md: "absolute" },
              textAlign: "center",
            }}
          >
            What Makes <span className="color">U</span>s Different?
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              visibility: { xs: "hidden", sm: "visible", md: "hidden" },
              position: { xs: "absolute", sm: "relative", md: "absolute" },
              textAlign: "center",
            }}
          >
            See Why Homeowners Nationwide Prefer Our Company.{" "}
            <small>
              <Link to={"/"}>visit blog post</Link>
            </small>
          </Typography>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              marginY: 5,
              marginX: { xs: 2, sm: 0 },
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Avatar
                variant="square"
                src={FamilyPhone}
                alt="Layered Image"
                sx={{
                  display: "block",
                  width: "auto",
                  height: "auto",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  position: "relative",
                  zIndex: 2,
                  borderRadius: 2,
                }}
              />
              <Paper
                elevation={12}
                style={{
                  position: "absolute",
                  top: 15,
                  left: 15,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  background: "#A53860",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              marginLeft: { xs: 0, sm: 5 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginTop: 2,
                marginBottom: { xs: 0, md: 2, lg: 5 },
                visibility: { xs: "hidden", md: "visible" },
                position: { xs: "absolute", md: "relative" },
                textAlign: "center",
              }}
            >
              What Makes <span className="color">U</span>s Different?
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                marginBottom: { xs: 0, md: 2, lg: 3 },
                visibility: { xs: "hidden", md: "visible" },
                position: { xs: "absolute", md: "relative" },
                textAlign: "center",
              }}
            >
              See Why Homeowners Nationwide Prefer Our Company.{" "}
              <small>
                <Link to={"/"}>visit blog post</Link>
              </small>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "left", md: "center" },
                mb: { xs: 3, lg: 10 },
              }}
            >
              We stand out and devoted in making exceptional customer care, and
              innovative solutions. Our commitment to quality, reliability, and
              transparent pricing ensures peace of mind for our clients. Through
              community engagement and values alignment, we build trust and
              loyalty. With positive testimonials and reviews, we prove our
              dedication to customer satisfaction. Choose us for a unique and
              personalized experience that exceeds expectations
            </Typography>
            <Button
              onClick={handleBookingModalOpen}
              variant="contained"
              color="secondary"
              sx={{
                display: "flex",
                justifySelf: "center",
                m: "auto",
              }}
            >
              Book a Service Now!
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <BookingForm
          open={openBookingModal}
          onClose={handleBookingModalClose}
        />
      </Box>
    </>
  );
}
