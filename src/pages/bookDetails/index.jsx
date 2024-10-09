import React from "react";

const BookDetails = () => {
  const handleStartReading = () => {
    alert("Starting the book!");
  };
  const handleDeleteBook = () => {
    alert("Delete the bool!");
  }

  return (
    <div className="bg-gray-100 min-h-screen p-10">
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
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">Alexander Mark</span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </header>

            <h2 className="text-xl font-semibold">J.K. Rowling</h2>
            <p className="text-gray-700 mt-2">
              Get ready to uncover the dark secrets and betrayals in the book. A
              thrilling adventure awaits you.
            </p>

            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-[#f57a49]"
              onClick={handleStartReading}>
              Start Reading
            </button>

            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-[#f57a49]"
              onClick={handleStartReading} >
              Delete Book
            </button>

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

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-6">
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

      {/* Review / Form Section */}

      <div className="flex items-center flex-col h-screen bg-gray-100 gap-4">
        <h1 className="font-bold">Review This Book</h1>
        <form className="flex flex-col gap-5 w-2/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <div>
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
          </div>
          </form>

        <div className="ml-4">
          <p className="font-semibold">Roberto Jordan</p>
          <p className="text-gray-600">
            "What a delightful and magical book it is! It indeed transports
            readers to the wizarding world."
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
