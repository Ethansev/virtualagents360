'use client';
import { transactionsServices } from '@/app/api/transactions/transactions-services';
import { RealEstateTransactionSchema } from '@/sanity/schemas/real-estate-transactions';
import { useEffect, useState } from 'react';

export default function RealEstateIndexPage() {
  const [transactions, setTransactions] = useState([] as RealEstateTransactionSchema[]);
  useEffect(() => {
    getRealEstateTransactions();
  }, []);

  async function getRealEstateTransactions() {
    const res = await transactionsServices.getAllRealEstateTransactions();
    console.log(res);
    setTransactions(res);
  }
  return (
    <div>
      {transactions.map((transaction) => (
        <div className='mt-8' key={transaction._id}>
          {transaction.title}
          {transaction.status === 'pending' && <div>Pending</div>}
          {/* <div>{JSON.stringify(transaction.transactionStage.addPropertyInformation)}</div> */}
        </div>
      ))}
    </div>
  );
}
