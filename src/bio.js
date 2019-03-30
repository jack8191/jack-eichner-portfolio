import React from 'react'

export default function Bio(props) {
    return(
        <section className="bio">
            <img src={props.headshot} alt="the owner of the portfolio" />
            <h1>{props.greeting}</h1>
            <h2>{props.introduction}</h2>
            <p>{props.programming}</p>
            <p>{props.personal}</p>
        </section>
    )}