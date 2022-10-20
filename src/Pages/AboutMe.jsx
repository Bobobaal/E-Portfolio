import { Container, Grid, Box } from "@mui/material";
import Education from "../Components/Education";
import FreeTime from "../Components/FreeTime";
import WhoAmI from "../Components/WhoAmI";

export default function AboutMe() {
  return (
    <>
      <Container className="inhoud" sx={{ marginTop: "15px"}}>
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