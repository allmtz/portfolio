//skill icons
import css from "../skills-icons/css.svg";
import firebase from "../skills-icons/firebase.svg";
import html from "../skills-icons/html.svg";
import js from "../skills-icons/js.svg";
import react from "../skills-icons/react.svg";
import tailwindcss from "../skills-icons/tailwindcss.svg";
import typescript from "../skills-icons/typescript.svg";
import sass from "../skills-icons/sass.svg";
import nextJS from "../skills-icons/next-js.svg";
import github from "../skills-icons/github.svg";
import nodejs from "../skills-icons/nodejs.svg";
import mysql from "../skills-icons/mysql.svg";

export const Skills = () => {
  return (
    <section className="skills-wrapper">
      <h2 className="skills-title">Skills</h2>
      <div className="skills">
        <img src={js} alt="javascript" />
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={firebase} alt="firebase" />
        <img src={react} alt="react" />
        <img src={typescript} alt="typescript" />
        <img src={tailwindcss} alt="tailwindCSS" />
        <img src={sass} alt="sass" />
        <img src={nextJS} alt="nextJS" />
        <img src={github} alt="github" />
        <img src={nodejs} alt="nodeJS" />
        <img src={mysql} alt="mysql" />
      </div>
    </section>
  );
};
