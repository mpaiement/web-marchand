import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArticlesIndex from './screens/articles/index';
import Inbox from './screens/typeAuth/index';
import { AuthProvider } from './screens/AuthContext';
import ProtectedRoute from './screens/ProtectedRoute';
import AboutUss from './screens/AboutUss';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route
              path="/articles"
              element={
                <ProtectedRoute>
                  <ArticlesIndex />
                </ProtectedRoute>
              }
            />
             <Route path="/aboutus" element={<AboutUss />} />
            
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
   

    </div>
  );
}

export default App;
