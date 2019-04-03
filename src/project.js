import React from 'react'

export default function Project(props) {
    return (
        <section className="project">
            <h2>{props.info.title}</h2>
            <h3>{props.info.descriptionHeader}</h3>
            <p>{props.info.description}</p>
            <img src={props.info.screenshot} alt="project screenshot"/>
            <a href={props.info.liveLink}>See it Live</a>
            <a href={props.info.gitHubLink}>View the Repo on Github</a>
            {props.info.techList}
            {props.info.photoCredit}
        </section>
    )
}