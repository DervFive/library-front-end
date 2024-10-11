import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";

const AddBooks = () => {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data.data); // Ensure this is the correct path to authors
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const handleSubmit = async (event) => {
    try {

      event.preventDefault();
      const formData = new FormData(event.target);
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        author: formData.get("author"),
        genre: formData.get("genre"),
        description: formData.get("summary"), // Assuming summary is used as description
        language: formData.get("language"),
        datePublished: formData.get("datePublished"),
        summary: formData.get("summary"),
        cover: formData.get("cover"),
        language: formData.get("language"),
      });
      toast.success('Book added');
    } catch (error) {
      toast.error("Book Could not be added");
      // console.log(error);
    }
  };

  // const handleFileSubmit = async (event) => {
  //   event.preventDefault();
  //   // Handle file upload logic here if needed
  // };

  return (
    <>
      <Navbar />

      <section className="add-book flex justify-center items-center flex-col gap-1">

        <h1 className="font-bold">Add New Book</h1>
        {/* Card Container for form */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-black">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <span className="text-sm text-black font-extrabold">Book Title</span>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter Title"
                required
                name="title" />
            </div>
            <div>
              <span className="text-sm  text-black font-extrabold">Author</span>
              <select name="author" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500">
                <option value="">Select Author</option>
                {authors.map((author) => {
                  return <option key={author._id} value={author._id}>{author.name}</option>;
                })}
              </select>
            </div>
            <div className="flex gap-3">
              <div>
                <span className="text-sm  text-black font-extrabold">Genre</span>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter Genre"
                  required
                  name="genre" />
              </div>
              <div>
                <span className="text-sm  text-black font-extrabold">Cover Image</span>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter URL"
                  name="cover"
                />
              </div>
            </div>
            <div>
              <span className="text-sm  text-black font-extrabold">Summary</span>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="summary"
                required
                name="Book" />
            </div>
            <div>
              <span className="text-sm  text-black font-extrabold">Description</span>
              <textarea name="summary" id="summary" className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500" type="text"
                placeholder="Description"
                required
              ></textarea>
            </div>
            <div className="flex gap-3">
              <div>
                <span className="text-sm  text-black font-extrabold">Language</span>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Language"
                  required
                  name="language" />
              </div>
              <div>
                <span className="text-sm  text-black font-extrabold">Date Publish</span>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="DD/MM/YY"
                  required
                  name="datePublished" />
              </div>
            </div>
            <div className="bg-slate-400 text-black py-2 px-4 rounded-lg hover:bg-[#F57A49] transition duration-300 text-center flex justify-center">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default AddBooks;