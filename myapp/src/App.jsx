import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import { CORE_CONCEPTS } from './data.js';

//props
// function CoreConcept(props){
//   return(
//      <li>
//   <img src={props.img} alt={props.title} />
//   <h3>{props.Title}</h3>
//   <p>{props.description}</p>
//   </li>);
// };

// function CoreConcept(props){
//   return(
//      <li>
//   <img src={props.img} alt={props.title} />
//   <h3>{props.Title}</h3>
//   <p>{props.description}</p>
//   </li>);
// };

//object destructuring method 
function CoreConcept({image, title, description}){
  return(
     <li>
  <img src={image} alt={title} />
  <h3>{title}</h3>
  <p>{description}</p>
  </li>);
};

function Header(){
  return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and 
        </p>   
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
<Hello/>
       
      </header>
  )
}
function App() {
  return (
    <div className="App">
      
<Header/>
      <div>
     <main>
      <section id='core-concept' >
        <h3>Core concepts</h3>
        <ul>
          <CoreConcept 
          {...CORE_CONCEPTS[0]}
          />
          <CoreConcept
          {...CORE_CONCEPTS[1]}
          />
          <CoreConcept
            {...CORE_CONCEPTS[2]}
          />
          <CoreConcept
           {...CORE_CONCEPTS[3]}
          
          />
        </ul>

      </section>
      </main>
     
     </div>
    </div>
  );
}

export default App;
