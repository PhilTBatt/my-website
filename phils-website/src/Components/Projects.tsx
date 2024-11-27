export default function Projects() {
    return (
        <section className="section-box">
            <h2 className="text-[7vw] lg:text-[3vw]">
                My Projects
            </h2>
            <div className="flex flex-wrap px-1 justify-center pb-1">
                <a href="" target="blank" className="project-box">
                    Clowder - Cat Tracking Web App
                </a>
                <a href="https://philtbatt-ncnews.netlify.app/" target="blank" className="project-box">
                    Northcoders News Site
                </a>
                <a href="https://be-nc-news-oovq.onrender.com/api" target="_blank" className="project-box">
                    Northcoders News API
                </a>
            </div>
        </section>
    )
}