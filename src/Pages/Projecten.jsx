import { Container, Grid } from "@mui/material";
import GIPCamping from "../Components/Projects/GIPCamping";

export default function Projecten(){
  return (
    <>
      <Container className="inhoud">
        <Grid container spacing={1} direction="row">
          <GIPCamping />
        </Grid>
      </Container>
    </>
  )
}