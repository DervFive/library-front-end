import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookCovers from './components/BookCovers';




const BookList = () => {
  return (

    <>
      {/* <Link to={"/add-new"}>Add Book</Link> */}
      <Navbar />

      <section className='flex justify-center items-start h-screen bg-[#f1eee9]' >

        <div className='book-lists w-[70%] mx-auto my-auto h-[600px]  rounded-[10px] overflow-hidden bg-white shadow-xl'>


          <div className='content flex justify-center items-start flex-col gap-[30px] h-[full]'>



            <div className='book-lists flex justify-center items-start flex-col gap-[30px] w-full mx-auto my-auto h-[600px] px-[70px] rounded-[10px] overflow-hidden bg-transparent]'>

              <h3 className='text-start text-[25px] font-bold'>Discover</h3>

              <div className='input-main-container flex justify-start items-start flex-row bg-white rounded-[5px] '>

                <div className='sub-container flex flex-row gap-[10px] p-[5px] '>

                  <select name="" id="" className='bg-transparent text-[12px] pr-[10px]'>
                    <option value="">All Categories</option>
                    <option value="">Category</option>
                  </select>

                  <input type="text" placeholder='find the book you like' className='bg-transparent text-[13px] border-l-black border-l-[2px] text-center' />
                  <button className='px-[20px] py-[5px] bg-[#1c3f3a] rounded-[5px] text-white text-[12px] '>search</button>

                </div>

              </div>

              <div className='recommendation flex justify-between items-center w-[100%] ' >
                <h5 className='text-[14px]'>Book Recommendation</h5>
                <button className='px-[10px] py-[5px] rounded-[5px] text-[12px] bg-white'>View all <span><i class="fa-solid fa-angle-right"></i></span></button>
              </div>

              {/* <div className='displayed-books'>
<div className='cover-img-container'>
<img src="" alt="cover page" />
</div>
</div> */}

              {/* cover img goes here */}
              <BookCovers />

              <div className='category flex justify-start items-center flex-col w-full'>

                <div className='flex justify-between items-center w-[100%]'>
                  <h1 className='text-[13px]'>Book Category</h1>
                  <span className='px-[8px] py-[2px] rounded-[5px]'><i class="fa-solid fa-list"></i></span>
                </div>



                <div className='cat-covers'>

                  <div className='main-cover-container'>

                    <div className='cover-main'>

                      <div className='cat-cover'>
                        <img src="" alt="cover page" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className='overlay bg-[#eae6d7] w-full h-full mt-[-900px] rounded-l-[70px] '>

          </div>





        </div>


      </section>

    </>
  )
};

export default BookList;


