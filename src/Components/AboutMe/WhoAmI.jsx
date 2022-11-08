import { Grid, Typography, Box } from "@mui/material";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useMemo } from "react";
import Title from '../General/Title';

export default function WhoAmI() {
  const getLeeftijd = useMemo(() => {
      const vandaag = new Date();
      const geboortedatum = new Date("1998/12/14");
      let leeftijd = vandaag.getFullYear() - geboortedatum.getFullYear();
      const maand = vandaag.getMonth() - geboortedatum.getMonth();
      if(maand < 0 || (maand === 0 && vandaag.getDate() < geboortedatum.getDate())){
        leeftijd--;
      }
      return leeftijd;
  }, []);

  return (
    <>
      <Grid item className="pageComponent">
        <Title icon={faCircleUser} text="Wie ben ik?" />
        <div className="fullWidthUnder550"><Box component="img" src="./img/profielfoto.jpg" alt="foto van mijzelf" className="selfie"/></div>
        <Typography className="text">
          Hallo, mijn naam is Dieter Van Meerbeeck en ben geboren op 14 december 1998 ({getLeeftijd} jaar).
          Ik studeer Toegepaste Informatica: Enterprise & Web Development (professionele bachelor) aan de Hogeschool van Gent (HoGent).
          Ik ben afkomstig van Muizen maar woon nu in De Pinte.
        </Typography>
        <br />
        <Typography className="text">
          Toen ik 13 jaar was raakte ik geïnteresseerd in webdesign, in de school waar ik toen studderde hadden we 2 weken voor de paasvakantie examens.
          De week voor die examens kregen we een formulier waar verschillende workshops op stonden en daar mochten we een paar uit kiezen.
          Ik heb toen gekozen voor de workshop html en vond het zo interessant dat ik thuis verder begon te experimenteren, toen besloot ik dat ik informaticabeheer zou volgen in het 5de en 6de secundair.
          Eenmaal in het 5de secundair begon ik ook interesse te krijgen in programmeren, maar mijn grootste passie blijft webdesign.
        </Typography>
      </Grid>
    </>
  );
}