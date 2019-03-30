import headshot from './headshot.jpg'
import singleStepScreenshot from './single-step-screenshot.png'
import recipeIteratorScreenshot from './michael-browning-14090-unsplash.jpg'
import surrealApiScreenshot from './surreal-api-screenshot'

export const copy = {
    headShot: headshot,
    bio: {
        greeting: "Hello. I'm Jack",
        introduction: "I'm a fullstack web developer based in Portland, OR",
        programming: "I'm a recent graduate of the Fullstack Flex course from Thinful. \
            My personal projects focus on my two favorite parts of \
            the web, which are tracking activites and silly fun. \
            I'm exited about applying technogy's ability to augment memory, organization, \
            communication, and expression alongside a team of skilled and passionate developers.",
        personal: "When I'm not debugging server code or tweaking button CSS I enjoy listening \
            to trap music while lifting weights, listening to experemental dance music while \
            running, reading books, and playing tabletop role-playing games with my friends."
    },
    projects: {
        singleStep: {
            title: "Single Step",
            descriptionHeader: "Subject-agnostic Activity Tracker",
            description: "I built this app as a lightweight alternative to activity-specific \
            goal tracking. The uncluttered design and 'carrot instead of stick' philosophy \
            of eventual rewards regardless of setbacks encourages a growth mindset. Further work may \
            include an expansion of archival and tagging functionality as well as using metadata to \
            track success of multiple goals over time to reenforce the feeling of personal development.",
            screenshot: singleStepScreenshot,
            liveLink: "https://pure-depths-96483.herokuapp.com/",
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
            descriptionHeader: "Culinary Development Platorm",
            description: "During my time working in a kitchen I experemented a great deal to \
            find the best way to cook the restaurant's menu. Rather than writing details of the \
            attempts over time in a sauce-stained stove-scorchable notebook I instead made this app \
            with all the benefits of remote storage. Furter work would involve archival and tagging functionality, as \
            well as enhancing collaboration and sharing amoung users.",
            screenshot: recipeIteratorScreenshot,
            photoCredit: (
                <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, 
                BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@michaelwb?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" 
                title="Download free do whatever you want high-resolution photos from Michael Browning">
                <span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32">
                <title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span>
                <span style="display:inline-block;padding:2px 3px">Michael Browning</span></a> 
            ),
            liveLink: "",
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
            description: "I wrote this small app to exploit the human brain's tendency to see patterns \
            for strange and humerous effect. A random photo paired with a random quote can have you scratching your head \
            or busting up laughing. Further work would include enhancing sharability of the resulting combinations as well \
            as changing the implementation of the image search to be more scalable.",
            screenshot: surrealApiScreenshot,
            liveLink: "https://jack8191.github.io/Surreal-Image-Quote-Search-Machine/",
            gitHubLink: "https://github.com/jack8191/Surreal-Image-Quote-Search-Machine",
            techList: (
                <ul className="tech-list">
                    <li>Frontend: jQuery</li>
                    <li>Backend: Unsplash Search API, WikiQuote API</li>
                </ul>
            )
        }
    }
}