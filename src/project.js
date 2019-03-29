import React from 'react'

export default function Project(props) {
    return (
        <section className="project">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.screenshot} alt="project screenshot"/>
            <a href={props.liveLink}>See it Live</a>
            <a href={props.gitHubLink}>View the Repo on Github</a>
            <p>{props.techList}</p>
        </section>
    )
}