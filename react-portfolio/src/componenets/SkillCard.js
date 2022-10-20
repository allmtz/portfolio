function SkillCard({ skillName, imgSrc, alt }) {
  return (
    <div className="skill-card">
      <img src={imgSrc} alt={alt} />
      <p>{skillName}</p>
    </div>
  );
}

export { SkillCard };
