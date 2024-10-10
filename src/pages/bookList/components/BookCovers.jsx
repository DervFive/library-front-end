import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../../constants';

const BookCovers = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetching data from the API
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${BASE_URL}/library`); // Replace with your API endpoint
                const data = await response.json();
                // Limiting to 4 items
                const limitedBooks = data.slice(0, 4);
                setBooks(limitedBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="flex space-x-4">
            {books.map((book) => (
                <img
                    key={book.id} // Assuming each book has a unique id
                    src={book.cover} // Replace with the correct field from the API
                    alt={book.title}
                    className="w-32 h-48 object-cover"
                />
            ))}
        </div>
    );
};

export default BookCovers;