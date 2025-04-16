import './App.css';
import Hello from './components/hello';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/header.jsx';
import CoreConcept from './components/props.jsx';
import TabButtons from './components/tabButton.jsx';
import { useState } from 'react';
import { buttonData } from './data.js';

function App() {
  const [selectedTopc, setSelectedTopic] = useState()

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopc);
  }

  //by variable methdod
  let tabContent=<p>selest a topic.</p>;
  if(selectedTopc){
   tabContent=(
    <div className="tab-content">
    <h3>{buttonData[selectedTopc].title}</h3>
    <p>{buttonData[selectedTopc].description}</p>
    <pre>
      <code>
      {buttonData[selectedTopc].code}
      </code>
    </pre>
  </div>)
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
        {/* <TabButtons lable='componenys'/> */}
        <TabButtons onSelect={()=>handleSelect('component')}>components</TabButtons>
        <TabButtons onSelect={()=>handleSelect('jsx')}>JSX</TabButtons>
        <TabButtons onSelect={()=>handleSelect('props')}>props</TabButtons>
        <TabButtons onSelect={()=>handleSelect('state')}>state</TabButtons>
      </menu>
        {/* {!selectedTopc ? <p>selest a topic.</p> : (
          <div className="tab-content">
        <h3>{buttonData[selectedTopc].title}</h3>
        <p>{buttonData[selectedTopc].description}</p>
        <pre>
          <code>
          {buttonData[selectedTopc].code}
          </code>
        </pre>
      </div> )} */}
        {tabContent}
    

     </section>

     </div>
    </div>
  );
}

export default App;
