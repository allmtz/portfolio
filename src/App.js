import { useRef } from "react";
import "./style.css";

import { NavBar } from "./componenets/Navbar";
import { About } from "./componenets/About";
import { SkillCard } from "./componenets/SkillCard";
import { ProjectCard } from "./componenets/ProjectCard";
import { ContactForm } from "./componenets/ContactForm";

import css from './skills-icons/css.svg'
import firebase from './skills-icons/firebase.svg'
import html from './skills-icons/html.svg'
import js from './skills-icons/js.svg'
import react from './skills-icons/react.svg'
import tailwindcss from './skills-icons/tailwindcss.svg'
import typescript from './skills-icons/typescript.svg'
import sass from './skills-icons/sass.svg'

//project images
import barberImg from './project-images/barber-site.png'
import entertainmentImg from './project-images/entertainment-app.png'
import galleriaImg from './project-images/galleria-slideshow.png'
import loginImg from './project-images/login-card.png'
import pomodoroImg from './project-images/pomodoro.png'
import responsiveSiteImg from './project-images/responsive-site.png'
import taskTrackerImg from './project-images/task-tracker.png'
import typeracerImg from './project-images/typeracer.png'

// resets/closes the mobile dropdown everytime the window is resized past the breakpoint
window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 755)
    document.querySelector("nav ul").classList.remove("show-nav");

  return;
});

function wave() {
  let i = 0;
  const nameSpans = document.querySelectorAll(".name-container span");

  nameSpans.forEach((span) => {
    span.style.animationDelay = `${0.07 * i}s`;
    span.classList.add("jumping-letter");
    i++;
  });
}

wave();

function App() {
  const navDropdownRef = useRef(null);

  function openNav() {
    navDropdownRef.current.classList.toggle("show-nav");
  }

  function closeNav() {
    navDropdownRef.current.classList.toggle("show-nav");
  }

  return (
    <div className="container">
      <div id="home" className="slide">
        <NavBar
          openNav={openNav}
          closeNav={closeNav}
          navDropdownRef={navDropdownRef}
        />

        <header>
          <p>
            <span className="hello">Hello, my name is</span>
          </p>
          <h1 className="name-container">
            <span className="name">A</span>
            <span className="name">l</span>
            <span className="name">l</span>
            <span className="name">a</span>
            <span className="name">n </span>
            <br className="name-break" />
            <span className="name">M</span>
            <span className="name">a</span>
            <span className="name">r</span>
            <span className="name">t</span>
            <span className="name">i</span>
            <span className="name">n</span>
            <span className="name">e</span>
            <span className="name">z</span>
          </h1>
          <p>
            I am a self-taught
            <span className="accent-color"> web developer</span> based in Napa,
            CA.
            <br />
            Currently, I'm working on creating interactive web applications with
            React.
          </p>
          <button>
            <a href="#projects">My Projects</a>
          </button>
        </header>
      </div>

      <div id="about" className="slide">
        <About />
      </div>

      <div id="skills" className="skills slide">
        <h1 className="underline">Skills</h1>
        <p>Technologies I've used</p>
        <div className="row skills-container">
          <SkillCard
            skillName={"CSS"}
            imgSrc={css}
            alt={"CSS icon"}
            highlightColor={"#2878e2"}
          />
          <SkillCard
            skillName={"HTML"}
            imgSrc={html}
            alt={"HTML icon"}
            highlightColor={"#ff7f08"}
          />
          <SkillCard
            skillName={"JavaScript"}
            imgSrc={js}
            alt={"JS icon"}
            highlightColor={"yellow"}
          />
          <SkillCard
            skillName={"React"}
            imgSrc={react}
            alt={"React icon"}
            highlightColor={"#0dcff1"}
          />
          <SkillCard
            skillName={"Firebase"}
            imgSrc={firebase}
            alt={"Firebase icon"}
            highlightColor={"#ffbc03"}
          />
          <SkillCard
            skillName={"TailwindCSS"}
            imgSrc={tailwindcss}
            alt={"TailwindCSS icon"}
            highlightColor={"aqua"}
          />

          <SkillCard
            skillName={"Sass"}
            imgSrc={sass}
            alt={"SASS icon"}
            highlightColor={"#bb5b96fb"}
          />

          <SkillCard
            skillName={"Typescript"}
            imgSrc={typescript}
            alt={"Typescript icon"}
            highlightColor={"#2583cf"}
          />
          <div className="skill-card" 
              onMouseEnter={ (e) =>{
                e.target.closest(".skill-card").style.boxShadow = `0px 0px 20px 3px white`
              }}
              onMouseLeave={ () => { 
                document.querySelectorAll(".skill-card").forEach( card => card.style.boxShadow = "0px 5px 5px 2px black")
              } }
            >
            <iconify-icon
              icon="codicon:github-inverted"
              style={{ color: "white" }}
              width="70"
              height="70"
            ></iconify-icon>
            <p>GitHub</p>
          </div>
        </div>
      </div>

      <div id="projects" className="slide">
        <h1 className="underline">Projects</h1>
        <p>What I've been up to</p>

        <div className="project-container row">
          <ProjectCard
            projectName={"Entertainment App"}
            githubLink={
              "https://github.com/ramenDiet/entertainment-web-app"
            }
            websiteLink={"https://entertainment-app-4ce2a.web.app/"}
            projDesc="Entertainment app built with React and TMDB API. User can search movies, bookmark items or get more information by clicking on an item."
            skillsUsed={[html, css, react]}
            imageSrc={entertainmentImg}
          />

          <ProjectCard
            projectName={"Galleria Slideshow"}
            githubLink={
              "https://github.com/ramenDiet/galleria-slideshow"
            }
            websiteLink={"https://imaginative-cajeta-48538a.netlify.app/"}
            projDesc="A modern gallery built with a responsive mobile-first approach.
            Includes a user controlled slideshow feature."
            skillsUsed={[react, sass, js]}
            imageSrc={galleriaImg}
          />

          <ProjectCard
            projectName={"Kanban Task Tracker"}
            githubLink={"https://github.com/ramenDiet/task-tracker"}
            websiteLink={"https://task-tracker-9966c.web.app/"}
            projDesc="This Kanban task tracker is a fully responsive React application and includes a light/dark toggle."
            skillsUsed={[html, css, react]}
            imageSrc={taskTrackerImg}
          />
          
          <ProjectCard
            projectName={"Pomodoro Timer"}
            githubLink={
              "https://github.com/ramenDiet/Pomodoro-App"
            }
            websiteLink={"https://majestic-cuchufli-f2af29.netlify.app"}
            projDesc="A pomodoro style productivity timer. The font and color are customizable and the progress bar provides a quick visual of the time remaining "
            skillsUsed={[typescript, react, tailwindcss]}
            imageSrc={pomodoroImg}
          />

          <ProjectCard
            projectName={"Typeracer"}
            githubLink={"https://github.com/ramenDiet/typeracer"}
            websiteLink={"https://typeracer-fc2b9.web.app/"}
            projDesc="Typeracer clone built to practice typing speed and accuracy"
            skillsUsed={[react, tailwindcss, typescript]}
            imageSrc={typeracerImg}
          />

          <ProjectCard
            projectName={"Login Card"}
            githubLink={
              "https://github.com/ramenDiet/random-projects/tree/main/login-card"
            }
            websiteLink={"https://login-card-ba8c3.web.app/"}
            projDesc="A sample login card with form input and a dark mode toggle"
            skillsUsed={[html, css, js]}
            imageSrc={loginImg}
          />

          <ProjectCard
            projectName={"Barber Site"}
            githubLink={
              "https://github.com/ramenDiet/random-projects/tree/main/barber-site"
            }
            websiteLink={"https://chinoblends.com/"}
            projDesc="A responsive barber site with an image carousel, sticky navigation
            and mobile hamburger"
            skillsUsed={[html, css, js]}
            imageSrc={barberImg}
          />

          <ProjectCard
            projectName={"Responsive Site"}
            githubLink={
              "https://github.com/ramenDiet/Responsive-Layout-Challenge"
            }
            websiteLink={"https://responsive-layouts.web.app/"}
            projDesc="A fully responsive example website layout"
            skillsUsed={[html, css, js]}
            imageSrc={responsiveSiteImg}
          />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default App;
