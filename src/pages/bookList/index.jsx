import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



const BookList = () => {
  return (

    <>
      {/* <Link to={"/add-new"}>Add Book</Link> */}
      <Navbar />
      <div>

        <h3>Discover</h3>

        <div className='input-main-container'>

          <div className='sub-container'>

            <select name="" id="">
              <option value="">All Categories</option>
            </select>

            <input type="text" placeholder='find the book you like' />
            <button>search</button>

          </div>

        </div>

        <div className='recommendation'>
          <h5>Book Recommendation</h5>
          <button>View all </button>
        </div>

        <div className='displayed-books'>
          <div className='cover-img-container'>
            <img src="" alt="cover page" />
          </div>
        </div>

        <div className='category'>

          <div className='cat-text'>
            <h1>Book Category</h1>
          </div>



          <div className='cat-covers'>

            <div className='main-cover-container'>

              <div className='cover-main'>
                <div className='cat-cover'>
                  <img src="" alt="cover page" />
                </div>
                <h5>Category</h5>
              </div>

            </div>

          </div>



        </div>

      </div>
      <Footer />
    </>
  )
};

export default BookList;