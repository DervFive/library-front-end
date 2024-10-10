import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../../constants";

const AddBooks = () => {

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // colect form data//
      const formData = new FormData(event.target);
      //post data to api//
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        author: formData.get("author"),
        genre: formData.get("genre"),
        description: formData.get("description"),
        language: formData.get("language"),
        datePublished: formData.get("datePublished"),

      })

    } catch (error) {
      console.log(error)

    }
  }

  return (
    <>
      <Navbar />
     
      <div className="flex justify-center items-center flex-col h-screen bg-gray-100 gap-2">
      <div><h1 className="font-bold">Add Books</h1></div>
        <h2 className="font-semibold">Title, Author, Genre</h2>
        {/* Card Container for Title, Author, Genre */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-gray-300">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter Book Title"
                required
                name="title"
              />
            </div>

            <div>
              <select name="author" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500">
                <option value="">Select Author</option>
                <option value="">--A1--</option>
                <option value="">--A2--</option>
                <option value="">--A3--</option>
                <option value="">--A4--</option>
                <option value="">--A5--</option>
              </select>
            </div>

            <div>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter Genre"
                required
                name="genre"
              />
            </div>
            <div className="bg-slate-300 text-black py-2 px-4 rounded-lg hover:bg-[#F57A49] transition duration-300 text-center  flex justify-center">
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>


        <h1 className="font-semibold">Cover Image And PDF Form</h1>

        {/* Card Container for Cover Image/PDF Form */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-gray-300">
          <form className="flex flex-col gap-5">
            <div>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Add Book Cover Image"
                name="bookcover"
              />
            </div>

            <div>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Add Book"
                required
                name="Book"
              />
            </div>

            <div className="bg-slate-300 flex justify-center text-black py-2 px-4 rounded-lg hover:bg-[#F57A49] transition duration-300">
              <button type="submit">Add Now</button>
            </div>
          </form>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default AddBooks;