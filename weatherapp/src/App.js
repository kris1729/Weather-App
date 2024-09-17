import SearchBar from './Component/SearchBar';
import Buttons from './Component/Buttons';
import Card from './Component/Card';
import './App.css';

function App() {
  return (
    <div className='app'>
    <h1 className="App">
       Weather-App  </h1>

  <SearchBar/>
  <Buttons value = "Search" placeholder="Enter city Name"/>
  <Card/>
  <Buttons value="Refresh"/>
  </div>
  );
}

export default App;
