import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [merchantName, setMerchantName] = useState('PureWood'); // Remplacez par le nom réel du marchand
  const [amount, setAmount] = useState(null); // État pour stocker le montant récupéré de l'API

  useEffect(() => {
    // Appeler votre API pour récupérer le montant du compte du marchand
    fetch('http://localhost:3000/account/admin/Jwz6jEbVEbOO6IT2YzXyuLk5iqP2')
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setAmount(data[0].amounttran); // Définir le montant récupéré dans l'état
        }
      })
      .catch(error => {
        console.error('Failed to fetch account amount:', error);
      });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-800">
            Welcome, {merchantName}!
          </p>
          {amount !== null && (
            <p className="mt-2">
              the Amount of your account:{amount} DA
            </p>
          )}
        </div>
        <div className="mt-4">
          <Outlet /> {/* Affichage du contenu spécifique au dashboard */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
