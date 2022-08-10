import './App.css';
import styles from  "./App.module.css";
//import {User} from "./Users"
// import {Planets} from "./Planet"

function App() {

  // return (
  //   <div className="App">
  //    <User name="Martin" age={30} email= "martin@code.ke"/>  
  //    <User name="Tracy" age={20} email= "tracy@code.ke"/> 
  //    <User name="Emmanuel" age={10} email= "emmanuel@code.ke"/>               
  //   </div>
  // );

  // return(
  //   <div className='App'>
  //   <Job salary={9000} position="Senior SDE" company ="Amazon"/>
  //   <Job salary={12000} position="Junior SDE" company ="Google"/>
  //   <Job salary={10000} position="Project Manager" company ="Netflix"/>

  //   </div>
  // );

  // return(   // Using module .css
  //   <div className={styles.App}>
  //   <Job salary={9000} position="Senior SDE" company ="Amazon"/>
  //   <Job salary={12000} position="Junior SDE" company ="Google"/>
  //   <Job salary={10000} position="Project Manager" company ="Netflix"/>

  //   </div>
  // );
  // }

// const User = (prop) => {
//   return(
//     <div>    
//     <h1> {prop.name} </h1>
//     <h2> {prop.age} </h2>
//     <h3>{prop.email}</h3>
//     </div>
//   )
// }

// const Job = (seat) => {
//   return (
//     <div>
//     <h1>{seat.salary}</h1>
//     <h1>{seat.position}</h1>
//     <h1>{seat.company}</h1>
//     </div>
//   )
// }


// const age=19;
// const isGreen= true; 

  //return(   // Using conditional rendering without using if , else
  // <div className={styles.App}>
  // {age >= 18 ? <h1> Over Age </h1> : <h1> Under Age </h1>}
  // <h1 style={{ color : isGreen ? "green" : "red"}}> Burahia maisha pwana</h1>
  
  // {isGreen && <button> click here </button>}
  // </div>

//   const names= ["Martin", "Emmanuel", "Tracy", "John Komu"];
// return(
//   <div className={styles.App}>
  

//   {names.map((name, key) => { //value=names.map((value, key) or any name you use e.g name, age, --= Martin , Emmanuel --- and Key= indexes which starts with 0
//   return <h1 key={key}>{name}</h1> // key={key} == This one is not a must but is used to prevent errors that comes up when you don't use it
   
//   })}
  
// </div>
// );

// const users= [
//   {name: "Martin", age: 26},
//   {name: "Emmanuel", age: 19},
//   {name: "Tracy", age: 21},
//   {name: "John", age: 36},
  
// ]

// return(
//   <div className={styles.App}>
//   {users.map((user, key) => {
//     // return (
//     //   <div>
//     //   {user.name} {user.age}
//     //   </div>
//     // );
//     return <User name={user.name} age={user.age}/>;
//   })}  
//   </div>
// );


  // using component instead

  // const User = (props) => {
  //   return (
  //   <div>
  //   {props.name} {props.age}
  //   </div>
  //   );
  // };

 const planets=[
  {name:"Mars", isGasPlanet: false},
  {name:"Earth", isGasPlanet: false},
  {name:"Jupiter", isGasPlanet: true},
  {name:"Venus", isGasPlanet: false},
  {name:"Neptune", isGasPlanet: true},
  {name:"Uranus", isGasPlanet: true},

 ];

return (
<div className={styles.App}>

// {planets.map((value, key) => 

value.isGasPlanet &&  <h1>{value.name}</h1>
)}
</div>

//   {planets.map((value, key) => {
//     if (value.isGasPlanet) return <h1> {value.name}</h1>;
//   })}
// </div>


);


}


export default App;
