import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import MigrateButton from './components/importButton';


function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-200">
      <NavBar />

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;