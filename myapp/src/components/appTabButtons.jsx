import { useState } from 'react';
import { buttonData } from '../data.js';
import TabButtons from './tabButton.jsx';
import Section from "./Section.jsx"
import Tabs from './resuseableTabs.jsx';

export default function Examples(){
const [selectedTopc, setSelectedTopic] = useState()

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    // console.log(selectedTopc);
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
    return(
        <Section title= "switch tabs" id='buttons'>
          <Tabs 
          buttonContainer= "menue"

          buttons={<>
            {/* <TabButtons lable='componenys'/> */}
          <TabButtons onSelect={()=>handleSelect('component')}>components</TabButtons>
          <TabButtons onSelect={()=>handleSelect('jsx')}>JSX</TabButtons>
          <TabButtons onSelect={()=>handleSelect('props')}>props</TabButtons>
          <TabButtons onSelect={()=>handleSelect('state')}>state</TabButtons>
           </>}>

           {tabContent}</Tabs>

    
          
      
        {/* kind of condition state ment */}
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
         
      
  
       </Section>
    );
}