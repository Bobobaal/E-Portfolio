import { useState, useCallback } from "react";
import { Container, Grid, Typography } from "@mui/material";
import GIPCamping from "../Components/Projects/GIPCamping";
import Mastermind from "../Components/Projects/Mastermind";
import { Pagination } from "@mui/material";
import { useMemo } from "react";
import Arrowverse from "../Components/Projects/Arrowverse";
import { useEffect } from "react";
import PreviousEPortfolio from "../Components/Projects/PreviousEPortfolio";

export default function Projects(){
  const [pagina, setPagina] = useState(1)
  const aantalProjectenPerPagina = 3
  const projecten = [<GIPCamping key="1" />, <Mastermind key="2" />, <Arrowverse key="3" />, <PreviousEPortfolio key="4" />]

  useEffect(() => {
    document.title = "Projecten - E-Portfolio Dieter Van Meerbeeck";
  });

  //Event meegeven anders wordt er een error gegooid in de console
  const veranderPagina = useCallback(async (event, waarde) => {
    setPagina(waarde);
  }, [pagina, setPagina]);

  const aantalPaginas = useMemo(() => {
    let aantal = Math.floor(projecten.length / 3)
    if ((projecten.length % 3) > 0){
      aantal++
    }
    return aantal
  });

  const teTonenProjecten = useMemo(() => {
    let startIndex = (pagina * aantalProjectenPerPagina) - aantalProjectenPerPagina
    let eindIndex = startIndex + (aantalProjectenPerPagina - 1)
    let projectenPagina = []
    for(let i = startIndex; i <= eindIndex; i++){
      if(projecten[i] === undefined){
        break;
      }
      projectenPagina.push(projecten[i]);
    }
    return projectenPagina
  }, [pagina]);



  return (
    <>
      <Container className="inhoud">
        <Grid container direction="column">
          {teTonenProjecten}
          <Pagination sx={{ margin: "auto" }} count={aantalPaginas} page={pagina} onChange={veranderPagina} variant="outlined" />
        </Grid>
      </Container>
    </>
  );
}