import React from "react";
import Navbar from "../../components/Navbar";

const BookDetails = () => {
  const handleStartReading = () => {
    alert("Starting the book!");
  };
  const handleDeleteBook = () => {
    alert("Delete the book!");
  }

  return (
    <>
      <Navbar />
      <div className=" flex justify-center flex-col bg-gray-100  p-10 W-[100%] mx-auto">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 flex space-x-6">
          {/* navbar goes here to the side */}

          {/* book details main Content */}
          <div className="w-5/6 flex">
            <div className="w-1/3">
              <img
                src="https://via.placeholder.com/200x300"
                alt="Book Cover"
                className="shadow-md rounded-lg" />
            </div>
            <div className="w-2/3 pl-6">
              <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Harry Potter: Half Blood Prince</h1>
                {/*<div className="flex items-center space-x-3">
                <span className="text-gray-600">Alexander Mark</span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>*/}
              </header>

              <h2 className="text-xl font-semibold">J.K. Rowling</h2>
              <p className="text-gray-700 mt-2">
                BIO
              </p>
              <div className="flex flex-cols-5 gap-x-4">
                <button className="mt-32 px-4 py-2 bg-black text-white rounded-full hover:bg-[#f57a49] text-xs w-52"
                  onClick={handleStartReading}>
                  Start Reading
                </button>

                <button className="mt-32 h-[6vh] px-4 py-2 bg-black text-white rounded-full hover:bg-[#f57a49] w-52 text-xs"
                  onClick={handleDeleteBook} >
                  Delete Book
                </button>
                {/* add icons for download,share,bookmark*/}
                <div className="bg-slate-300 px-[6px] items-center py-[2px]  w-8 h-8 flex mt-32 justify-center rounded-full"><i class="fa-regular fa-bookmark"></i> </div>
                <div className="bg-slate-300 px-[6px] py-[2px] items-center h-8 mt-32 rounded-full w-8 flex justify-center"> <i class="fa-solid fa-share-nodes"></i></div>
                <div className="bg-slate-300 px-[6px] py-[2px] items-center h-8 mt-32 rounded-full flex justify-center w-8"><i class="fa-solid fa-download"></i></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[60%] mx-auto rounded-lg p-8 mt-6">
          <div className="flex justify-between">
          <div className="w-[50%]">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-gray-700 mt-2">
            The story takes place during Harry's sixth year at Hogwarts School of
            Witchcraft and Wizardry, where he discovers more about Lord Voldemort's
            past and the prophecy that foretells his defeat. With action-packed
            sequences, shocking twists, and moments of heart-wrenching tragedy,
            "Half-Blood Prince" is a must-read for any fan of the Harry Potter
            series.
          </p>
          </div>
          <div className="flex flex-col">
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Language</h3>
            <p className="text-gray-600">Standard English (USA & UK)</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Date Published</h3>
            <p className="text-gray-600">
              345 pages, ISBN: 978-3-123-45678-9
            </p>
            </div>
            </div>
          </div>
        </div>

        {/* Review / Form Section */}

        <div className="flex items-center flex-col w-[60%] mx-[auto] bg-gray-100 gap-0 mt-10">
          <h1 className="font-bold">Review This Book</h1>
          <form className="flex flex-col gap-5 w-2/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <input className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Comment"
              required
              name="comment" />
            <input className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Rate This Book"
              required
              name="Ratings" />
          </form>

          <div className=" ml-4">
            <p className="font-semibold">Roberto Jordan</p>
            <p className="text-gray-600">
              "What a delightful and magical book it is! It indeed transports
              readers to the wizarding world."
            </p>
            <p className="font-semibold">Jessica M</p>
            <p className="text-gray-600">
              "From the moment I opened the first book, I was transported to a world of magic and wonder. The characters are incredibly well-developed, and the plots are filled with twists and turns. Harry's journey is one of courage and self-discovery, making it relatable and inspiring."
            </p>
            <p className="font-semibold">Reacheal T</p>
            <p className="text-gray-600">
              "The Half-Blood Prince is one of my favorites in the series! The blend of teenage angst, romance, and the looming threat of darkness creates a captivating narrative. The way Rowling unveils the history of Voldemort was fascinating and added a new layer to the story. I couldn't put it down."
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default BookDetails;
