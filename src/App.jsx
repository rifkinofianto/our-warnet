import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Product from './page/Product';
import Login from './page/LoginPage';
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
