// const Child = (props) =>{
//     let {username} = props
//     console.log(props)
//     return(
//         <div>
//             <h3>{username}</h3>
//         </div>
//     )
// }

// import { Component, useState } from "react";

// import { Component } from "react";

// class Child extends Component{
//     render(){
//         return(
//             <>
//             {this.props.username}
//             </>
//         )
//     }
// }
// export default Child

// class Child extends Component {
//     constructor() {
//         super()

//         this.changeName = this.changeName.bind(this)
//     }
//     state = {
//         name: "Ali",
//          age:12
//     }
//     // changeName = () =>{
//     //     this.setState({name: "Mina"})
//     // }
//     changeName() {
//         this.setState({ name: "Mina" })
//     }

//     render() {
//         let { name, age } = this.state
//         return (
//             <div>

//                 {name}
//                 <button onClick={this.changeName}>Click</button>
//             </div>
//         )
//     }
// }
// export default Child


// import { useState } from "react";

// const Child = () =>{
//     let [name, setName]= useState("")
//     let [age, setAge]= useState()
//     let changeName= () =>{
//         setName("Mina")
//     }
//     return(
//         <div>
//             {name}
//             <button onClick={changeName}>Change the Value</button>
//         </div>
//     )
// }
// export default Child

// import "../App.css"
// const Child =()=>{
//     let [number, setNumber] = useState(0)

//     let plus=()=>{
//         setNumber(++number)
//     }
//     let minus= ()=>{
//         // if(number>0){
//         //     setNumber(--number)
//         // }
//         {number > 0 ? setNumber(--number) : setNumber(0)}
//     }
//     let reset= ()=>{
//         setNumber(0)
//     }

    let textStyle= {textAlign: "center"}
//     return(
//         <div style={textStyle}>
//         {/* <h3 style={number ==0 ? {color: 'red', background: 'yellow'} : {color: 'blue'}}>{number}</h3> */}
//         <h3 style={{color: number==0 ? "red" : "blue"}}>{number}</h3>
//         <button className="btn" onClick={plus}>Plus</button>
//         <button className="btn" disabled={number==0 ? true : false} onClick={reset}>Reset</button>
//         <button className="btn" onClick={minus}>Minus</button>
//         </div>
//     )
// }



const Child = (props) => {
    return (
        <div style={textStyle}>
            {/* <h3 style={number ==0 ? {color: 'red', background: 'yellow'} : {color: 'blue'}}>{number}</h3> */}
            <h3 style={{ color: props.num == 0 ? "red" : "blue" }}>{props.num}</h3>
            <button className="btn" onClick={props.increase}>Plus</button>
            <button className="btn" disabled={props.num == 0 ? true : false} onClick={props.reset}>Reset</button>
            <button className="btn" onClick={props.decrease}>Minus</button>
        </div>
    )
}
export default Child