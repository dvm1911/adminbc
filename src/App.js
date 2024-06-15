import AdminPage from './component/admin page/adminpage'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EditCoinInfo from './component/editPAge/editcoinInfo';

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
