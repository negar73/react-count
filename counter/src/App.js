import Child from "./components/Child"

import {useState} from "react"

const App = () =>{
  let user="Kazemi";
  let [number, setNumber] = useState(0)

    let plus=()=>{
        setNumber(++number)
    }
    let minus= ()=>{
        // if(number>0){
        //     setNumber(--number)
        // }
        {number > 0 ? setNumber(--number) : setNumber(0)}
    }
    let reset= ()=>{
        setNumber(0)
    }
  return(
    <>
      {/* {user ? <h3>hello {user}</h3> : <p>hello client</p>} */}
      {/* <Child username= {user}>سلام اینجا کلاس ریکت است</Child> */}

      <Child increase={plus} decrease={minus} reset={reset} num={number} />
    </>
  )
}
export default App