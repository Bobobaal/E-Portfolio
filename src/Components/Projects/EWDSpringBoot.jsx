//Component library
import { Grid } from "@mui/material";

//Eigen components
import Title from "../General/Title";
import Subtitle from "../General/Subtitle";

//Fontawesome icon
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function EWDSpringBoot(){
  return (
    <>
      <Grid item className="pageComponent">
        <Title icon={faLeaf} text="Enterprise Web Development Spring Boot project" />
        <Subtitle text="WIP" />
      </Grid>
    </>
    )
}