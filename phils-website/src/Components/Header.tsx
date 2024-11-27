export default function Header() {
    return (
        <section className="section-box grid grid-cols-[3fr_1fr] lg:px-[2vw]">
            <div className="text-left pl-2 pb-1">
                <h1 className="text-[10vw] text-left leading-tight lg:text-[4.5vw]">
                    Philip Battersby
                </h1>
                <a href="mailto:philtbatt@gmail.com" aria-label="Email Philip Battersby" className="text-[6vw] lg:text-[2.5vw]">
                    philtbatt@gmail.com
                </a>
                <p className="text-[6vw] lg:text-[2.5vw]">
                    07786184893
                </p>
            </div>
            <span className="self-center pt-1 flex flex-col lg:flex-row">
                <a href="https://github.com/PhilTBatt" target="blank" aria-label="Visit Philip Battersby's GitHub Profile">
                    <i className="fab fa-github text-[15vw] text-gray-700 hover:text-black lg:text-[11vw] lg:px-10"></i>
                </a>
                <a href="inkedin.com/in/philip-battersby" target="blank" aria-label="Visit Philip Battersby's LinkedIn Profile">
                    <i className="fab fa-linkedin text-[15vw] text-blue-700 hover:text-blue-900 lg:text-[11vw]"></i>
                </a>
            </span>
        </section>
    )
}