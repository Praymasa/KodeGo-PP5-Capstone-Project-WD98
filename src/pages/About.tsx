import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Zoom,
  useScrollTrigger,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Cleaning from "../../public/Images/housekeeping/about-cleaning-service.jpeg";
import Childcare from "../../public/Images/ChildCare/about-nanny-services.webp";
import Seniorcare from "../../public/Images/SeniorCare/Seniors.jpg";
import "./About.css";

export default function About() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ScrollTop = (props: { children: React.ReactElement }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });
    return (
      <Zoom in={trigger}>
        <div
          onClick={handleScrollTop}
          role="presentation"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 100,
          }}
        >
          {props.children}
        </div>
      </Zoom>
    );
  };

  return (
    <>
      <Container>
        <Box sx={{ mx: 2, my: 7 }}>
          <Typography
            variant="h4"
            className="bottom-line"
            textAlign={"center"}
            marginBottom={5}
          >
            <span>A</span>bout <span>U</span>s
          </Typography>
          <Typography variant="body1" marginBottom={3} textAlign={"center"}>
            Caring for her four children while juggling a demanding full-time
            job and household responsibilities, owners knows firsthand the
            overwhelming challenges many parents face. Struggling with stress
            and depression from this balancing act, she found inspiration in her
            own struggles. This led her to establish YourBest Care, a
            compassionate initiative born from her desire to support others
            experiencing similar hardships. With a mission to alleviate the
            burdens of fellow parents, YourBest Care offers comprehensive
            housekeeping, childcare, and senior care services. the Founder's
            journey from adversity to empathy drives our commitment to providing
            reliable and compassionate care for families in need.
          </Typography>
          <Typography variant="body1" marginBottom={5} textAlign={"center"}>
            At YourBest Care, we are your one-stop service provider for
            housekeeping, child care, and senior care. Our primary mission is to
            provide top-tier, personalized solutions to meet the varied needs of
            every household.
          </Typography>

          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Avatar
                variant="square"
                src={Cleaning}
                sx={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  marginBottom: 2,
                }}
              />
              <Box display={"flex"} justifyContent={"center"} gap={2}>
                <Avatar
                  variant="square"
                  src={Childcare}
                  sx={{ width: "48%", height: "50%" }}
                />
                <Avatar
                  variant="square"
                  src={Seniorcare}
                  sx={{ width: "48%", height: "50%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ul>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; Our <b>Housekeeping Service</b> offers meticulous and
                  dependable domestic assistance, ensuring that your home
                  remains a sanctuary of comfort and cleanliness. Our team of
                  professionally trained housekeepers are committed to
                  maintaining a pristine environment for you and your family,
                  allowing you more time to focus on what truly matters —
                  spending quality time with your loved ones.
                </li>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; Our <b>Child Care Service</b> is designed to provide a
                  nurturing and safe environment for your children. Our
                  experienced caregivers are well-versed in child development
                  and education, providing not only custodial care but also
                  contributing to the intellectual and emotional growth of your
                  children. We understand the importance of entrusting the care
                  of your little ones to someone else, and we take this
                  responsibility very seriously.
                </li>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; Our <b>Senior Care Service</b> is a testament to our
                  commitment to take care of your elderly loved ones with the
                  utmost respect and compassion. We provide a range of services,
                  from companionship to medication management, all tailored to
                  meet the unique needs of each individual. Our caregivers are
                  trained to offer both physical and emotional support, ensuring
                  your loved ones are comfortable, safe, and engaged.
                </li>
              </ul>
            </Grid>
          </Grid>

          <Grid container spacing={7} marginBottom={5}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" textAlign={"center"} gutterBottom>
                <b>
                  <span>O</span>ur Mission
                </b>
              </Typography>
              <ul>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; We provide compassionate and reliable care services to
                  families, empowering them to thrive amidst life's demands.
                </li>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; We are dedicated to offering top-tier housekeeping,
                  childcare, and senior care solutions, ensuring peace of mind
                  and well-being for every member of the household.
                </li>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; With integrity, professionalism, and genuine care at
                  the core of our approach, we strive to make a positive
                  difference in the lives of those we serve.
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" textAlign={"center"} gutterBottom>
                <b>
                  <span>O</span>ur Vision
                </b>
              </Typography>
              <ul>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; To be the trusted partner and beacon of support for
                  families navigating the complexities of modern life.
                </li>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; We envision a world where every parent can confidently
                  pursue their career while ensuring the well-being of their
                  loved ones, knowing they have reliable care services they can
                  depend on.
                </li>
                <li>
                  <Diversity2Icon color="secondary" />
                  &nbsp; By fostering strong relationships built on trust,
                  empathy, and excellence, we aspire to become the leading
                  provider of holistic care solutions, enriching the lives of
                  families across communities.
                </li>
              </ul>
            </Grid>
          </Grid>

          <Box>
            <Typography variant="body1" marginBottom={3} textAlign={"center"}>
              At{" "}
              <b>
                <span>Y</span>our<span>B</span>est Care
              </b>
              , we take great pride in our dedicated and compassionate team of
              professionals who provide housekeeping, child care, and senior
              care services. Our employees are carefully selected, extensively
              trained, and committed to delivering exceptional care to our
              clients. Here is an overview of the roles and responsibilities of
              our staff in each service:
            </Typography>
            <Box>
              <Box>
                <Typography marginBottom={5}>Housekeeping Staff:</Typography>

                <Grid container gap={2} justifyContent={"center"}>
                  <Grid item xs={12} sm={4} md={3} lg={2} border={1} p={2}>
                    <Diversity3Icon color="secondary" />
                    <Typography marginBottom={2}>
                      Our housekeeping staff consists of experienced
                      professionals who are skilled in maintaining a clean and
                      organized living environment.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} lg={2} border={1} p={2}>
                    <CleaningServicesIcon color="secondary" />
                    <Typography marginBottom={2}>
                      They are trained in various cleaning techniques, including
                      dusting, vacuuming, mopping, and sanitizing.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} lg={2} border={1} p={2}>
                    <SettingsAccessibilityIcon color="secondary" />
                    <Typography marginBottom={2}>
                      Our housekeeping team pays attention to detail, ensuring
                      that every corner of your home is spotless and hygienic.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} lg={2} border={1} p={2}>
                    <SanitizerIcon color="secondary" />
                    <Typography marginBottom={2}>
                      They are knowledgeable about different cleaning products
                      and equipment, using them efficiently and effectively.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} lg={2} border={1} p={2}>
                    <VerifiedUserIcon color="secondary" />
                    <Typography marginBottom={2}>
                      Our housekeeping staff respects your privacy and values
                      the security of your belongings.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Typography gutterBottom>Child Care Providers:</Typography>
                <EscalatorWarningIcon color="secondary" />
                <Typography marginBottom={2}>
                  Our child care providers are experienced caregivers who
                  prioritize the safety, well-being, and development of
                  children.
                </Typography>
                <FamilyRestroomIcon color="secondary" />
                <Typography marginBottom={2}>
                  They create a nurturing and stimulating environment that
                  promotes learning, creativity, and social interaction.
                </Typography>
                <BabyChangingStationIcon color="secondary" />
                <Typography marginBottom={2}>
                  Our child care team follows age-appropriate routines, engaging
                  children in educational activities, playtime, and nutritious
                  meals.
                </Typography>
                <LocalPharmacyIcon color="secondary" />
                <Typography marginBottom={2}>
                  They are trained in first aid and CPR, ensuring the safety and
                  prompt response to any emergencies.
                </Typography>
                <VolunteerActivismIcon color="secondary" />
                <Typography marginBottom={2}>
                  Our child care providers build strong relationships with
                  children, fostering a sense of trust and security.
                </Typography>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>

        <ScrollTop>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{
              borderRadius: "50%",
              textTransform: "capitalize",
            }}
          >
            <KeyboardArrowUpIcon />
            Top
          </Button>
        </ScrollTop>
      </Container>
    </>
  );
}
