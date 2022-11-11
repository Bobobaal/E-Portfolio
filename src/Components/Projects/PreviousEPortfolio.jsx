import { Grid, Typography } from "@mui/material";
import { faFile } from "@fortawesome/free-solid-svg-icons";

//Eigen components
import Title from "../General/Title";
import GithubLink from "../General/GithubLink"

export default function PreviousEPortfolio(){
  return (
    <>
      <Grid item className="pageComponent">
        <Title icon={faFile} text="Vorige E-Portfolio" />
        <Typography className="text">
          Ik maakte mijn vorige e-portfolio eerst als een opdracht voor het vak i1Talent en dacht erover na om het weer offline te halen als ik geslaagd was voor het vak.
          Dat is ook de reden waarom het ook pagina's bevat voor het vak, dat waren mijn inzendingen voor de verschillende opdrachten die ik gemaakt had door het jaar heen.
          Uiteindelijk heb ik de website online laten staan en soms eens aangepast maar niet zo vaak.
          De website kon zeer gemakkelijk gemaakt worden in HTML, maar heb PHP gebruikt voornamelijk zodat ik bepaalde delen niet opnieuw moest kopiëren en plakken op verschillende HTML pagina's. <br />
          <GithubLink url="https://github.com/Bobobaal/Vorige-E-portfolio/" text="Vorige e-portfolio"/>
        </Typography>
      </Grid>
    </>
  );
}