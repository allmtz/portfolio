function SkillCard({ skillName, imgSrc, alt, highlightColor }) {
  return (
    <div className="skill-card" 
      onMouseEnter={ (e) =>
        {
          e.target.closest(".skill-card").style.boxShadow = `0px 0px 20px 3px ${highlightColor}`
        }}
       onMouseLeave={ () =>
        { 
          document.querySelectorAll(".skill-card").forEach( card => card.style.boxShadow = "0px 5px 5px 2px black")
        }}
       >
      <img src={imgSrc} alt={alt} />
      <p>{skillName}</p>
    </div>
  );
}

export { SkillCard };
