import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function FooterLinks() {
  return (
    <>
      <Grid item xs={6}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>MIJN LINKS:</Typography>
        <ul>
          <li><a href="https://github.com/Bobobaal/" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /> Persoonlijke Github</a></li>
          <li><a href="https://www.linkedin.com/in/dietervanmeerbeeck/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
        </ul>
      </Grid>
    </>
  )
}
