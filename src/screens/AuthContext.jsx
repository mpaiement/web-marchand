import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });

        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Erreur lors de la configuration de la persistance :", error);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleLogout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
