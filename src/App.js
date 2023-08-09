import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
