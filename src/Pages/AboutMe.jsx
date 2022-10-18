import { Container, Grid, Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

export default function AboutMe() {
  return (
    <>
      <Container sx={{ marginTop: "15px" }}>
        <Grid container spacing={1} direction="row">
          <Grid item xs>
            <span><Box component="img" src="./profielfoto.jpg" alt="foto van mijzelf" className="selfie"/></span>
          </Grid>
          <Grid item xs={12}>
            <div className="title">
              <span className="title-decor"><Typography variant="h4"><FontAwesomeIcon icon={faCircleUser} /> Wie ben ik?</Typography></span>
            </div>
            <hr />
          </Grid>
          <Grid item xs>
            <Typography className="aboutMeText">Hallo, mijn naam is Dieter Van Meerbeeck en ben geboren op 14 december 1998 (23 jaar). 
            Ik studeer Toegepaste Informatica (professionele bachelor) aan de Hogeschool van Gent (HoGent). 
            Ik ben afkomstig van Muizen maar woon nu in De Pinte.</Typography>
            <br />
            <Typography className="aboutMeText">Toen ik 13 jaar was raakte ik geïnteresseerd in webdesign, in de school waar ik toen zat hadden we 2 weken voor de paasvakantie examens. 
            De week voor die examens kregen we een formulier waar verschillende workshops op stonden en een paar uit mochten kiezen. 
            Ik heb toen gekozen voor de workshop html en vond het zo interessant dat ik thuis verder begon te experimenteren, toen besloot ik dat ik informaticabeheer zou volgen in het 5de en 6de secundair. 
            Eenmaal in het 5de secundair begon ik ook interesse te krijgen in programmeren, maar mijn grootste passie blijft webdesign.</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}