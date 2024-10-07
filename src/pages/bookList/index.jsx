import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



const BookList = () => {
  return (

    <>
      <Link to={"/add-new"}>Add Book</Link>
      <Navbar />
      BookList
      <Footer />
    </>
  );
};

export default BookList;