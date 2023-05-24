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
    <a href={demo} target="_blank" rel="noreferrer">
      <div
        className="card project-card"
        style={{
          color: `${txtColor}`,
          backgroundColor: `${bgColor}`,
        }}
      >
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
      </div>
    </a>
  );
}

export { Project };
