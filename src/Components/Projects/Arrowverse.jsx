import Title from "../General/Title";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { Grid, Typography, Link } from "@mui/material";
import Subtitle from "../General/Subtitle";

export default function Arrowverse(){
  return (
    <>
      <Grid item className="pageComponent">
        <Title icon={faArrowPointer} text="Arrowverse watchlist" />
        <Subtitle text="Wat is de Arrowverse?" />
        {/* Typography component wordt omgezet naar een div tag zodat
            er geen error komt dat een ul tag gebruikt word in een p tag.
            Ik gebruik ul tag hier ipv een List component zodat mijn opmaak behouden blijft */}
        <Typography component="div" className="text">
          De Arrowverse is een Amerikaans superhelden franchise en een gedeeld universum van televisieseries rond de superhelden personages van de DC stripboeken uitgezonden voornamelijk op CW.
          Dit multiversum werd tot stand gebracht door het overbrengen van gemeenschappelijke elementen in de verhaallijnen, omgevingen en karakers over 6 televisieseries. <br />
          De 6 series op volgerde dat ze deel werden van de Arrowverse:
          <ul>
            <li>
              Arrow (<Link href="https://www.imdb.com/title/tt2193021/" target="_blank" rel="noopener" underline="hover">IMDB Link Arrow</Link>)
            </li>
            <li>
              The Flash (<Link href="https://www.imdb.com/title/tt3107288/" target="_blank" rel="noopener" underline="hover">IMDB Link The Flash</Link>)
            </li>
            <li>
              Supergirl (<Link href="https://www.imdb.com/title/tt4016454/" target="_blank" rel="noopener" underline="hover">IMDB Link Supergirl</Link>)
            </li>
            <li>
              Legends Of Tomorrow (<Link href="https://www.imdb.com/title/tt4532368/" target="_blank" rel="noopener" underline="hover">IMDB Link Legends Of Tomorrow</Link>)
            </li>
            <li>
              Black Lightning (<Link href="https://www.imdb.com/title/tt6045840/" target="_blank" rel="noopener" underline="hover">IMDB Link Black Lightning</Link>)
            </li>
            <li>
              Batwoman (<Link href="https://www.imdb.com/title/tt8712204/" target="_blank" rel="noopener" underline="hover">IMDB Link Batwoman</Link>)
            </li>
          </ul>
          Volgende series zijn deel van het uitgebreidere universum maar staan eigenlijk op zichzelf en waren nooit deel van de crossovers:
          <ul>
            <li>
              Constantine (<Link href="https://www.imdb.com/title/tt3489184/" target="_blank" rel="noopener" underline="hover">IMDB Link Constantine</Link>)
            </li>
            <li>
              Stargirl (<Link href="https://www.imdb.com/title/tt8722888/" target="_blank" rel="noopener" underline="hover">IMDB Link Stargirl</Link>)
            </li>
            <li>
              Superman & Lois (<Link href="https://www.imdb.com/title/tt11192306/" target="_blank" rel="noopener" underline="hover">IMDB Link Superman & Lois</Link>)
            </li>
          </ul>
        </Typography>
        <Subtitle text="Wat is dit project?" />
        <Typography className="text">
          Vroeger keek ik naar merendeel van deze series en omdat deze series gebaseerd zijn op personages van de DC stripverhalen dacht ik dat er een volgorde zou zijn waarnaar je deze series kijkt.
          Ik zocht op Google en kwam uit op een IMDB pagina (<Link href="https://www.imdb.com/list/ls097110610/" target="_blank" rel="noopener" underline="hover">Arrowverse Episodes Order IMDB</Link>) waar iemand de volgorde had geplaatst en omdat het om meerdere series ging kon ik soms vergeten waar ik het laatst gebleven was.
          Om het mezelf toen makkelijk te maken besloot ik om een simpele HTML pagina met bootstrap te maken voor mezelf lokaal op mijn pc om bij te houden waar ik zat door de kleurletter van de episode groen te kleuren.
          Uiteindelijk gaf ik dan de verschillende rijen in de tabel een eigen kleur via een css klasse afhankelijk van de naam van de serie om te makkelijker uiteen te houden in een tabel met zeer veel rijen. 
          Ik deed dit eerst handmatig, maar uiteindelijk heb ik een kleine javascript geschreven die het voor mij deed (<Link href="https://github.com/Bobobaal/Arrowverse-watchlist/blob/main/js/autoclasses.js" target="_blank" rel="noopener" underline="hover">autoclasses script op Github</Link>).
          Naarmate er meer series bijkwamen werd het mij toch wat te veel om telkens nieuwe rijen toe te voegen aan de HTML telkens de lijst werd geupdate of IMDB.
          Ik had dan in het vak webapplicaties 2 leren werken met klassen en DOM manipulatie in javascript en besloot dus om het maken van die tabellen te automatiseren samen met de juiste CSS klassen toe te voegen (<Link href="https://github.com/Bobobaal/Arrowverse-watchlist/blob/main/js/autoEpisodes.js" target="_blank" rel="noopener" underline="hover">autoEpisodes script op Github</Link>).
          Het enige wat ik dan nog moest doen als de lijst op IMDB werd geupdate was de array met aflevering objecten aanvullen en als de nieuwe seizoenen begonnen daarvoor de HTML een klein beetje aanpassen zodat de card en collapse (bootstrap klassen) ervoor bestonden waarin ze ingevuld konden worden. <br />
          Link naar het hele Github project met een github pages link in de readme zodat je het live kan zien: <Link href="https://github.com/Bobobaal/Arrowverse-watchlist/" target="_blank" rel="noopener" underline="hover">Arrowverse watchlist</Link>
        </Typography>
      </Grid>
    </>
  );
}