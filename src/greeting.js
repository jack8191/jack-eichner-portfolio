import React from 'react'

export default function Greeting(props) {
    return (
        <section className="bio">
            <div className="flex">  
                <h1>{props.bio.greeting}</h1>
                <h2>{props.bio.introduction}</h2>
                <button onClick={props.onClick}>More About Me</button>
            </div>
            <div className="flex flex-image flex-image-bio">
                <img className="headshot" src={props.headshot} alt="the owner of the portfolio" />
            </div>
        </section>
    )
}