import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const AddBooks = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col h-screen bg-gray-100 space-x-3">
        <h1>Add A New Book</h1>
        <form className="flex flex-col">
          <div>
            <input type="text" placeholder="Enter Book Title" reguired name="Book" />
          </div>
          <div>
            <input type="text" placeholder="Enter Author" required name="Book" />
          </div>
          <div>
            <input type="text" placeholder="Enter Genre" required name="Book" />
          </div>
         <button type="submit">Add Book</button>
        </form> 
      </div>
      <Footer />
    </>

  )
}

export default AddBooks;