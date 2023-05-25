// social icons

import { Github } from "./Github";
import Linkedin from "./Linkedin";
import SocialLink from "./SocialLink";

export const Intro = () => {
  return (
    // <div className="card intro-card">
    <div className="intro" id="about">
      <div>
        <h1>Hello, I'm Allan, a freelance web-developer</h1>
        <p>
          I'm a fast learning frontend developer who loves conquering new
          challenges. With a focus on constant improvement, I can deliver custom
          web-applications that stand out.
        </p>
      </div>
      <section className="contact-banner">
        <button>Contact</button>
        <SocialLink link={"https://github.com/allmtz"} alt={"github"}>
          <Github className="social github"></Github>
        </SocialLink>
        <SocialLink
          link={"https://www.linkedin.com/in/allan-martinez-ab8848252/"}
          alt={"linkedin"}
        >
          <Linkedin className="social linkedin"></Linkedin>
        </SocialLink>
      </section>
    </div>
    // </div>
  );
};
