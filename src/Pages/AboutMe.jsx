import { Container, Grid, Box } from "@mui/material";
import Education from "../Components/AboutMe/Education";
import FreeTime from "../Components/AboutMe/FreeTime";
import WhoAmI from "../Components/AboutMe/WhoAmI";

export default function AboutMe() {
  return (
    <>
      <Container className="inhoud">
        <Grid container spacing={1} direction="row">
          <Grid item xs>
            <span><Box component="img" src="./profielfoto.jpg" alt="foto van mijzelf" className="selfie"/></span>
          </Grid>
          <WhoAmI />
          <Education />
          <FreeTime />
        </Grid>
      </Container>
    </>
  );
}