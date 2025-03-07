import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import Layout from './pages/Layout';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="mt-3">
        <h1 className="text-center">Barra de Navegación</h1>
        <Layout />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}



export default App
