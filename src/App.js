
import './App.css';
import Linklist from './components/Linklist';
import LinkContextProvider from './contexts/LinkContext';


function App() {
  return (
    <div classNameName="hepsiburada-app">
    <div className="container-xl">
	  <div className="table-responsive">
		<div className="table-wrapper">
		
      
      <LinkContextProvider>
        <Linklist />
     </LinkContextProvider> 
    
    </div>
    </div>
				</div>
			</div>
  );
}

export default App;
