
function ProjectCard( {cssSelector, githubLink, websiteLink, projDesc, skillsUsed, nanoid, displayLinks, hideLinks } ){
    // const iconPath = {
    //     css: "/static/media/css.72bbde5dd6854ae0b255f45a8e068f35.svg",
    //     firebase: "static/media/firebase.5a220cf7ff626941283f787de7891935.svg",
    //     github: 'skills-icons/github.svg',
    //     html: "/static/media/html.4020b5baf8cfa2b70a56e0f29326c4af.svg",
    //     js: "/static/media/js.9ac45f986540a766df551d315cf219d7.svg",
    //     react: "/static/media/react.9e733bc6f8cc6085e0425d6c18d02572.svg",
    //     tailwindcss: "/static/media/tailwindcss.f7a4a19adb5ca2a37966dc5840e20d2e.svg",
    //     typescript: "/static/media/typescript.3cac26dea1892714331a83b2755212de.svg",
    // }
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
                 <img key={nanoid()} src={skill} alt={`skill icon`} />
                )}


            </div>
        </div>
    )
}

export {ProjectCard}