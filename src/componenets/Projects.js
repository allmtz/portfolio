import { Project } from "../componenets/Project";

// project images
import scoot from "../project-images/scoot.png";
import movieApp from "../project-images/entertainment-app.png";
import gallery from "../project-images/galleria-slideshow.png";
import kanban from "../project-images/task-tracker.png";
import pomodoro from "../project-images/pomodoro.png";
import hk from "../project-images/hk.png";

export const Projects = () => {
  return (
    <>
      <Project
        title={"Scoot"}
        desc={
          "Multi-page fully responsive mock scooter rental website. Custom design built with React, Next.js, TypeScript and TailwindCSS."
        }
        imageSrc={scoot}
        github={"https://github.com/allmtz/scoot"}
        demo={"https://scoot-phi.vercel.app/"}
        bgColor={"white"}
        txtColor={"black"}
        imgPosition={"left"}
      />
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
      />
      <Project
        title={"Kanban Task Tracker"}
        desc={
          "This Kanban task tracker is a fully responsive React application and includes a light/dark toggle."
        }
        imageSrc={kanban}
        github={"https://github.com/allmtz/task-tracker"}
        demo={"https://task-tracker-9966c.web.app/"}
        bgColor={"#202020"}
        txtColor={"white"}
        imgPosition={"left"}
      />
      <Project
        title={"Art Gallery"}
        desc={
          "A modern gallery built with a responsive mobile-first approach. Includes a user controlled slideshow feature."
        }
        imageSrc={gallery}
        github={"https://github.com/allmtz/galleria-slideshow"}
        demo={"https://imaginative-cajeta-48538a.netlify.app/"}
        bgColor={"white"}
        txtColor={"black"}
        imgPosition={"left"}
      />
      <Project
        title={"Hotkey Checker"}
        desc={
          "A tool that allows developers to quickly find reserved hotkeys for various browsers"
        }
        imageSrc={hk}
        github={"https://github.com/allmtz/hotkey-checker"}
        demo={"https://hotkey-checker.vercel.app/"}
        bgColor={"white"}
        txtColor={"black"}
        imgPosition={"center"}
      />
      <Project
        title={"Pomodoro"}
        desc={
          "A pomodoro style productivity timer. The font and color are customizable and the progress bar provides a quick visual of the time remaining"
        }
        imageSrc={pomodoro}
        github={"https://github.com/allmtz/Pomodoro-App"}
        demo={"https://majestic-cuchufli-f2af29.netlify.app/"}
        bgColor={"#120c2c"}
        txtColor={"white"}
        imgPosition={"center"}
      />
      33
    </>
  );
};
