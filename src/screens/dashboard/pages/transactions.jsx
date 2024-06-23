import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/transaction/historique/marchand/Jwz6jEbVEbOO6IT2YzXyuLk5iqP2`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, );

  return (
    <div>
      <h1>Transactions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Merchant</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">User</th>
             
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-100">
                 <td className="px-6 py-4 whitespace-nowrap">{transaction.marchandname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.amount1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
