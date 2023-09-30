import Table from './components/MortgageTable';

export default function MortgageIndexPage() {
  return (
    <div>
      <h1 className='flex justify-center'>All Mortgage Transactions</h1>
      <p>Table should be filtered by user and LRU.</p>
      <p>breadcrumb goes in the top right</p>
      <div className='mt-8'>
        <Table />
      </div>
    </div>
  );
}
