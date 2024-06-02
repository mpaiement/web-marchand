import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { auth } from './firebase';
// import { onAuthStateChanged } from 'firebase/auth';
import ArticlesIndex from './screens/articles/index'; 
import Inbox from './screens/typeAuth/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/articles" element={<ArticlesIndex />} /> 
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
