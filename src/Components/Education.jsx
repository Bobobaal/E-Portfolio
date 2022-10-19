import { Grid, Typography } from "@mui/material"
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Title from './Title';

export default function Education(){
  return (
    <>
      <Title icon={faUserGraduate} text="Opleiding" />
      <Grid item xs>
        <Typography className="aboutMeText">
          Ik ben afgestudeerd aan het GO! Lyceum Gent in de richting informaticabeheer. 
          Op de proclamatie heb ik van de school een beloning gekregen voor het helpen van mijn klasgenoten bij hun GIP project. 
          Omdat ik mijn klasgenoten hielp, hebben ze mijn bijnaam ingesteld als PHP-Helpdesk in de Facebook messenger groep. 
          De opdracht voor ons GIP project was het maken van een website die verbonden was met een databank (waar alle belangrijke gegevens opgeslagen werden) met behulp van PHP.
        </Typography>
        <br />
      </Grid>
    </>
  );
}