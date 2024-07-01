// UseState
import {useState} from 'react'

function Counter(){
    // Internal state
    const [counter, setCounter] = useState(0);

    function increament(){
        setCounter(counter + 1)
    }

    function decreament(){
        setCounter(counter - 1)
    }
    // 1. Content to be rendered
    return(
        

        <div>
            <h1>Counter: {counter}</h1>

            <button onClick={increament}>+</button>
            <button onClick={decreament}>-</button>
        </div>
    )
}

export default Counter;












//Alternatively
// export default function Counter(){
//     return(
//         <div></div>
//     )
// }


