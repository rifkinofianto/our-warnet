import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/login';
import Dashboard from './page/Dashboard';
import Product from './page/Product';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard page = "dashboard"/>} />
        <Route path='/product' element={<Product page = "product"/>} />
      </Routes>
    </Router>
  );
}

export default App;
