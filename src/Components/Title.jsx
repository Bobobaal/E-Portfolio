import { Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Title({icon, text}){
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4"><FontAwesomeIcon icon={icon} /> {text}</Typography>
        <hr className="underLineTitle" />
      </Grid>
    </>
  )
}