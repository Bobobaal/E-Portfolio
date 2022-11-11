import { Grid, Typography } from "@mui/material";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import Title from "../General/Title";
import Subtitle from "../General/Subtitle";
import GithubLink from "../General/GithubLink";

export default function Mastermind(){
  return (
    <>
      <Grid item className="pageComponent">
        <Title icon={faPuzzlePiece} text="Mastermind (Projecten 1)" />
        <Subtitle text="Wat is Mastermind en hoe speel je het?" />
        {/* Typography component wordt omgezet naar een div tag zodat
            er geen error komt dat een ul tag gebruikt word in een p tag.
            Ik gebruik ul tag hier ipv een List component zodat mijn opmaak behouden blijft */}
        <Typography component="div" className="text">
          Mastermind is een spel waarbij 1 persoon een code maakt (de codemaker) en iemand anders moet proberen de code te kraken (de codekraker).
          Je hebt 8 verschillende kleuren (rood, groen, blauw, geel, oranje, roos, cyaan & paars) en 2 evaluatiepinnen (wit & zwart).
          Als een evaluatiepin zwart is betekent het dat je een pin hebt gekozen met de correcte kleur en de correcte positie, als het wit is betekent het dat de kleur erin zit maar niet op de juiste positie geplaatst is. <br />
          Er zijn 3 moeilijkheidsgraden:
          <ul>
            <li>
              gemakkelijk: de code bestaat uit 4 kleuren en elke kleur komt maar 1 keer voor.
            </li>
            <li>
              normaal: heeft ook een code van 4 kleuren, maar die moeten niet uniek zijn.
              De evaluatiepinnen komen niet overeen met de positie van de pinnen in de code.
            </li>
            <li>
              moeilijk: bestaat uit een code met 5 kleuren die niet uniek hoeven te zijn en 2 posities in de code mogen leeg blijven.
              Bij deze moeilijkheidsgraad staan de evaluatiepinnen ook niet op volgorde.
            </li>
          </ul>
          Het raden van de code gebeurt in maximaal 12 pogingen, heb je het niet geraden na 12 pogingen heb je verloren.
        </Typography>
        <Subtitle text="Richtlijnen mastermind opdracht" />
        <Typography component="div" className="text">
          <ul>
            <li>
              Het moest een Java applicatie zijn.
            </li>
            <li>
              De applicatie moest 3-talig zijn: Nederlands, Engels & Frans.
            </li>
            <li>
              Gebruikers moesten zichzelf kunnen aanmelden & registreren.
            </li>
            <li>
              3 verschillende moeilijkheidsgraden (omschreven in vorige paragraaf).
            </li>
            <li>
              Gebruikers kunnen elkaar uitdagen.
            </li>
            <li>
              Score van de uitdagingen werden bijgehouden voor een klassement per moeilijkheidsgraad.
              (+3 bij winst, -1 verlies, bij een gelijkspel wint de uitdager)
            </li>
            <li>
              Je kan het spel spelen in zowel console als in de GUI (Grafische User Interface)
            </li>
          </ul>
          Dit is een groepsproject gemaakt met 2 andere studenten. <br />
          <GithubLink url="https://github.com/Bobobaal/Mastermind-Projecten1" text="Mastermind projecten 1" />
        </Typography>
      </Grid>
    </>
  );
}