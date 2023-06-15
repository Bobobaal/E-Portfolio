import { useEffect } from 'react'

//Component library
import { Container, Grid} from "@mui/material";

//Fontawesome icon
import { faPassport } from '@fortawesome/free-solid-svg-icons';

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
          <Grid item className="pageComponent"><Title icon={faPassport} text="Nog in opbouw!" /></Grid>
        </Grid>
      </Container>
    </>
  );
}