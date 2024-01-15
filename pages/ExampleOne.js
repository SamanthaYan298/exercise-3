import { useEffect, useState } from "react"
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    /** usually this will cause an infinite loop, so it it
     *  best to not do this incase your code breaks
     * code in pages will run two times.
     * Once to render what we want and another is to 
     * rendern strict mode to find any common buys
     */ 

    useEffect(() => {
        console.log(number);
    })

    return (
        <>
            <Header/>
                <main>
                    <h1>Example 1</h1>
                    <div>Infinite loop</div>
                    {number}
                </main>
            <Footer/>
        </>
    )
}