import { Typography, Grid } from "@mui/material"

export default function Subtitle({text}){
  return (
    <>
      <Grid item>
        <Typography variant="h6" className="subtitle">{text}</Typography>
        <hr className="underlineSubtitle" />
      </Grid>
    </>
  )
}