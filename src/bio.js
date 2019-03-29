import React from 'react'

export default function Bio(props) {
    return(
        <section className="introduction">
            <img src={props.headShot} alt="the owner of the portfolio" />
            <h1>Hello. I'm Jack</h1>
            <h2>I'm a fullstack web developer based in Portland, OR</h2>
            <p>
                I'm a recent graduate of the Fullstack Flex course from Thinful.
                My personal projects focus on my two favorite parts of
                the web, which are tracking activites and silly fun.
                I'm exited about applying technogy's ability to augment memory, organization,
                communication, and self-expression.  
            </p>
            <p>
                When I'm not debugging server code or tweaking button CSS I enjoy listening
                to trap music while lifting weights, listening to experemental dance music while
                running, reading books, and playing tabletop role-playing games with my friends.
            </p>
        </section>
    )}