import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ViewProducts from './components/ViewProducts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="add" element={<AddProduct />} />
        <Route path="view" element={<ViewProducts />} />
        </Route>
        
      </Routes>
    </Router>
  );
}
export default App;
