import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArticlesIndex from './screens/articles/index';
import Inbox from './screens/typeAuth/index';
import { AuthProvider } from './screens/AuthContext';
import ProtectedRoute from './screens/ProtectedRoute';
import AboutUss from './screens/AboutUss';
import Login from './screens/authentification/Login';
import Layout from './screens/dashboard/pages/layout';
import Transactions from './screens/dashboard/pages/transactions';
import Dashboard from './screens/dashboard/pages/dashboard';
import LoginAdmin from './screens/dashboard/pages/loginAdmin';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/admin-login" element={<LoginAdmin />} />
            <Route path='/dashboard/' element={<Layout />}>
              <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path='/dashboard/Transactions' element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
            </Route>

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
