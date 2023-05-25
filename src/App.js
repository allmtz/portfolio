import "./style.css";
// react-grid-layout
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
// framer motion
import { motion } from "framer-motion";
// components
import { NavBar } from "./componenets/Navbar";
import { Layout } from "./componenets/Layout";
import { Grid } from "./componenets/Grid";
import { ProjectGrid } from "./componenets/ProjectGrid";
import { Intro } from "./componenets/Intro";
import { Location } from "./componenets/Location";
import { Skills } from "./componenets/Skills";
import { Projects } from "./componenets/Projects";
import { Avatar } from "./componenets/Avatar";

const ResponsiveGridLayout = WidthProvider(Responsive);

// resets/closes the mobile dropdown everytime the window is resized past the breakpoint
window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 755)
    document.querySelector("nav ul").classList.remove("show-nav");

  return;
});

const layout = [
  { i: "1", x: 0, y: 0, w: 4, h: 5 },
  { i: "2", x: 4, y: 0, w: 2, h: 5 },
  { i: "3", x: 6, y: 0, w: 4, h: 1 },
  { i: "4", x: 6, y: 0, w: 4, h: 4 },
];

function App() {
  return (
    <Layout>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <NavBar></NavBar>
      </motion.div>

      <ResponsiveGridLayout
        className="layout rgl "
        layouts={{ md: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 10, sm: 1, xs: 1, xxs: 1 }}
        isResizable={false}
        allowOverlap={false}
        compactType={"vertical"}
        rowHeight={50}
      >
        <div className="rgl-item " key="1">
          1
        </div>
        <div className="rgl-item " key="2">
          2
        </div>
        <div className="rgl-item  " key="3">
          3
        </div>
        <div className="rgl-item  " key="4">
          4
        </div>
      </ResponsiveGridLayout>

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
