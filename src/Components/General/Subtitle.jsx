import { Typography } from "@mui/material"

export default function Subtitle({text}){
  return (
    <>
      <Typography variant="h6" className="subtitle">{text}</Typography>
      <hr className="underlineSubtitle" />
    </>
  )
}