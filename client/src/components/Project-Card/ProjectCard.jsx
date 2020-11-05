import React from "react"
import "./projectcard.css"

export default function ProjectCard({ projectName, projectImage, projectLink, projectDesicription }){
    return(
        <div className="card portfolioCard mb-3 col-10 col-sm-5 col-md-3">
        <img src={projectImage} className=" mt-3 card-img-top" alt= {projectName} />
        <div className="card-body">
        <h5 className="card-title">{projectName}</h5>
        <p className="card-text">{projectDesicription}</p>
        <p>Click on the button below to check out the GitHub repository for yourself.</p>
        <a href={projectLink} class="btn btn-sm btn-dark">GitHub Repo</a>
        </div>
    </div>
    )
    
}