export default function Header() {
    return (
        <section className="section-box grid grid-cols-[3fr_1fr]">
            <div className="text-left pl-2 pb-1">
                <h1 className="text-[10vw] text-left leading-tight">
                    Philip Battersby
                </h1>
                <a href="mailto:philtbatt@gmail.com" aria-label="Email Philip Battersby" className="text-[6vw]">
                    philtbatt@gmail.com
                </a>
                <p className="text-[6vw]">
                    07786184893
                </p>
            </div>
            <span className="self-center pt-1">
                <a href="https://github.com/PhilTBatt" aria-label="Visit Philip Battersby's GitHub Profile">
                    <i className="fab fa-github text-5xl text-gray-700 hover:text-black"></i>
                </a>
                <br/>
                <a href="inkedin.com/in/philip-battersby" aria-label="Visit Philip Battersby's LinkedIn Profile">
                    <i className="fab fa-linkedin text-5xl text-blue-700 hover:text-blue-900"></i>
                </a>
            </span>
        </section>
    )
}