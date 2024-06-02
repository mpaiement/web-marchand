import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Utilisation de auth provenant du fichier d'initialisation Firebase
      // Signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      navigate('/articles'); // Redirect to the articles page
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return (
    <div className="bg-white ml-20 rounded-lg shadow-lg p-6 w-80 ">
      <h2 className="text-xl font-bold mb-4 text-black">Signup</h2>
      <form className="space-y-4" onSubmit={handleSignup}>
        <div>
          <label className="block mb-1 text-black">Email address</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1 text-black">Password</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-black border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <Button type="submit" variant="outline" className="px-4 py-4 w-32 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
