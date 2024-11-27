import cv from '../PhilipBattersby.pdf'

export default function CV() {
    return (
        <section className="section-box ">
            <h2 className="text-[7vw]">
                My CV
            </h2>
            <div>
                <embed src={cv} type="application/pdf" className="w-full h-[50vh] rounded-xl p-1"/>
            </div>
        </section>
    )
}