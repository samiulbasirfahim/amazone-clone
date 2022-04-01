import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Routes>
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/home' element={<Shop></Shop>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/review' element={<Shop/>}></Route>
      <Route path='/manage' element={<Shop/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
