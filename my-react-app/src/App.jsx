import './App.css'

function App() {
  return (
    <h1>Holaa React</h1>
    
  );
};

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default App;