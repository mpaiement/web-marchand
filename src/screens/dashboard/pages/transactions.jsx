import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/transaction/historique/marchand/TIijZuSg2YfXvx2pwuLTWA1kjeQ2`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">Transaction History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-600 uppercase tracking-wider">Merchant</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-600 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-600 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-center">{transaction.marchandname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{transaction.username}</td>
                <td className="px-6 py-4 whitespace-nowrap text-semibold text-[#0D775E] font-bold text-center">{transaction.amount1} DA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
