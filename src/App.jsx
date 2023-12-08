
import {Routs , Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  
  return (
    <>
      <Routes>
        <Routes path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
