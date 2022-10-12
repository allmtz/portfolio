
function ProjectCard( {cssSelector, githubLink, websiteLink, projDesc, skillsUsed, nanoid } ){
    return(
        <div className="project-card">
            <div className={`project-display ${cssSelector}`}>
            <div className="project-links">
                <a
                href= {githubLink}
                target="_blank"
                rel="noreferrer"
                >
                <iconify-icon
                    icon="codicon:github-inverted"
                    style={{color: "black"}}
                    width="50"
                    height="50"
                ></iconify-icon>
                </a>
                <a
                className="demo-link"
                href={websiteLink}
                target="_blank"
                rel="noreferrer"

                >Demo</a>
            </div>
            </div>
            <p className="project-desc">
                {projDesc}
            </p>
            <div>

            {/* <img src="/skills-icons/html.svg" alt="HTML icon" />
            <img src="/skills-icons/css.svg" alt="CSS icon" />
            <img
                src="/skills-icons/js.svg"
                alt="JS icon"
            /> */}

            {skillsUsed.map(skill =>
                
                 <img key={nanoid()} src= {`/skills-icons/${skill.toLowerCase()}.svg`} alt={`${skill} icon`} />

                )}


            </div>
        </div>
    )
}

export {ProjectCard}