// social icons
import linkedIn from "../social-icons/linkedin.svg";
import github from "../social-icons/github.svg";

export const Intro = () => {
  return (
    <div className="card intro-card">
      <div className="intro">
        <div>
          <h1>Hello, I'm Allan, a freelance web-developer</h1>
          <p>
            I'm a fast learning frontend developer who loves conquering new
            challenges. With a focus on constant improvement, I can deliver
            custom web-applications that stand out.
          </p>
        </div>
        <section className="contact-banner">
          <button>Contact</button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/jobs/view/front-end-engineer-multiple-openings-from-jr-to-lead-staff-architect-level-consumer-fintech-at-skyrocket-ventures-3020302070/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
          >
            <img className="social" src={linkedIn} alt="linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/allmtz">
            <img className="social" src={github} alt="github" />
          </a>
        </section>
      </div>
    </div>
  );
};
