import { ProjectContainer } from "../components/projects/ProjectContainer";
import { Userinfo } from "../components/user/Userinfo";
import { NavbarContainer } from "../components/menu/NavbarContainer";
import { Navbar } from "../components/menu/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

export function MainView() {
  return (
    <Grid
      templateAreas={`"lat nav nav"
                  "lat main main"
                  "lat footer footer"`}
      gridTemplateRows={"0.5fr 2fr 0.55fr"}
      gridTemplateColumns={"auto 1fr"}
      height="100vh">
      <GridItem area={"lat"}>
        <NavbarContainer />
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        <Navbar title={"Welcome"} showUser={true} />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <div>
          <Userinfo />
          <ProjectContainer />
        </div>
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <p>Footer</p>
      </GridItem>
    </Grid>
  );
}
