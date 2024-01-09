/* eslint-disable react/prop-types */

export function Project ({img, project, repo, live}) {
    return (
        <div className="projects__item">
            <figure className="projects__item__image bg__3">
                <img src={img} alt={`${project} project preview`}/>
                <figcaption>
                <h2>
                    {project}
                </h2>
                </figcaption>
            </figure>
            <nav className="projects__item__links">
                <a href={repo} target="_blank" rel="noopener noreferrer">
                View repository
                </a>
                <a href={live} target="_blank" rel="noopener noreferrer">
                Visit
                </a>
            </nav>
        </div>
    )
}