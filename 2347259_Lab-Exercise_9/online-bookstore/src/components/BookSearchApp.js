import React, { useEffect, useState } from 'react';
import BookSearch from './BookSearch';
import BookDisplay from './BookDisplay';

function BookSearchApp() {
  const [searchCriteria, setSearchCriteria] = useState({ term: '', type: 'bookName' });
  const [selectedBookIds, setSelectedBookIds] = useState({});
  const [openReviews, setOpenReviews] = useState({});
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooksData = async () => {
    try {
      const response = await fetch('https://www.anapioficeandfire.com/api/books');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  useEffect(() => {
    fetchBooksData(); 
  }, []);

  const handleSearch = (term, type) => {
    setSearchCriteria({ term, type });
  };

  const handleWriteReview = (bookId) => {
    setSelectedBookIds((prevSelectedBookIds) => ({
      ...prevSelectedBookIds,
      [bookId]: true,
    }));

    setOpenReviews((prevOpenReviews) => ({
      ...prevOpenReviews,
      [bookId]: !prevOpenReviews[bookId],
    }));
  };

  return (
    <div>
      <BookSearch onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <BookDisplay
          books={books}
          selectedBookIds={selectedBookIds}
          onWriteReview={handleWriteReview}
          openReviews={openReviews}
          searchCriteria={searchCriteria}
        />
      )}
    </div>
  );
}

export default BookSearchApp;
