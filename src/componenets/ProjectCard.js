function ProjectCard( {projectName, githubLink, websiteLink, projDesc, skillsUsed, imageSrc} ){
    return(
        <div className="project-card" >
            <div className="project-display">
                <img className="project-image" src={imageSrc} alt="project home page" /> 
            </div>
            <p className="project-desc">
                {projDesc}
            </p>
            <div className="project-links">
                <a
                    href= {githubLink}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <iconify-icon
                        icon="codicon:github-inverted"
                        style={{color: "white"}}
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
    )
}

export {ProjectCard}