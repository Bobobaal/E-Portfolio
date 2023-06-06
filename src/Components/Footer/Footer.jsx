//Component library
import { Container, Grid } from "@mui/material";

//Eigen component
import FooterLinks from "./FooterLinks";


export default function Footer(){
  return (
    <>
      <footer id="footerBox">
        <Container sx={{paddingTop: "15px", paddingBottom: "15px"}}>
          <Grid container direction="row">
            <FooterLinks />
          </Grid>
        </Container>
      </footer>
    </>
  );
}