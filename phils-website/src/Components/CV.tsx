import cv from '../PhilipBattersby.pdf'

export default function CV() {
    return (
        <section>
            <h2>My CV</h2>
            <embed src={cv} type="application/pdf" width="55%" height="600px"/>
        </section>
    )
}