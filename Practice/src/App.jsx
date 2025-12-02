import "./App.css";
import {
  Fragment,
  Suspense,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { Component } from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";
import { useEffect } from "react";
import React from "react";
// import {ThemeContext} from "../ThemeProvider/ThemeProvider";

//COMPONENTS:
// function counter() {
// const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }
// export default counter;

// //PROPS:
// function Greeting(props){
//   return <h1>Hello, {props.name}</h1>;
// }
// function App(){
//   return <Greeting name="Alice"/>;
// }

// export default App;

//passing multiple props:
// function UserProfile(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// function App() {
//   return <UserProfile name="John Doe" age={25} />;
// }
// export default App;

//passing functions as props (callback functions):
// function Button({onClick}){
//   return <button onClick={onClick}>Click Me</button>
// }

// function App(){
//   const handleClick = () => alert("Button clicked!");

// return <Button onClick={handleClick}/>
// }
// export default App;

//passing objects & arrays as props:
// const user = {name: "Vijay", age: 21};

// function UserProfile({user}) {
//   return <h2>{user.name} is {user.age} years old</h2>;
// }

// function App(){
//   return <UserProfile user={user}/>;
// }
// export default App;

// State managment:
// const reducer = (state, action) => {
//   switch(action.type){
//     case "increment":
//       return {count: state.count + 1};
//       default:
//         return state;
//   }
// };

// function Counter(){
//   const [state, dispatch] = useReducer(reducer, {count: 0});

//   return (
//     <div>
//       <p> Count: {state.count}</p>
//       <button onClick={() => dispatch({type: "increment"})}>Increase</button>
//     </div>
//   )
// }
// export default Counter;

// Use Context in child components:
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeProvider"; // Importing ThemeContext

// const ThemeSwitcher = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <p>Current Theme: {theme}</p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// export default ThemeSwitcher;

// EVENT HANDLING:
// function Button(){
//   function handleClick(){
//     alert("button clicked!")
//   }
//   return <button onClick={handleClick}>Click Me</button>
// }
// export default Button;

//passing arguments to event handlers:
// function Button(){
//   function handleClick(name){
//     alert (`Hello, ${name}!`);
//   }
//   return <button onClick={()=> handleClick("Vijay")}>Greet</button>;
// }
// export default Button;

//Synthetic Events in React:- react wraps events in a synthticEvent which normalizes behaviour across bowsers
// function Form(){
//   function handleSubmit(event){
//     event.preventDefault();
//     alert ("Form submitted!");
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type='submit'>submit</button>
//     </form>
//   )
// }
// export default Form;

//Handling Keyboard Events:
// function InputField(){
//   function handleKeyPress(event){
//     if (event.key === "Enter"){
//       alert ("Enter key presses");
//     }
//   }
//   return <input type = "text" onKeyPress={handleKeyPress} />
// }
// export default InputField;

//Mouse Over:
// function MouseTracker() {
//   function handleMouseEnter() {
//     console.log("Mouse is over the element!");
//   }

//   return <div onMouseEnter={handleMouseEnter}>Hover over me</div>;
// }
// export default MouseTracker;

//handling events with state(example: toggle button):
// function ToggleButton(){
//   const [isOn, setIsOn] = useState(false);

//   function toggle(){
//     setIsOn (!isOn);
//   }
//   return <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>;
// }
// export default ToggleButton;

//Using useEffect for global event listeners:
// function WindowResize (){
//   useEffect(() => {
//     function handleResize (){
//       console.log("Window Resized!");
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return <p>Resize the window and check the console.</p>
// }
// export default WindowResize;

//conditional Rendering:
// function Greeting({isLoggedIn}){
//   if (isLoggedIn){
//     return <h1>Welcome Back!</h1>;
//   } else{
//     return <h1>Please log in</h1>
//   }
// }
// function App (){
//   return <Greeting isLoggedIn={true}/>
// }
// export default App;

//Using the ternary operator(? :):
// function Greeting(isLoggedIn){
//   return <h1>{isLoggedIn ? "Welcome Back" : "Please log in."}</h1>
// }
// export default Greeting;

//Using || for default values:
// the || operator provides a fallback value if the first expression is falsy
// function UserName ({name}){
//   return <h1>{name || "Guest"}</h1>;
// }
// export default UserName;

//List and keys:
// rendering list dynamically is a core concept in react. keys help react efficiently update the ui when items change:

//Rendering a list of names:
// function NameList (){
//   const names = ["vijay", "aj", "jk", "vp"];

//   return (
//     <ol>
//       {names.map ((name, index) => (
//         <li key = {index}>{name}</li>
//       ))}
//     </ol>
//   );
// }
// export default NameList;

//using unique keys in list:
// function UserList (){
//   const users = [
//     {id:1, name:"bob"},
//     {id:2, name:"charlie"},
//     {id:3, name:"Rakesh"},
//   ];
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }
// export default UserList;

//lists with conditional rendering:
// you can conditionally render items in a list:
// function ActiveUsers({ users }) {
//   return (
//     <ul>
//       {users.map((user) =>
//         user.isActive ? <li key={user.id}>{user.name}</li> : null
//       )}
//     </ul>
//   );
// }

// export default ActiveUsers;

//UNIDIRECTIONAL DATA FLOW:
// using props:
// function ChildComponent ({message}){
//   return <h2>{message}</h2>;
// }

// function ParentComponent(){
//   return <ChildComponent message = "Hello from Parent!"/>
// }
// export default ParentComponent;

//updating parents state from child (state lifting):
// function ChildComponent ({updateMessage}){
//   return <button onClick={() => updateMessage("Hello from child!")}>Click Me</button>;
// }

// function ParentComponent (){
//   const [message, setMessage] = useState ("Initial Message");

//   return (
//     <div>
//       <h2>{message}</h2>
//       <ChildComponent updateMessage={setMessage}/>
//     </div>
//   );
// }
// export default ParentComponent;

//HOOKS:- Hooks are special functions in react that let you use state and lifecycle features in functional components without needing class components:
// function Counter (){
//   const [count, setCount] = useState (0);

//   return(
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>increment</button>
//       <br />
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }
// export default Counter;

//useEffect - Handling side effects:
//useEffect is used for side effects like data fetching, subscriptions, timers, or dom updates:
// function FetchData (){
//   const [data, setData] = useState([]);

//   useEffect (() => {
//     fetch ("https://jsonplaceholder.typicode.com/posts")
//     .then ((response) => response.json())
//     .then ((json) => setData(json));

//     return () => console.log("cleanup if needed");
//   }, []);

//   return (
//     <ul>
//       {data.slice(0,5).map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))} 
//     </ul>
//   );
// }
// export default FetchData;

//useContext:-
//useContext shares data globally between components without passing props manually:

// const UserContext = createContext();

// function UserProfile(){
//   const user = useContext(UserContext);
//   return <h2>Welcome, {user.name}!</h2>
// }

// function App(){
//   return (
//     <UserContext.Provider value= {{name:"Vijay"}}>
//       <UserProfile />
//     </UserContext.Provider>
//   );
// }
// export default App;

//useRef:- Accessing the dom and storing values:
// useRef stores a mutable value accross renders without causing re-renders;
// import { useRef } from "react";

// function InputFocus() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }
// export default InputFocus;

//useReducer:- is useful for managing complex state logic

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };
// function Counter() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   return (
//     <div>
//       <h2>Count: {state.count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//     </div>
//   );
// }
// export default Counter;
    
                 
//USE MEMO: OPTIMIZE PERFORMANCE:
// useMemo memoizes calculations to prevent unnecessary recomputation..
// function ExpensiveCalculation ({num}){
//   const calculate = (n) => {
//     console.log("Calculating...");
//     return n*2;
//   };
//   const memoizedValue = useMemo (() => calculate(num), [num]);

//   return <h2>Result: {memoizedValue}</h2>;
// }

// export default function App(){
//   const [num, setNum] = useState(5);
//   return <ExpensiveCalculation num={num} />;
// }

//useCallback:
// useCallback memoizes function to avoid unnecessary re-renders in cnild components:

// function Button({handleClick}){
//   return <button onClick={handleClick}>Click Me</button>;
// }

// function App(){
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount((c) => c + 1);
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button handleClick={increment}>Increment</button>
//     </div>
//   );
// }
// export default App;

//Custom Hooks- Reusable logic
// create custom hooks to encapsulate logic and reuse it

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return width;
// }
// // export default useWindowWidth;

// function Component() {
//   const width = useWindowWidth();         
//   return <h2>Window Width: {width}px</h2>;
// }

// export default Component;

//FORMS:
//controlled input:

// function ControlledForm (){
//   const [name, setName] = useState("");

//   const handleChange = (e) => setName(e.target.value);
//   const handleSubmit = (e) => {
//     e.preventDefault ();
//     alert(`Name: ${name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type='text' value={name} onChange={handleChange} />
//       </label>
//       <button type='submit'>Submit</button>
//     </form>
//   );
// }
// export default ControlledForm;

//Uncontrolled Components: (Uses useRef)
// function UncontrolledForm(){
//   const nameRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault ();
//     alert(`Name: ${nameRef.current.value}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" ref={nameRef} />
//       </label>
//       <button type='submit'>Submit</button>
//     </form>
//   );
// }
// export default UncontrolledForm;

//REACT COUNTER:(USING STEP INCREMENT)
// function StepCounter (){
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <input
//       type='number'
//       value={step}
//       onChange={(e) => setStep(Number(e.target.value))}
//       />
//       <button onClick={() => setCount (count + step)}>Increment</button>
//       <button onClick={() => setCount (count - step)}>Decrement</button>
//       <button onClick={() => setCount (0)}>Reset</button>
//     </div>
//   );
// }
// export default StepCounter;

//REFS:
//useRef:- useRef are used to access and interact with DOM elements or persist values acress renders without causing re-renders;
// function InputFocus(){
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type='text' placeholder='Type here...' />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }
// export  default InputFocus;

//Storing values without Re-rendering:

// function RenderCounter() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current += 1;
//   });

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <p>Component re-rendered: {renderCount.current} times</p>
//     </div>
//   );
// }
// export default RenderCounter;

//Using useRef to store Previous State:
// function PreviousCount() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(null);

//   useEffect(() => {
//     prevCountRef.current = count; // Store previous count
//   }, [count]);

//   return (
//     <div>
//       <h2>Current: {count}</h2>
//       <h3>Previous: {prevCountRef.current}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//     </div>
//   );
// }
// export default PreviousCount;

//CONTEXT API:
//the context API is used to share state and data across components without props
//drilling. it helps manage global state efficiently..

//Avoid props drilling:- passing props through multiple components

//Theme Context:
// const ThemeContext = createContext();

// export function ThemeProvider({children}){
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
// export default ThemeContext;

//FRAGMENTS :
// Fragment allow you to group multiple elements without adding an extra DOM node

// const items = ["Apple", "Banana", "Orange"];

// function ListExample() {
//   return (
//     <>
//       {items.map((item, index) => (
//         <React.Fragment key={index}>
//           <li>{item}</li>
//         </React.Fragment>
//       ))}
//     </>
//   );
// }

//Error Boundries:
// class ErrorBoundary extends Component{
//   constructor (props){
//     super(props);
//     this.state = {hasError: false};
//   }
//   static getDerivedStatementFromError(error){
//     return {hasError: true};
//   }

//   componentDidCatch(error, info){
//     console.error("Error caught by error boundary:", error, info);
//   }
//   render(){
//     if (this.state.hasError){
//       return <h2>Something went wrong!</h2>
//     }
//     return this.props.childrens;
//   }

// }
// export default ErrorBoundary;

//PERFORMANCE OPTIMIZATION:
//Optimizing performance in react application is crucial for faster rendering , better user experience and reduced resource usage
// const ChildComponent = React.memo(({count}) => {
//   console.log("ChildComponent rendered!");
//   return <h2>Count: {count}</h2>;
// });

// export default ChildComponent;

//Using useCallback() for memoizing functions:

// function ParentComponent(){
//   const [count, setCount] = useState(0);
//   const increment = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//   }, []);

//   return (
//     <div>
//       <ChildComponent count={count}/>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }
// export default ParentComponent;

//Using useMemo() for expensive calculations:
// useMemo() caches the result of an expensive function and recalculates it only when dependencies change:

// function ExpensiveComponent() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState("");

//   const expensiveCalculation = useMemo(() => {
//     console.log("Expensive calculation running...");
//     return count * 100;
//   }, [count]);

//   return (
//     <div>
//       <h2>Expensive Result: {expensiveCalculation}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <input value={input} onChange={e => setInput(e.target.value)} />
//     </div>
//   );
// }

// export default ExpensiveComponent;

//Lazy loading components with React.lazy()
// const HeavyComponent = lazy(() => import("./HeavyComponent"))

// function App(){
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <HeavyComponent />
//     </Suspense>
//   );
// }
// export default App;

//HIGHER ORDER COMPONENT:
// A higher-order componenet is a function that takes a component as input values and return
//an enhanced version of that component

// const withExtraInfo = (WrappedComponent) => {
//   return (props) => (
//     <div style={{border: "2px solid blue", padding: "10px"}}>
//       <WrappedComponent {...props} />
//       <p>Extra info: this is added by hoc!</p>

//     </div>
//   );
// };
// const SimpleComponent = ({name}) => <h2>Hello, {name}!</h2>;

// const EnhancedComponent = withExtraInfo(SimpleComponent);

// function App(){
//   return <EnhancedComponent name="John" />;
// }
// export default App;

//REAL-WORLD USE CASES OF HOC:
//A HOC can check user authentication before rendering a component:

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const isAuthenticated = true;

//     if (!isAuthenticated){
//       return <h2>Access Denied. Please Log in</h2>
//     }

//     return <WrappedComponent {...props} />
//   };
// };

// const Dashboard = () => <h2>Welcome to your dashboard</h2>

// const ProtectedDashboard = withAuth(Dashboard);

// function App(){
//   return <ProtectedDashboard />
// }

// export default App;

//RENDOR PROPS:
// A Render props is a pattern in react where a component receives a function as a prop, and this function return jsx to determine
// what should be rendered

// const MouseTracker = ({ render }) => {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   return (
//     <div
//       style={{ height: "200px", border: "2px solid black" }}
//       onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
//     >
//       {render(mouse)}
//     </div>
//   );
// };

// // Usage of render props
// function App() {
//   return (
//     <MouseTracker
//       render={(mouse) => <h3>Mouse Position: {mouse.x}, {mouse.y}</h3>}
//     />
//   );
// }

// export default App;

// Real world use cases of render props:
// const HoverComponent = ({render}) => {
//   const [hovered, setHovered] = useState (false);
//   return (
//      <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{padding: "20px", border: "2px solid gray"}}
//      >
//       {render(hovered)}
//      </div>
//   );
// };
// function App(){
//   return (
//     <HoverComponent
//     render={(hovered) => (
//       <h3> {hovered ? "Hovered! ": "Hover on me!"}</h3>
//     )}
//     />
//   );
// }
// export default App;

//PORTALS IN REACT:
// A react portal allows rendering a child component outside the parent DOM hierarchy
// while keeping it logically part of the react tree

// import React from "react";
// import ReactDOM from "react-dom";

// // Modal Component
// const Modal = ({ children, onClose }) => {
//   return ReactDOM.createPortal(
//     <div style={modalStyles}>
//       <div style={modalContentStyles}>
//         <button onClick={onClose} style={closeButtonStyles}>❌</button>
//         {children}
//       </div>
//     </div>,
//     document.getElementById("portal-root") // Mounting outside root
//   );
// };

// // Styles
// const modalStyles = {
//   position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
//   backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
// };
// const modalContentStyles = { backgroundColor: "white", padding: "20px", borderRadius: "8px" };
// const closeButtonStyles = { position: "absolute", right: "10px", top: "10px", cursor: "pointer" };

// // App Component
// const App = () => {
//   const [showModal, setShowModal] = React.useState(false);

//   return (
//     <div>
//       <h2>Portals Example</h2>
//       <button onClick={() => setShowModal(true)}>Open Modal</button>

//       {showModal && <Modal onClose={() => setShowModal(false)}>Hello from Portal! 🚀</Modal>}
//     </div>
//   );
// };

// export default App;

//STATE MANAGMENT LIBRARIES:
//Redux :- centralized state using a single store with actions & reducers

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {count:0},
//   reducers: {
//     increment: (state) => {state.count +=1},
//     decrement: (state) => {state.count -=1},
//   },
// });

// export default function App(){
//   const count = useSelector ((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <Provider store={store}>
//   <button onClick={()=> dispatch(counterSlice.actions.increment())}>+</button>
//   <h3>{count}</h3>
//   <button onClick={()=> dispatch(counterSlice.actions.decrement())}>-</button>
//     </Provider>
//   )
// }

//MobX(reactive state managment):-
//uses observables to track state changes automatically:

// class Counter{
//   count = 0;
//   constructor() {makeAutoObservable(this);}
//   increment() {this.count++;}
//   decrement () {this.count--;}

// }
// const counter = new Counter();

// const CounterComponent = observer(() => (
//   <div>
//     <button onClick={() => counter.increment()}>+</button>
//     <h3>{Counter.count}</h3>
//     <button onClick={()=> counter.decrement()}></button>
//   </div>
// ));
// export default CounterComponent;

//Recoil:- Uses atoms (state units) & selectors
// import { atom, selector, useRecoilState } from "recoil";

// const countState = atom({ key: "count", default: 0 });

// export default function Counter() {
//   const [count, setCount] = useRecoilState(countState);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <h3>{count}</h3>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }
