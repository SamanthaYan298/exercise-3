import { useEffect, useState } from "react"
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function ExampleThree() {
    
    const [number, setNumber] = useState(0);

    const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

    useEffect(() => {
        if (number > colors.length - 1) {
            setNumber(0);
            console.log("Changing number value back to 0 " + colors[0]);
        } else {
            console.log("changing number value: " + colors[number]); // [] gives position and displays the selected colors
        }
    }, [number]) // when number changes, the useEffect will change.
    
    return (
        <>
            <h1>Example 3</h1>
            <button style={{backgroundColor: colors[number]}} 
            onClick={() => setNumber(number + 1)}>
                Increment Number
                </button>
            <div>
                {number}
            </div>
        </>
    )
}