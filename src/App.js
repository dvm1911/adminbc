import AdminPage from './component/adminpage'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EditCoinInfo from './component/editCoin';

function App() {
 

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<AdminPage />}>
      </Route>
     <Route path="/updateCoin/:id" element={<EditCoinInfo />}>
     </Route>
     </Routes>
     
    </div>
  );
}

export default App;
