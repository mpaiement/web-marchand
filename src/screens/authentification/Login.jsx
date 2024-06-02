import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      // Authentifier l'utilisateur avec l'e-mail et le mot de passe
      await signInWithEmailAndPassword(auth, email, password);
     
      console.log("🚀 ~ handleLogin ~ email:", email)
      navigate('/articles'); 
    } catch (error) {
      // Gérer les erreurs d'authentification
      setError(error.message);
    }
     
  };

  return (
    <div className="bg-white ml-20 rounded-lg shadow-lg p-6 w-80">
      <h2 className="text-xl font-bold mb-4 text-black">Login</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block mb-1 text-black">Email</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1 text-black text-black">Password</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-black border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button type="submit" variant="outline" className="px-4 py-2 w-32 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
