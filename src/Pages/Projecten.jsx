import { useState, useCallback } from "react";
import { Container, Grid, Typography } from "@mui/material";
import GIPCamping from "../Components/Projects/GIPCamping";
import Mastermind from "../Components/Projects/Mastermind";
import { Pagination } from "@mui/material";
import { useMemo } from "react";

export default function Projecten(){
  const [pagina, setPagina] = useState(1)
  const aantalProjectenPerPagina = 3
  const projecten = [<GIPCamping key="1" />, <Mastermind key="2" />]

  const veranderPagina = useCallback(async (event, waarde) => {
    setPagina(waarde);
  }, [pagina, setPagina])

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
  }, [pagina])



  return (
    <>
      <Container className="inhoud">
        <Grid container direction="column">
          {teTonenProjecten}
          <Pagination sx={{margin: "auto"}} count={(Math.floor(projecten.length/3)+1)} page={pagina} onChange={veranderPagina} variant="outlined"/>
        </Grid>
      </Container>
    </>
  )
}