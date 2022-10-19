
function ProjectCard( {cssSelector, githubLink, websiteLink, projDesc, skillsUsed, nanoid, displayLinks, hideLinks } ){
    return(
        <div onMouseEnter={displayLinks} onMouseLeave={hideLinks} className="project-card" >
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
            <div className='project-skills-container'>

            {skillsUsed.map(skill =>
                
                 <img key={nanoid()} src= {`/skills-icons/${skill.toLowerCase()}.svg`} alt={`${skill} icon`} />

                )}


            </div>
        </div>
    )
}

export {ProjectCard}