import { motion } from "framer-motion";

function Project({
  title,
  desc,
  github,
  demo,
  imageSrc,
  imgPosition,
  bgColor,
  txtColor,
}) {
  return (
    // <a href={demo} target="_blank" rel="noreferrer">
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ type: "tween", duration: 1, delay: 3.5 }}
    >
      <div
        className="card project-card"
        style={{
          color: `${txtColor}`,
          backgroundColor: `${bgColor}`,
        }}
      >
        <motion.div className="project-info" whileHover={{ scale: 1.05 }}>
          <div>
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
    // </a>
  );
}

export { Project };
