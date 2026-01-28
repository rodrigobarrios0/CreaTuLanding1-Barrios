import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos a nuestra tienda" />
    </>
  );
};


export{App};