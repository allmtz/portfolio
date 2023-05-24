function Project({ title, desc, github, demo, imageSrc, bgColor, txtColor }) {
  return (
    <div
      className="card project-card"
      style={{ color: `${txtColor}`, backgroundColor: `${bgColor}` }}
    >
      <div>
        <p className="project-title"> {title}</p>
        <p className="project-desc">{desc}</p>
      </div>
      <img className="project-image" src={imageSrc} alt="" />
    </div>
  );
}

export { Project };
