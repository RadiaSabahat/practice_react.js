import CoreConcept from './coreconcept.jsx';
import { CORE_CONCEPTS } from '../data.js';



export default function coreconcepts(){
    return(
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
    );
}