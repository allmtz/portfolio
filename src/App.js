import "./style.css";
import { useEffect, useState } from "react";
// react-grid-layout
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
// layouts for RGL
import { defaultLayout, projectsLayout, skillsLayout } from "./rgl-layouts";
// framer motion
import { motion } from "framer-motion";
// components
import { NavBar } from "./componenets/Navbar";
import { Layout } from "./componenets/Layout";
import { Intro } from "./componenets/Intro";
import { Location } from "./componenets/Location";
import { Skills } from "./componenets/Skills";
import { Avatar } from "./componenets/Avatar";
import { Project } from "./componenets/Project";

// project images
import scoot from "./project-images/scoot.png";
import movieApp from "./project-images/entertainment-app.png";
import gallery from "./project-images/galleria-slideshow.png";
import kanban from "./project-images/task-tracker.png";
import pomodoro from "./project-images/pomodoro.png";
import hk from "./project-images/hk.png";

const ResponsiveGridLayout = WidthProvider(Responsive);
const draggableCutoff = 768;

function App() {
  useEffect(() => {
    const determineCanDrag = () => {
      window.addEventListener("resize", () => {
        window.innerWidth < draggableCutoff
          ? setCanDrag(false)
          : setCanDrag(true);
      });
    };

    return determineCanDrag;
  }, []);

  const [layout, setLayout] = useState(defaultLayout);
  const [currentFocus, setCurrentFocus] = useState("home");
  const [canDrag, setCanDrag] = useState(() =>
    window.innerWidth < draggableCutoff ? false : true
  );

  function focusProjects() {
    setLayout(projectsLayout);
    setCurrentFocus("projects");
  }

  function focusDefault() {
    setLayout(defaultLayout);
    setCurrentFocus("home");
  }

  function focusSkills() {
    setLayout(skillsLayout);
    setCurrentFocus("skills");
  }

  return (
    <Layout>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <NavBar
          focusDefault={focusDefault}
          focusProjects={focusProjects}
          focusSkills={focusSkills}
          currentFocus={currentFocus}
        ></NavBar>
      </motion.div>

      <ResponsiveGridLayout
        className="layout rgl "
        layouts={{ md: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 10, sm: 1, xs: 1, xxs: 1 }}
        isResizable={false}
        allowOverlap={false}
        compactType={"vertical"}
        rowHeight={16}
        isDraggable={canDrag}
      >
        <motion.div
          className="card"
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

        <div key="scoot">
          <Project
            title={"Scoot"}
            desc={
              "Multi-page fully responsive mock scooter rental website. Custom design built with React, Next.js, TypeScript and TailwindCSS."
            }
            imageSrc={scoot}
            github={"https://github.com/allmtz/scoot"}
            demo={"https://scoot-phi.vercel.app/"}
            bgColor={"whitesmoke"}
            txtColor={"black"}
            imgPosition={"left"}
            arrowColor={"black"}
          />
        </div>
        <div key="movie">
          <Project
            title={"Movie App"}
            desc={
              "Entertainment app built with React and TMDB API. User can search movies, bookmark items or get more information by clicking on an item."
            }
            imageSrc={movieApp}
            github={"https://github.com/allmtz/entertainment-web-app"}
            demo={"https://entertainment-app-4ce2a.web.app/"}
            bgColor={"#0a192f"}
            txtColor={"whitesmoke"}
            imgPosition={"left"}
            arrowColor={"white"}
          />
        </div>
        <div key="kanban">
          <Project
            title={"Kanban Board"}
            desc={
              "This Kanban task tracker is a fully responsive React application and includes a light/dark toggle."
            }
            imageSrc={kanban}
            github={"https://github.com/allmtz/task-tracker"}
            demo={"https://task-tracker-9966c.web.app/"}
            bgColor={"#202020"}
            txtColor={"white"}
            imgPosition={"left"}
            arrowColor={"white"}
          />
        </div>
        <div key="gallery">
          <Project
            title={"Art Gallery"}
            desc={
              "A modern gallery built with a responsive mobile-first approach. Includes a user controlled slideshow feature."
            }
            imageSrc={gallery}
            github={"https://github.com/allmtz/galleria-slideshow"}
            demo={"https://imaginative-cajeta-48538a.netlify.app/"}
            bgColor={"whitesmoke"}
            txtColor={"black"}
            imgPosition={"left"}
            arrowColor={"black"}
          />
        </div>
        <div key="hk">
          <Project
            title={"Hotkey Checker"}
            desc={
              "A tool that allows developers to quickly find reserved hotkeys for various browsers."
            }
            imageSrc={hk}
            github={"https://github.com/allmtz/hotkey-checker"}
            demo={"https://hotkey-checker.vercel.app/"}
            bgColor={"whitesmoke"}
            txtColor={"black"}
            imgPosition={"center"}
            arrowColor={"black"}
          />
        </div>
        <div key="pomo">
          <Project
            title={"Pomodoro"}
            desc={
              "A pomodoro style productivity timer. The font and color are customizable and the progress bar provides a quick visual of the time remaining."
            }
            imageSrc={pomodoro}
            github={"https://github.com/allmtz/Pomodoro-App"}
            demo={"https://majestic-cuchufli-f2af29.netlify.app/"}
            bgColor={"#120c2c"}
            txtColor={"white"}
            imgPosition={"center"}
            arrowColor={"white"}
          />
        </div>
      </ResponsiveGridLayout>
    </Layout>
  );
}

export default App;
