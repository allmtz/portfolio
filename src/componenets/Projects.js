import { Project } from "../componenets/Project";

// project images
import scoot from "../project-images/scoot.png";
import movieApp from "../project-images/entertainment-app.png";

export const Projects = () => {
  return (
    <>
      <Project
        title={"Scoot"}
        desc={
          "Multi-page fully responsive mock scooter rental website. Custom design built with React, Next.js, TypeScript and TailwindCSS."
        }
        imageSrc={scoot}
        github={""}
        demo={""}
        // bgColor={"#455574"}
        bgColor={"white"}
        txtColor={"black"}
      />

      <Project
        title={"Movie App"}
        desc={
          "Entertainment app built with React and TMDB API. User can search movies, bookmark items or get more information by clicking on an item."
        }
        imageSrc={movieApp}
        github={""}
        demo={""}
        bgColor={"#0a192f"}
        txtColor={"whitesmoke"}
      />
    </>
  );
};
