import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";


// 1)Components : There are two components in React 
// 1) Funtion compoenents: ------------------------

// function Greet(props){
//   return <h1>Hello, {props.name} </h1>;
// }

// 2) Class Components:--------------
// class Greet extends React.Component{
//   render(){
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// 3)PROPS: Pass data from parent to child:------------------------

// function App() {
//   return <Greet name="Vijay "/>
// }
// function Greet({name}){
//   return <h1>Hello, {name}</h1>
// }

// 3) State Managment: 
//1) UseState
// function Counter(){
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//     <button onClick={() => setCount(count + 1)} >Incerement</button> 
//     <button onClick={() => setCount(count - 1)}>Decrement</button>
//     <button onClick={() => setCount(0)}>Reset</button>
//     <h1>{count}</h1>
//     </div>
//   )
// }
// export default Counter


//4. Rendering Lists-------------
// Use map() to render dynamic lists.

// const todos = ["learn React",  "build a project"];

// function TodoList(){
//   return(
//     <ol>
//       {todos.map((todo, index) => (
//         <li key={index}>{todo}</li>
//       ))}
//     </ol>
//   )
// }
// export default TodoList


//Hooks--------------
// 1) useEffect
// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch("https://api.example.com/data")   //fetch APi
//   .then((res) => res.json())             //res 
//   .then((data) => setData(data));        //Data 
// });

//2) useContext:
// const ThemeContext = createContext("light");

// <ThemeContext.Provider value = "dark">
//   <App />
// </ThemeContext.Provider>

// const theme = useContext(ThemeContext);

//Routing ------------------------
//1) React Router:

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//2) API Integration --
// const [user, setUser] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   fetch("https://api.example.com")
//   .then((res) => res.json())
//   .then((data) => {
//     setUser(data)
//     setLoading(false);
//   });
// }, []);

// 4)Forms:----- controlled inputs 
const [name, setName] = useState("");

<input 
  type="text"
  value = {name}
  onChange = {(e) => setName(e.target.value)}
/>  

//Next Topic is React Redux toolkit so watch the in this playlist there is separate section for that : 