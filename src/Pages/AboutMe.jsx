import { useEffect } from 'react'
import { Container, Grid } from "@mui/material";
import Education from "../Components/AboutMe/Education";
import FreeTime from "../Components/AboutMe/FreeTime";
import WhoAmI from "../Components/AboutMe/WhoAmI";

export default function AboutMe() {

  let repDeelPaginaTitel = document.title.substring(-1, 32)
  useEffect(() => {
    document.title = "Home - " + repDeelPaginaTitel
  }, [repDeelPaginaTitel])

  return (
    <>
      <Container className="inhoud">
        <Grid container spacing={1} direction="column">
          <WhoAmI />
          <Education />
          <FreeTime />
        </Grid>
      </Container>
    </>
  );
}