import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../../constants';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const BookCovers = () => {

    // this is to make sure 4 books are displayed on the discover page
    const [book, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await axios.get(`${BASE_URL}/books`);
        setBooks(response.data.slice(0, 4));
    };


    useEffect(() => {
        getBooks();
    }, []);

    // this is to make sure tapping on a book leads you to book details
    const { id } = useParams();

    const fetchBook = async () => {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        setBooks(response.data)
    }


    useEffect(() => {
        fetchBook()
    }, [])




    return (
        <>
            <div className='book-cover-main flex justify-center items-center col-[20px] flex-row'>

                <div className="image-container flex w-1/2">


                    {book.map((book) => (
                        <Link key={book._id} to={`/books/${book._id}`}>
                            <img

                                src={book.cover}
                                alt={book.title}
                                className=" max-w-full max-h-full shadow-2xl rounded-[7px] hover:scale-110 transition-transform duration-300" />
                        </Link>
                    ))}

                </div>

            </div>





        </>

    );
};

export default BookCovers;