import React from 'react'

export default function Bio(props) {
    return(
        <section className="bio">
            <h1>{props.bio.greeting}</h1>
            <img src={props.headshot} alt="the owner of the portfolio" />
            <h2>{props.bio.introduction}</h2>
            <p>{props.bio.programming}</p>
            <p>{props.bio.personal}</p>
        </section>
    )}