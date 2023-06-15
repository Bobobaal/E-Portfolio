//Component library
import { Typography, Grid } from "@mui/material";

//Fontawesome icon
import { faPlugCircleBolt } from "@fortawesome/free-solid-svg-icons";

//Eigen components
import Title from "../General/Title";
import Subtitle from "../General/Subtitle";
import GithubLink from "../General/GithubLink";

export default function FluviusFrontend(){
  return (
    <>
      <Grid item className="pageComponent">
        <Title icon={faPlugCircleBolt} text="Fluvius front-end (Projecten 2)" />
        <Subtitle text="Het onderwerp van dit project:" />
        <Typography className="text">
          In tegenstelling tot het Mastermind project, was dit een project met een echte klant.
          In dit geval zoals u kunt lezen was de klant Fluvius, de netbeheerder van elektriciteit en gas in het Vlaams Gewest.
          Als bedrijf hebben ze bepaalde doelstellingen omtrent duurzaamheid, ze koepelen dit onder de verschillende categorieën van SDG's (Sustainable Development Goals) vastgesteld door de VN in 2015.
          De vraag van Fluvius was een platform te bouwen om hun eigen vooruitgang op te volgen, ze kunnen dit op een dashboard nakijken waarin meerdere doelstellingen staan per categorie.
          Of ze kunnen informatie bekijken van een specifieke doelstelling, een persoon ingelogd met de correcte rechten kan de dataset(s) bekijken van een doelstelling en fouten rapporteren.
          Stakeholders kunnen ook het platform gebruiken maar zij kunnen niet de volledige data zien van een doelstelling, alleen de samengevatte data dat men kan zien bij het bekijken van een doelstelling.
          Dit front-end project had ook een backend, maar die was volledig gemaakt door een andere persoon in de groep.
          Daarom zal ik dat deel ook niet delen omdat ik er niets aan heb bijgedragen.<br />
          <GithubLink url="https://github.com/Bobobaal/Fluvius-Projecten2-Frontend" text="Fluvius front-end projecten 2" />
        </Typography>
      </Grid>
    </>
  );
}