import { useState, useCallback, useMemo, useEffect } from "react";

//Component library
import { Container, Grid, Pagination } from "@mui/material";

//Eigen components
import GIPCamping from "../Components/Projects/GIPCamping";
import Mastermind from "../Components/Projects/Mastermind";
import Arrowverse from "../Components/Projects/Arrowverse";
import PreviousEPortfolio from "../Components/Projects/PreviousEPortfolio";
import FrontBackendProjects from "../Components/Projects/FrontBackendProjects";
import FluviusFrontend from "../Components/Projects/FluviusFrontend";
import EWDSpringBoot from "../Components/Projects/EWDSpringBoot";

export default function Projects(){
  const [pagina, setPagina] = useState(1)
  const aantalProjectenPerPagina = 3
  const projecten = [<GIPCamping key="1" />, <Mastermind key="2" />, <Arrowverse key="3" />, <PreviousEPortfolio key="4" />
                    ,<FrontBackendProjects key="5" />, <FluviusFrontend key="6" />, <EWDSpringBoot key="6" />]

  useEffect(() => {
    document.title = "Projecten - E-Portfolio Dieter Van Meerbeeck";
  });

  //Event meegeven anders wordt er een error gegooid in de console.
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
          {teTonenProjecten.map(project => {
            return (
            <>
              <Grid item className="pageComponent">
                {project}
              </Grid>
            </>
            );
          })}
          <Pagination color="primary" sx={{ margin: "auto" }} count={aantalPaginas} page={pagina} onChange={veranderPagina} />
        </Grid>
      </Container>
    </>
  );
}