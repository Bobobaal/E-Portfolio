//Component library
import { Grid, Typography } from "@mui/material"

//Fontawesome icon
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

//Eigen component
import Title from '../General/Title';

export default function FreeTime(){
  return (
    <>
      <Grid item className="pageComponent">
        <Title icon={faHeadphones} text="Vrije tijd" />
        <Grid item>
          <Typography className="text">
            In mijn vrije tijd luister ik graag naar muziek, mijn favoriete muzikanten zijn Taylor Swift en Ed Sheeran. <br />
            Daarnaast spendeer ik soms ook graag mijn vrije tijd met een goede film of serie in de avond/nacht, mijn favoriete genres zijn vooral crime & sci-fi maar occasioneel kijk ik wel eens fantasy. 
            Mijn favoriete series zijn Stargate SG-1, Star Trek, Criminal Minds & Castle, mijn favoriete films zijn de Divergent, Hunger Games & Harry Potter. <br />
            Ik speel ook video games tijdens mijn vrije tijd, mijn favoriete genres daarin is sport (voornamelijk voetbal), racing, looter shooters & simulation en soms wel eens sandbox.
            Mijn favoriete games zijn: Minecraft (Java editie, modpacks), Mass Effect series, Euro Truck Simulator 2, American Truck Simulator, Subnautica (eerste game & Below Zero), Horizon Zero Dawn, The Division & Life Is Strange.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}