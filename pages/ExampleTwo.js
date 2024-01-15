import { useEffect } from "react"
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function ExampleTwo() {

    //The [] makes sure the useEffect only runs once

    /**
     * code on pages will run two times
     * Once to render what we want and another is to
     * render strict mode to find any common bugs
     */
    useEffect(() => {
        console.log("RUN");
    })

    return (
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}