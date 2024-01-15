import { useEffect, useState } from "react"
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

// we want to set up a counter
// after every one second the number increases by 1
// we want to display that number on screen as it increases

export default function ExampleFive() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);3

        return () => clearInterval(interval);
    }, [count])

    return (
        <>
            <Header/>
            <main>
                <h1>Example 5</h1>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    textAlign: "center",

                }}>
                    <h1>Number Counter</h1>
                    <h3>Example using setInterval</h3>
                    <div>{count}</div>
                </div>
            </main>
            <Footer/>
        </>
    )
}