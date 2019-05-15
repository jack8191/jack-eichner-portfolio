import React from 'react'

export default function Project(props) {
    return (
        <section className={'project ' + props.info.title}>
            <div className='flex'>
                <h2>{props.info.title}</h2>
                <h3>{props.info.descriptionHeader}</h3>
                <p>{props.info.description}</p>
                <a target="_blank" href={props.info.liveLink}>See it Live</a>
                <a target="_blank" href={props.info.gitHubLink}>View the Repo on Github</a>
                {props.info.techList}
                {props.info.photoCredit}
            </div>
            <div className='flex flex-image'>
                <img src={props.info.screenshot} alt="project screenshot"/>
            </div>
        </section>
    )
}