import './App.css';
import Header from './components/header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/appTabButtons.jsx';


function App() {
  
  return (
    <div className="App">
      <>
<Header/> 
      
     <main>
      <CoreConcepts/>
      <Examples/>
      </main>
     
    

     </>
    </div>
  );
}

export default App;
