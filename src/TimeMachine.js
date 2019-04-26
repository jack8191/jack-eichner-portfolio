import React from 'react'

export default function TimeMachine() {
    return (
        <section className='time-machine'>
            <h1>Jack's Kool Website</h1>
            <h2>It's the site I would have made as a kid.</h2>
            <section className="gifs">
                <p>Here's some gifs of stuff I like</p>
                <iframe src='https://gfycat.com/ifr/AbandonedUnimportantBonobo' frameBorder='0' scrolling='no' allowFullScreen width='640' height='535'></iframe><p> <a href="https://gfycat.com/abandonedunimportantbonobo-trunks">via Gfycat</a></p>
                <iframe src='https://gfycat.com/ifr/ShortGrizzledIraniangroundjay' frameBorder='0' scrolling='no' allowFullScreen width='640' height='404'></iframe><p> <a href="https://gfycat.com/shortgrizzlediraniangroundjay">via Gfycat</a></p>
                <iframe src='https://gfycat.com/ifr/ScholarlyJaggedInganue' frameBorder='0' scrolling='no' allowFullScreen width='640' height='524'></iframe><p><a href="https://gfycat.com/gifs/search/breakfast">from Breakfast GIFs</a> <a href="https://gfycat.com/scholarlyjaggedinganue-the-simpsons-breakfast-surprised-disaster">via Gfycat</a></p>
                <iframe src='https://gfycat.com/ifr/LivelyLinedFirebelliedtoad' frameBorder='0' scrolling='no' allowFullScreen width='640' height='412'></iframe><p> <a href="https://gfycat.com/livelylinedfirebelliedtoad-finishing-touch-cloud-ff7">via Gfycat</a></p>
            </section>
            <section className="music">
                <p>Music is one of the most kool things of all</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PVyS9JwtFoQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DDqNL0js0iU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            <section className="quote-zone">
                <p>Quote Zone</p>
                <p>“And for What, For What. No matter what you do it will never amount to anything but a single drop in a limitless ocean. What is an ocean but a multitude of drops.” ― David Mitchell, Cloud Atlas</p>
            </section>
        </section>
    )
}