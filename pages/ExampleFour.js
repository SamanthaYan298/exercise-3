import { useEffect, useState } from "react"
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function ExampleFour() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray");

    const [trigger, setTrigger] = useState(false);

    //function
    const HandleChange = () => {
        if(number > 2) {
            setColor("orange");
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        if(trigger) { // it is already a boolean
            interval = setInterval(() => {
                HandleChange()
                setTrigger(false);
            }, 3000) // after 3 seconds then it will do the console log below
        } 
        console.log(number);
        console.log(trigger);

        // Clearing the interval do it doesn't get stuck in a loop
        return () => clearInterval(interval);
    }, [trigger])

    return (
        <>
            <Header/>
            <main>
                <button onClick={() => {
                    setNumber(number + 1);
                    setTrigger(true);
                }}>Add number</button>
                <h1 style={{ color: color }}>Change the text color</h1>

                {
                    number > 1 && <div style ={{
                        backgroundColor: `${color}`,
                        lineHeight: 10,
                        padding: 20
                    }}>
                        Box
                    </div>
                }
            </main>
            <Footer/>
        </>
    )
}