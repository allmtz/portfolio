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
  { i: "intro", x: 0, y: 0, w: 4, h: 5 },
  { i: "avatar", x: 4, y: 0, w: 2, h: 5 },
  { i: "location", x: 6, y: 0, w: 4, h: 1 },
  { i: "skills", x: 6, y: 0, w: 4, h: 4 },
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
        <motion.div
          className="card intro-card"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1.5, delay: 1.5 }}
          key="intro"
        >
          <Intro></Intro>
        </motion.div>

        <motion.div
          className="card avatar-card"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1.5, delay: 4.5 }}
          key="avatar"
        >
          <Avatar></Avatar>
        </motion.div>

        <motion.div
          className="card location-card"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2.5 }}
          key="location"
        >
          <Location></Location>
        </motion.div>

        <motion.div
          className="card skills-card"
          id="skills"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2.5 }}
          key="skills"
        >
          <Skills></Skills>
        </motion.div>
      </ResponsiveGridLayout>

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
