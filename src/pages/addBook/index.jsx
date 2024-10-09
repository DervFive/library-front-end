import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import axios from "axios";
import { BASE_URL } from "../../constants";


const AddBooks = () => {

  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     //collect form data
  //     const formData = new FormData(event.target);
  //     // post data to API 
  //     const response = await axios.post(`${BASE_URL}/books`, {
  //       title: formData.get('title'),
  //     })

  //   } catch (error) {
  //     alert('failed')
  //   }

  // }




  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col h-screen bg-gray-100 gap-4">

        <h1 className="font-bold">Add Book by Title,Author, Genre</h1>

        <form className="flex flex-col gap-5 w-2/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <div>
            <input className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter Book Title"
              required
              name="Book"
            />
          </div>

          <div>
            <input className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter Author"
              required
              name="Author"
            />
          </div>

          <div>
            <input className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter Genre"
              required
              name="Genre"
            />
          </div>
        </form>

        <div className="bg-slate-300 text-black py-2 px-4 rounded-lg hover:bg-[#F57A49] transition duration-300">
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="flex items-center flex-col h-screen bg-gray-100 gap-4">
        <h1 className="font-bold">Add Book by Cover Image/ PDF Form</h1>
        <form className="flex flex-col gap-5 w-2/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <div>
            <input className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Add Book Cover Image"
              required
              name="Bookcover"
            />
          </div>

          <div>
            <input className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Add book"
              required
              name="Book" />

          </div>
        </form>
        <div className="bg-slate-300 text-black py-2 px-4 rounded-lg hover:bg-[#F57A49] transition duration-300">
          <button type="submit">Add Book</button>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default AddBooks;