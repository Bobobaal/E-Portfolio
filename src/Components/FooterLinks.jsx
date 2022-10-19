import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function FooterLinks() {
  return (
    <>
      <Grid item xs={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>MIJN LINKS</Typography>
        <ul>
          <li><a href="https://github.com/Bobobaal/" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /> Github</a></li>
          <li><a href="in.com/in/dieter-van-meerbeeck-a738a6160/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
        </ul>
      </Grid>
    </>
  )
}