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
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1.5, delay: 1.5 }}
        >
          <Intro></Intro>
        </motion.div>

        <motion.div
          className="card avatar-card"
          animate={{ y: 0 }}
          initial={{ y: -1000 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 4.3,
            stiffness: 35,
          }}
        >
          <Avatar></Avatar>
        </motion.div>

        <motion.div
          className="card location-card"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2.5 }}
        >
          <Location></Location>
        </motion.div>

        <motion.div
          className="card skills-card"
          id="skills"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2.5 }}
        >
          <Skills></Skills>
        </motion.div>
      </Grid>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1, delay: 3.5 }}
      >
        <ProjectGrid>
          <Projects></Projects>
        </ProjectGrid>
      </motion.div>
    </Layout>
  );
}

export default App;
