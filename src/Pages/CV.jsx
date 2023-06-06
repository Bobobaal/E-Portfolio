import { useEffect } from 'react'

//Component library
import { Container, Grid} from "@mui/material";

//Eigen components
import Title from '../Components/General/Title';

export default function CV(){

  useEffect(() => {
    document.title = "CV - E-Portfolio Dieter Van Meerbeeck";
  })

  return (
    <>
      <Container className="inhoud">
        <Grid container direction="column">
          <Grid item><Title icon={null} text="Nog in opbouw!" /></Grid>
        </Grid>
      </Container>
    </>
  );
}