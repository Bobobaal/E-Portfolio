//Component library
import { Typography, Grid } from "@mui/material";

//Fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Title({icon, text}){
  return (
    <>
      <Grid item>
        <Typography variant="h4"><FontAwesomeIcon icon={icon} /> {text}</Typography>
        <hr className="underLineTitle" />
      </Grid>
    </>
  );
}