import { ContactBtn } from "./ContactBtn";
import { SocialLink } from "./SocialLink";
// social icons
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";

export const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>Hello, I'm Allan, a freelance web-developer</h1>
        <p>
          I'm a fast learning frontend developer who loves conquering new
          challenges. With a focus on constant improvement, I can deliver custom
          web-applications that stand out.
        </p>
      </div>
      <section className="contact-banner">
        <ContactBtn cardName={"intro"}></ContactBtn>
        <div className="social-container">
          <SocialLink link={"https://github.com/allmtz"} alt={"github"}>
            <Github className="social github"></Github>
          </SocialLink>
          <SocialLink
            link={"https://www.linkedin.com/in/allan-martinez-ab8848252/"}
            alt={"linkedin"}
          >
            <Linkedin className="social linkedin"></Linkedin>
          </SocialLink>
        </div>
      </section>
    </div>
  );
};
