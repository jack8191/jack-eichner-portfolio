import React from 'react'
import headshot from './headshot.jpg'
import singleStepScreenshot from './single-step-screenshot.png'
import recipeIteratorScreenshot from './michael-browning-14090-unsplash.jpg'
import surrealApiScreenshot from './surreal-api-screenshot.jpg'

export const copy = {
    headShot: headshot,
    bio: {
        greeting: "Hello. I'm Jack.",
        introduction: "I'm a full-stack web developer based in Portland, OR",
        programming: "I'm a recent graduate of the Fullstack Flex course from Thinkful. \
            My personal projects focus on my two favorite parts of \
            the web, which are tracking activities and silly fun. \
            I'm excited about applying technology's ability to augment memory, organization, \
            communication, and expression alongside a team of skilled and passionate developers.",
        personal: "When I'm not debugging server code or tweaking button CSS I enjoy listening \
            to trap music while lifting weights, listening to experimental dance music while \
            running, reading books, and playing tabletop role-playing games with my friends.",
        workAndEducation: "At university I studied history, literature, and semiotics. My education \
            makes me a better developer by giving me the context to understand how people use websites. \
            My working life I have spent in kitchens and retail. This means that no deadline or high-pressure \
            professional situation will ever bother me again. It also means I am well versed in working with a diverse \
            and vibrant set of teammates.",
        technologyProficient: (
            <ul className="tech-list">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node, Express</li>
                <li>Mongo/oose</li>
                <li>React/Redux</li>
            </ul>
            )
    },
    projects: {
        singleStep: {
            title: "Single Step",
            descriptionHeader: "Subject-agnostic Activity Tracker",
            description: "Built as a metadata-light universal goal-tracker, this app maintains simple and \
            friendly philosophy in its design and implementation.",
            screenshot: singleStepScreenshot,
            testCredentails: "Username: test Password: testpassword",
            liveLink: "https://pure-depths-96483.herokuapp.com",
            gitHubLink: "https://github.com/jack8191/single-step-client",
            techList: (
                <ul className="tech-list">
                    <li>Frontend: React/Redux</li>
                    <li>Backend: Node, Express, mongo/oose</li>
                </ul>
            )
        },
        recipeIterator: {
            title: "Recipe Iterator",
            descriptionHeader: "Culinary Development Platform",
            description: "Track details of culinary experimentation over time without worrying about \
            settting your notebook on fire in a gas burner.",
            screenshot: recipeIteratorScreenshot,
            testCredentails: "Username: test Password: testpassword",
            // photoCredit: (
                
            // ),
            liveLink: "http://www.recipeiterator.info",
            gitHubLink: "https://github.com/jack8191/recipe-iterator",
            techList: (
                <ul className="tech-list">
                    <li>Frontend: jQuery</li>
                    <li>Backend: Node, Express, mongo/oose</li>
                </ul>
            )
        },
        surrealImageQuoteMachine: {
            title: "Surreal Image/Quote Search Machine",
            descriptionHeader: "Automated Joke Generator",
            description: "Random quotes from Wikiquote paired with a random Unsplash search result create \
            puzzling and funny results.",
            screenshot: surrealApiScreenshot,
            testCredentails: "",
            liveLink: "https://surrealmashup.world/",
            gitHubLink: "https://github.com/jack8191/Surreal-Image-Quote-Search-Machine",
            techList: (
                <ul className="tech-list">
                    <li>Frontend: jQuery</li>
                    <li>Backend: Unsplash Search API, Wikiquote API</li>
                </ul>
            )
        }
    }
}