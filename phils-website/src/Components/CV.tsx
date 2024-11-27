import cv from '../PhilipBattersby.pdf'

export default function CV() {
    return (
        <section className="section-box">
            <h2 className="text-[7vw] lg:text-[2.5vw]">
                My CV
            </h2>
            <div className='px-[2vw] pb-[1.5vw]'>
                <embed src={cv} type="application/pdf" className="w-full h-[50vh] rounded-3xl lg:h-[115vh]"/>
            </div>
        </section>
    )
}