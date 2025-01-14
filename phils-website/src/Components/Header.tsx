export default function Header() {
    return (
        <section className="section-box grid grid-cols-[3fr_1fr] lg:px-[2vw]">
            <div className="text-left pl-2 pb-1">
                <h1 className="text-[10vw] text-left leading-tight lg:text-[4.5vw]">
                    Philip Battersby
                </h1>
                <a href="mailto:philtbatt@gmail.com" aria-label="Email Philip Battersby" className="text-[6vw] lg:text-[2.5vw] hover:text-gray-700">
                    philtbatt@gmail.com
                </a>
            </div>
            <span className="self-center pt-1 flex flex-col lg:flex-row lg:p-[0.75vw]">
                <a href="https://github.com/PhilTBatt" target="blank" aria-label="Visit Philip Battersby's GitHub Profile">
                    <i className="fab fa-github text-[9.5vw] text-gray-700 hover:text-black lg:text-[8vw] lg:px-10"></i>
                </a>
                <a href="inkedin.com/in/philip-battersby" target="blank" aria-label="Visit Philip Battersby's LinkedIn Profile">
                    <i className="fab fa-linkedin text-[9.5vw] text-blue-700 hover:text-blue-900 lg:text-[8vw]"></i>
                </a>
            </span>
        </section>
    )
}