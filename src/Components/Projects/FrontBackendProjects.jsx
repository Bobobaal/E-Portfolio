import Title from "../General/Title";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Typography, Link } from "@mui/material";
import GithubLink from "../General/GithubLink";
import Subtitle from "../General/Subtitle";

export default function FrontBackendProjects(){
  return (
    <>
      <Title icon={faFilm} text="Movie watchlist" />
      <Subtitle text="Onderwerp van dit project & de gebruikte technologieën:" />
      <Typography className="text">
        Dit is een project gebaseerd op mijn Arrowverse watchlist project maar dan voor films, het bestaat uit een front-end (gemaakt voor het vak front-end web development) en een backend (gemaakt voor het vak webservices). 
        Een groot verschil is dat dit gemaakt is om meerdere gebruikers te ondersteunen die zo hun eigen lijst hebben en het is ook niet gemaakt met gewoon wat HTML, bootstrap en 1 javascript file. <br />
        De front-end van dit project is net zoals deze website gemaakt met het React framework samen met het Material UI (<Link href="https://mui.com/" target="_blank" rel="noopener" underline="hover">MUI</Link>) component library. 
        Zoals er staat in de README op Github van de front-end ben ik eigenlijk na afloop van het project niet zo blij met hoe het eruit ziet. 
        De website bestaat uit veel te veel lichte heldere kleuren en kon beter nog wat donkere kleuren gebruiken. 
        Er zijn bepaalde aspecten op de website die op andere manieren beter afgehandeld konden worden en het ontwerp van de 2 lijst pagina's (gebruiker en films algemeen) konden veel beter. <br />
        Voor de backend is er NodeJS & koa framework gebruikt samen met Swagger voor de API documentatie. 
        Er is ook authenticatie en autorisatie dat afgehandeld wordt met een JWT token.
        De data werd opgeslagen in een MySQL database. <br />
        <GithubLink url="https://github.com/Bobobaal/Frontend-project" text="Front-end project" /> <br />
        <GithubLink url="https://github.com/Bobobaal/Backend-project" text="Backend project" />
      </Typography>
    </>
  );
}