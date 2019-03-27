import React from 'react'

export default function Bio(props) {
    return(
        <section className="introduction">
            <img src={props.headShot} alt="image of the owner of the portfolio" />
            <h1>Hello. I'm Jack</h1>
            <h2>I'm a fullstack web developer based in Portland, OR</h2>
            <p>
                My personal projects focus on my two favorite parts of
                the web, which are tracking activites and progress, and silly fun.
                I'm exited about applying technogy's ability to augment memory, organization,
                communication, and self-expression. I enjoy working on projects or delegated tasks
                independantly while also having a team on which to rely.  
            </p>
            <p>
                When I'm not debugging server code or tweaking button designs I enjoy listening
                to trap music while lifting weights, listening to experemental dance music while
                running, listening to road sounds while riding my bike(bikinging with headphones in 
                is dangerous) or listening to relaxing music while reading a book.
            </p>
        </section>
    )}