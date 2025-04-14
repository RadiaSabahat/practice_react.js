import './App.css';
import Hello from './components/hello';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/header.jsx';
import CoreConcept from './components/props.jsx';
import TabButtons from './components/tabButton.jsx';

 

function App() {
  function handleSelect(){
    console.log('hello raeact app ___ button sekected');
  }
  return (
    <div className="App">
      
<Header/> 
{/* <Hello/> */}
      <div>
     <main>
      <section id='core-concept' >
        <h3>Core concepts</h3>

        <div className="coreconcept-container">
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
        </div>

      </section>
      </main>
     
     <section id='buttons'>
      <h2>switch tabs</h2>
      <menu>
        <TabButtons onSelect={handleSelect}>components</TabButtons>
        <TabButtons>JSX</TabButtons>
        <TabButtons>props</TabButtons>
        <TabButtons>state</TabButtons>
        {/* <TabButtons lable='componenys'/> */}
      </menu>
     </section>

     </div>
    </div>
  );
}

export default App;
