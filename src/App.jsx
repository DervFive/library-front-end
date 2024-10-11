import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BookList from './pages/bookList';
import AddBook from './pages/addBook';
import BookDetails from './pages/bookDetails';
import LandingPage from './pages/landingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/booklist",
      element: <BookList />
    },
    {
      path: "/add-new",
      element: <AddBook />
    },
    {
      path: "/books/:id",
      element: <BookDetails />
    },
 
  ])

  return (
    <>
     <ToastContainer />
     <RouterProvider router={router}/>
    </>
  );
  


  
}

export default App;
