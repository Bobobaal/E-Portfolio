import { Grid, Typography } from "@mui/material";
import Title from "../General/Title";
import Subtitle from "../General/Subtitle";
import { faTent } from "@fortawesome/free-solid-svg-icons";
import GithubLink from "../General/GithubLink";

export default function GIPCamping(){
  return (
    <>
      <Title icon={faTent} text="Camping Le Passage (GIP opdracht, laatste jaar secundair)" />
      <Subtitle text="Wat is een GIP?" />
      <Typography className="text">
        Een GIP of geïntegreerde proef maakt deel uit van de examens in het laatste jaar van het secundair.
        Het is een opdracht die men moet maken die zich strekt over de verschillende vakken die aan bod komen in de studierichting.
        Op het einde van het jaar wordt het geheel van het project beoordeeld.
        Dat is zodat de leerling kan bewijzen dat die zelfstandig een opdracht in hun vakgebied kan afleveren.
        Een GIP wordt beoordeeld door niet alleen leerkrachten, maar ook een externe jury die het vakgebied in praktijk uitoefenen.
      </Typography>
      <Subtitle text="Waar ging mijn GIP over?" />
      <Typography className="text">
        Mijn GIP ging over camping Le Passage en dat is een camping waar ik tijdens de vakantie verbleef in een caravan die mijn ouders daar gekocht hebben.
        Ze hebben 2 verschillende soorten plaatsen, een sta- of trekplaats en een plaats waar de vaste caravans op staan die de mensen daar gekocht hebben.
        Mijn idee was dus om het reserveren van de sta- of trekplaatsen soepel te laten verlopen en dat vooral tijdens de drukke periodes.
        De camping is gelokaliseerd in de Ardennen, om precies te zijn in Marcourt.
        Dat is vlakbij Hotton, Durbuy, La Roche-en-Ardenne en nog andere toeristische plaatsen.<br />
        Toen ik in 2017 het project maakte was de camping uitgebreid tot 50 plaatsen.
        33 van die plaatsen zijn voor caravans die daar blijven staan en waarvoor de eigenaars jaarlijks betalen.
        De 17 andere plaatsen zijn voor mensen die komen met een mobiele caravan of een tent.
        De bedoeling van de website was dus dat mensen zich als klant kunnen registreren op de site en dan op hun account een staanplaats konden reserveren.
        Dit wordt allemaal gedaan met de hulp van PHP en MySQL.
        Omdat er MySQL gebruikt is konden de mensen ook hun eigen informatie aanpassen voor als ze ooit zouden verhuizen of wanneer ze een ander e-mailadres zouden hebben.
        Ook konden ze een overzicht krijgen van hun reserveringen en als men het wil, ze konden die ook aanpassen of annuleren als er dingen tussen kwamen.<br />
        <GithubLink url="https://github.com/Bobobaal/GIP-Camping-2017" text="GIP Camping Le Passage" />
      </Typography>
    </>
  );
}