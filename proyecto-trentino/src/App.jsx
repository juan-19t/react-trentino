import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Esta es la caja contenedora'/>
    </div>
  );
}

export default App;
