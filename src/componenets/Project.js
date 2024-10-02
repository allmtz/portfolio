import { motion } from "framer-motion";
import NEarrow from "./NEarrow";
import { timing } from "../App";
import { logEvent } from "firebase/analytics";
import { useContext } from "react";
import { AnalyticsContext } from "./AnalyticsProvider";

function Project({
  title,
  desc,
  github,
  demo,
  imageSrc,
  imgPosition,
  bgColor,
  txtColor,
  arrowColor,
}) {
  const analytics = useContext(AnalyticsContext);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        type: "tween",
        duration: timing.project.duration,
        delay: timing.project.delay,
      }}
    >
      <div
        className="card project-card"
        style={{
          color: `${txtColor}`,
          backgroundColor: `${bgColor}`,
        }}
      >
        <motion.div className="project-contents" whileHover={{ scale: 1.02 }}>
          <div>
            <div>
              <a
                className="project-link"
                href={demo}
                target="_blank"
                rel="noreferrer"
                style={{ border: `2px solid ${arrowColor}` }}
                data-testid="demo-link"
                onClick={() =>
                  logEvent(analytics, `clicked-project-link-${title}`)
                }
              >
                <NEarrow color={arrowColor}></NEarrow>
              </a>
            </div>
            <p className="project-title"> {title}</p>
            <p className="project-desc">{desc}</p>
          </div>
          <img
            className="project-image"
            src={imageSrc}
            alt="landing page"
            style={{ objectPosition: `${imgPosition}` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export { Project };
