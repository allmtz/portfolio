import "./style.css";
import { NavBar } from "./componenets/Navbar";
import { Layout } from "./componenets/Layout";
import { Grid } from "./componenets/Grid";
import { ProjectGrid } from "./componenets/ProjectGrid";

import { Intro } from "./componenets/Intro";
import { Location } from "./componenets/Location";
import { Skills } from "./componenets/Skills";
import { Projects } from "./componenets/Projects";
import { Avatar } from "./componenets/Avatar";

// resets/closes the mobile dropdown everytime the window is resized past the breakpoint
window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 755)
    document.querySelector("nav ul").classList.remove("show-nav");

  return;
});

function App() {
  return (
    <Layout>
      <NavBar></NavBar>
      <Grid>
        <Intro></Intro>
        <Avatar></Avatar>
        <Location></Location>
        <Skills></Skills>
      </Grid>
      <ProjectGrid>
        <Projects></Projects>
      </ProjectGrid>
    </Layout>
  );
}

export default App;
