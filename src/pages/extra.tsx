import {
  Box,
  Button,
  Container,
  Typography,
  Zoom,
  useScrollTrigger,
} from "@mui/material";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import EmployeeList from "../components/EmployeeList";
import { Employee } from "../Employee";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BestEmployee from "../components/BestEmployee";
import ManagementTeam from "../components/Management";

interface SideNavItem {
  label: string;
  path: string;
}

const sideNavItems: SideNavItem[] = [
  { label: "About Us", path: "/about" },
  { label: "Management Team", path: "/about#team" },
  { label: "Reviews", path: "/about#reviews" },
  { label: "Recommendation from our Clients", path: "/about#recommendations" },
  { label: "Member of the Workforce", path: "/about#workforce" },
];

export default function About() {
  const [selectedSideNavLink, setSelectedSideNavLink] = useState<string>(
    sideNavItems[0].path
  );
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSelectedMenu = (path: string) => {
    setSelectedSideNavLink(path);
  };

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
    <Box
      sx={{
        display: "flex",
        my: 15,
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "25%",
          marginRight: isSmallScreen ? 0 : 2,
          marginBottom: isSmallScreen ? 2 : 0,
          position: "sticky",
          top: 55,
          zIndex: 100,
          maxHeight: "calc(30vh - 10px)",
          overflowY: "auto",
          backgroundColor: "#ebd6de",
        }}
      >
        {sideNavItems.map((item) => (
          <Typography key={item.label}>
            <Button
              style={{
                color: "#000",
                textDecoration: "none",
                display: "block",
                marginBottom: isSmallScreen ? "10px" : 0,
                fontWeight:
                  selectedSideNavLink === item.path ? "bold" : "normal",
              }}
              component={Link}
              to={item.path}
              smooth
              onClick={() => handleSelectedMenu(item.path)}
            >
              {item.label}
            </Button>
          </Typography>
        ))}
      </Box>
      <Box sx={{ flex: 1 }}>
        <Container className="span">
          {selectedSideNavLink === sideNavItems[0].path && (
            <Box>
              <Typography variant="h4" textAlign="center" marginBottom={5}>
                <span>A</span>bout <span>U</span>s
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                Caring for her four children while juggling a demanding
                full-time job and household responsibilities, Princess Ymasa
                knows firsthand the overwhelming challenges many parents face.
                Struggling with stress and depression from this balancing act,
                she found inspiration in her own struggles. This led her to
                establish YourBest Care, a compassionate initiative born from
                her desire to support others experiencing similar hardships.
                With a mission to alleviate the burdens of fellow parents,
                YourBest Care offers comprehensive housekeeping, childcare, and
                senior care services. the Founder's journey from adversity to
                empathy drives our commitment to providing reliable and
                compassionate care for families in need.
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                At{" "}
                <b>
                  <span>Y</span>our<span>B</span>est Care
                </b>
                , we are your one-stop service provider for housekeeping, child
                care, and senior care. Our primary mission is to provide
                top-tier, personalized solutions to meet the varied needs of
                every household.
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                Our <b>Housekeeping Service</b> offers meticulous and dependable
                domestic assistance, ensuring that your home remains a sanctuary
                of comfort and cleanliness. Our team of professionally trained
                housekeepers are committed to maintaining a pristine environment
                for you and your family, allowing you more time to focus on what
                truly matters — spending quality time with your loved ones.
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                Our <b>Child Care Service</b> is designed to provide a nurturing
                and safe environment for your children. Our experienced
                caregivers are well-versed in child development and education,
                providing not only custodial care but also contributing to the
                intellectual and emotional growth of your children. We
                understand the importance of entrusting the care of your little
                ones to someone else, and we take this responsibility very
                seriously.
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                Our <b>Senior Care Service</b> is a testament to our commitment
                to take care of your elderly loved ones with the utmost respect
                and compassion. We provide a range of services, from
                companionship to medication management, all tailored to meet the
                unique needs of each individual. Our caregivers are trained to
                offer both physical and emotional support, ensuring your loved
                ones are comfortable, safe, and engaged.
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                At{" "}
                <b>
                  <span>Y</span>our<span>B</span>est Care
                </b>
                , we understand the complexities of managing a household while
                trying to balance work and personal life. Our suite of services
                are designed to alleviate these challenges, providing you with
                the peace of mind you deserve. Trust us to care for your home,
                your children, and your elderly loved ones just like they were
                our own.
              </Typography>
              <Typography variant="h5" gutterBottom>
                <b>
                  <span>O</span>ur Mission
                </b>
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                At{" "}
                <b>
                  <span>Y</span>our<span>B</span>est Care
                </b>
                , our mission is to provide compassionate and reliable care
                services to families, empowering them to thrive amidst life's
                demands. We are dedicated to offering top-tier housekeeping,
                childcare, and senior care solutions, ensuring peace of mind and
                well-being for every member of the household. With integrity,
                professionalism, and genuine care at the core of our approach,
                we strive to make a positive difference in the lives of those we
                serve.
              </Typography>
              <Typography variant="h5" gutterBottom>
                <b>
                  <span>O</span>ur Vision
                </b>
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                Our vision at{" "}
                <b>
                  <span>Y</span>our<span>B</span>est Care
                </b>
                , is to be the trusted partner and beacon of support for
                families navigating the complexities of modern life. We envision
                a world where every parent can confidently pursue their career
                while ensuring the well-being of their loved ones, knowing they
                have reliable care services they can depend on. By fostering
                strong relationships built on trust, empathy, and excellence, we
                aspire to become the leading provider of holistic care
                solutions, enriching the lives of families across communities.
              </Typography>
              <Box>
                <Typography variant="body1" marginBottom={3}>
                  At{" "}
                  <b>
                    <span>Y</span>our<span>B</span>est Care
                  </b>
                  , we take great pride in our dedicated and compassionate team
                  of professionals who provide housekeeping, child care, and
                  senior care services. Our employees are carefully selected,
                  extensively trained, and committed to delivering exceptional
                  care to our clients. Here is an overview of the roles and
                  responsibilities of our staff in each service:
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Housekeeping Staff:
                </Typography>
                <ul>
                  <li>
                    Our housekeeping staff consists of experienced professionals
                    who are skilled in maintaining a clean and organized living
                    environment.
                  </li>
                  <li>
                    They are trained in various cleaning techniques, including
                    dusting, vacuuming, mopping, and sanitizing.
                  </li>
                  <li>
                    Our housekeeping team pays attention to detail, ensuring
                    that every corner of your home is spotless and hygienic.
                  </li>
                  <li>
                    They are knowledgeable about different cleaning products and
                    equipment, using them efficiently and effectively.
                  </li>
                  <li>
                    Our housekeeping staff respects your privacy and values the
                    security of your belongings.
                  </li>
                </ul>

                <Typography variant="h6" gutterBottom>
                  Child Care Providers:
                </Typography>
                <ul>
                  <li>
                    Our child care providers are experienced caregivers who
                    prioritize the safety, well-being, and development of
                    children.
                  </li>
                  <li>
                    They create a nurturing and stimulating environment that
                    promotes learning, creativity, and social interaction.
                  </li>
                  <li>
                    Our child care team follows age-appropriate routines,
                    engaging children in educational activities, playtime, and
                    nutritious meals.
                  </li>
                  <li>
                    They are trained in first aid and CPR, ensuring the safety
                    and prompt response to any emergencies.
                  </li>
                  <li>
                    Our child care providers build strong relationships with
                    children, fostering a sense of trust and security.
                  </li>
                </ul>

                <Typography variant="h6" gutterBottom>
                  Senior Caregivers:
                </Typography>
                <ul>
                  <li>
                    Our senior caregivers are compassionate and empathetic
                    individuals who specialize in providing care for the
                    elderly.
                  </li>
                  <li>
                    They assist with activities of daily living, such as
                    bathing, dressing, medication management, and meal
                    preparation.
                  </li>
                  <li>
                    Our senior care team offers companionship, engaging in
                    meaningful conversations and activities to enhance emotional
                    well-being.
                  </li>
                  <li>
                    They are trained to handle age-related conditions and
                    provide support for individuals with mobility challenges or
                    medical needs.
                  </li>
                  <li>
                    Our senior caregivers prioritize the dignity, independence,
                    and comfort of our elderly clients.
                  </li>
                </ul>
                <Typography variant="body1">
                  All our employees undergo thorough background checks and are
                  chosen for their professionalism, integrity, and dedication to
                  providing exceptional service. We continuously invest in their
                  training and professional development to ensure they stay
                  updated with the latest best practices in their respective
                  fields. Rest assured, our team is committed to delivering the
                  highest quality care to meet your unique needs.
                </Typography>
              </Box>
            </Box>
          )}
          {selectedSideNavLink === "/about#team" && (
            <Box>
              <Typography variant="h4" textAlign="center">
                Management Team
              </Typography>
              <ManagementTeam />
            </Box>
          )}
          {selectedSideNavLink === "/about#reviews" && (
            <>
              <Typography variant="h4">Reviews</Typography>
            </>
          )}
          {selectedSideNavLink === "/about#recommendations" && (
            <>
              <Typography variant="h4" textAlign="center" marginBottom={2}>
                <span>O</span>ur<span>B</span>est Outstanding Employees
              </Typography>
              <Typography variant="body1" textAlign="center" gutterBottom>
                Recommendations from our clients about the exceptional care and
                professionalism of our recommended employees.
              </Typography>
              <BestEmployee />
            </>
          )}
          {selectedSideNavLink === "/about#workforce" && (
            <>
              <Typography variant="h4" marginBottom={3} textAlign="center">
                <span>M</span>ember of the Workforce
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                At{" "}
                <b>
                  <span>Y</span>our<span>B</span>est Care
                </b>
                , we take great pride in our dedicated and compassionate team of
                professionals who provide housekeeping, child care, and senior
                care services. Our employees are carefully selected, extensively
                trained, and committed to delivering exceptional care to our
                clients.
              </Typography>
              <Typography variant="body1" marginBottom={3}>
                All our employees undergo thorough background checks and are
                chosen for their professionalism, integrity, and dedication to
                providing exceptional service. We continuously invest in their
                training and professional development to ensure they stay
                updated with the latest best practices in their respective
                fields. Rest assured, our team is committed to delivering the
                highest quality care to meet your unique needs.
              </Typography>
              <EmployeeList
                onSelectEmployee={function (_employee: Employee): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </>
          )}
        </Container>
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
    </Box>
  );
}
