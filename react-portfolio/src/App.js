import { useRef } from "react";
import "./style.css";

import { NavBar } from "./componenets/Navbar";
import { About } from "./componenets/About";
import { SkillCard } from "./componenets/SkillCard";
import { ProjectCard } from "./componenets/ProjectCard";
import { nanoid } from "nanoid";
import { ContactForm } from "./componenets/ContactForm";

// resets/closes the mobile dropdown everytime the window is resized past the breakpoint
window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 755)
    document.querySelector("nav ul").classList.remove("show-nav");

  return;
});

function displayLinks(e) {
  e.target.querySelector(".project-links").style.display = "flex";
}

function hideLinks() {
  const projectLinks = document.querySelectorAll(".project-links");
  projectLinks.forEach((link) => (link.style.display = "none"));
}

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
            imgSrc={"/static/media/css.72bbde5dd6854ae0b255f45a8e068f35.svg"}
            alt={"CSS icon"}
          />
          <SkillCard
            skillName={"HTML"}
            imgSrc={"/static/media/html.4020b5baf8cfa2b70a56e0f29326c4af.svg"}
            alt={"HTML icon"}
          />
          <SkillCard
            skillName={"JavaScript"}
            imgSrc={"/static/media/js.9ac45f986540a766df551d315cf219d7.svg"}
            alt={"JS icon"}
          />
          <SkillCard
            skillName={"React"}
            imgSrc={"/static/media/react.9e733bc6f8cc6085e0425d6c18d02572.svg"}
            alt={"React icon"}
          />
          <SkillCard
            skillName={"Firebase"}
            imgSrc={"static/media/firebase.5a220cf7ff626941283f787de7891935.svg"}
            alt={"Firebase icon"}
          />
            <SkillCard
            skillName={"TailwindCSS"}
            imgSrc={"/static/media/tailwindcss.f7a4a19adb5ca2a37966dc5840e20d2e.svg"}
            alt={"TailwindCSS icon"}
          />
            <SkillCard
            skillName={"Typescript"}
            imgSrc={"/static/media/typescript.3cac26dea1892714331a83b2755212de.svg"}
            alt={"Typescript icon"}
          />
          <div className="skill-card">
            <iconify-icon
              icon="codicon:github-inverted"
              style={{ color: "white" }}
              width="80"
              height="80"
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
            cssSelector={"task-tracker"}
            githubLink={"https://github.com/ramenDiet/task-tracker"}
            websiteLink={"https://task-tracker-9966c.web.app/"}
            projDesc="This is a kanban style task tracking app that uses local storage
          to remember user input"
            skillsUsed={["HTML", "CSS", "React"]}
            nanoid={nanoid}
            displayLinks={displayLinks}
            hideLinks={hideLinks}
          />

          <ProjectCard
            cssSelector={"movie-app"}
            githubLink={
              "https://github.com/ramenDiet/10-more-JS-projects/tree/master/movies"
            }
            websiteLink={"https://movie-app-539e7.web.app/"}
            projDesc="Uses the MovieDB API to display movies along with their
            descriptions, ratings and a trailer"
            skillsUsed={["HTML", "CSS", "JS"]}
            nanoid={nanoid}
            displayLinks={displayLinks}
            hideLinks={hideLinks}
          />

          <ProjectCard
            cssSelector={"typeracer"}
            githubLink={"https://github.com/ramenDiet/typeracer"}
            websiteLink={"https://typeracer-fc2b9.web.app/"}
            projDesc="Typeracer clone built to practice typing speed and accuracy"
            skillsUsed={["React", "TailwindCSS", "Typescript"]}
            nanoid={nanoid}
            displayLinks={displayLinks}
            hideLinks={hideLinks}
          />

          <ProjectCard
            cssSelector={"login-card"}
            githubLink={
              "https://github.com/ramenDiet/random-projects/tree/main/login-card"
            }
            websiteLink={"https://login-card-ba8c3.web.app/"}
            projDesc="A sample login card with form input and a dark mode toggle"
            skillsUsed={["HTML", "CSS", "JS"]}
            nanoid={nanoid}
            displayLinks={displayLinks}
            hideLinks={hideLinks}
          />

          <ProjectCard
            cssSelector={"barber-site"}
            githubLink={
              "https://github.com/ramenDiet/random-projects/tree/main/barber-site"
            }
            websiteLink={"https://chinoblends.com/"}
            projDesc="A responsive barber site with an image carousel, sticky navigation
            and mobile hamburger"
            skillsUsed={["HTML", "CSS", "JS"]}
            nanoid={nanoid}
            displayLinks={displayLinks}
            hideLinks={hideLinks}
          />

          <ProjectCard
            cssSelector={"responsive-site"}
            githubLink={
              "https://github.com/ramenDiet/Responsive-Layout-Challenge"
            }
            websiteLink={"https://responsive-layouts.web.app/"}
            projDesc="A fully responsive example website layout"
            skillsUsed={["HTML", "CSS", "JS"]}
            nanoid={nanoid}
            displayLinks={displayLinks}
            hideLinks={hideLinks}
          />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default App;
