import React from 'react'

export default function Bio(props) {
    return(
        <section className="bio">
            <div className="flex">  
                <h1>{props.bio.greeting}</h1>
                <h2>{props.bio.introduction}</h2>
                <p>{props.bio.programming}</p>
                <p>I am proficient in the following technologies:</p>
                {props.bio.technologyProficient}
                {/* <p>{props.bio.workAndEducation}</p> */}
                {/* <p>{props.bio.personal}</p> */}
                <p>I am currently studying SQL and relational databases.</p>      
            </div>
            <div className="flex flex-image flex-image-bio">
                <img className="headshot" src={props.headshot} alt="the owner of the portfolio" />
            </div>
        </section>
    )}