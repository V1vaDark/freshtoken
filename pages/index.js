import { useState, useMemo, useEffect } from 'react';
import Table from '../components/table/table';
import Coins from '../components/UI/coins';
import { fetchSortedCoins } from '@/lib/helper-functions/fetched-coin';

const CoinsPerPage = 18;

function Pagination({ currentPage, totalPages, onNextPage, onPrevPage, onFirstPage, onLastPage }) {
  const nextPageNumber = currentPage + 1;
  const previousPageNumber = currentPage - 1;

  return (
    <div className="pagination-buttons normaltextlfg" style={{ position: 'relative', textAlign: 'center', padding: '10px' }}>
      {currentPage > 1 && (
        <>
          <button onClick={onFirstPage} style={{ position: 'absolute', left: '10%' }}>{`First Page`}</button>
          <button onClick={onPrevPage}>{`← Previous (${previousPageNumber})`}</button>
        </>
      )}
  
      <span style={{ margin: '0 10px', display: 'inline-block' }}>{`Page (${currentPage})`}</span>
  
      {currentPage < totalPages && (
        <>
          <button onClick={onNextPage}>{`Next (${nextPageNumber}) →`}</button>
          <button onClick={onLastPage} style={{ position: 'absolute', right: '10%' }}>{`Last Page`}</button>
        </>
      )}
    </div>
  );
}

export default function HomePage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(props.coins.length / CoinsPerPage);
  const [shuffledCoins, setShuffledCoins] = useState([]);

  useEffect(() => {
    const shuffled = [...props.coins];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledCoins(shuffled);
  }, [props.coins]);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
  <div className="pt-5 px-2">
      <div className="pt-5 px-2">
        <Coins coins={shuffledCoins} />
      </div>

      <div className="middle">
        <Table coins={props.coins.slice((currentPage - 1) * CoinsPerPage, currentPage * CoinsPerPage)} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPrevPage={prevPage}
        onFirstPage={firstPage}
        onLastPage={lastPage}
        style={{ position: 'relative' }}
      />

    </div>
  );
}

export async function getStaticProps() {
  const sortedCoins = await fetchSortedCoins();

  return { props: { coins: sortedCoins } };
}
