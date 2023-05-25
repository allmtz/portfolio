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

import { motion } from "framer-motion";
import { useEffect } from "react";

// resets/closes the mobile dropdown everytime the window is resized past the breakpoint
window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 755)
    document.querySelector("nav ul").classList.remove("show-nav");

  return;
});

function App() {
  useEffect(() => {}, []);

  const dur = 1.5;

  return (
    <Layout>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <NavBar></NavBar>
      </motion.div>

      <Grid>
        <motion.div
          className="card intro-card"
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ type: "tween", duration: 1.5, delay: 1 }}
        >
          <Intro></Intro>
        </motion.div>

        <motion.div
          className="card avatar-card"
          animate={{ y: 0 }}
          initial={{ y: -1000 }}
          transition={{
            type: "tween",
            duration: 1,
            delay: 3,
          }}
        >
          <Avatar></Avatar>
        </motion.div>

        <motion.div
          className="card location-card"
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          transition={{ type: "tween", duration: 0.9, delay: 1.5 }}
        >
          <Location></Location>
        </motion.div>

        <motion.div
          className="card skills-card"
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          transition={{ type: "tween", duration: 0.9, delay: 1.5 }}
        >
          <Skills></Skills>
        </motion.div>
      </Grid>

      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "tween", duration: 0.8, delay: 2.5 }}
      >
        <ProjectGrid>
          <Projects></Projects>
        </ProjectGrid>
      </motion.div>
    </Layout>
  );
}

export default App;
