import { Link } from 'react-router-dom';



const Navbar = () => {
  return (

    <div className="h-screen w-[10rem] bg-white flex flex-col p-4 fixed shadow-xl">
      <h3 className="text-black font-bold mb-8">DevShelf</h3>



      <nav className="flex flex-col space-y-4">


        <p className='text-gray-600 text-[12px] pl-[8px]'>MENU</p>

        <Link to="/" className="flex items-center p-2 space-x-3 font-bold text-black">
          <div className='px-[6px] py-[2px] text-white rounded-[5px] bg-[#f57a49]'><i class="fa-solid fa-house"></i></div>
          
         <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-[14px] '>Home</span> 
        </Link>

        <Link to="/booklist" className="flex items-center space-x-3 p-2  text-gray-600">
          <div className="bg-slate-300 px-[6px] py-[2px] rounded-[5px]"><i class="fa-solid fa-list"></i></div>
          <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-[14px]'>Discover</span>
        </Link>

        <Link to="" className="flex items-center space-x-3 p-2  text-gray-600">
          <div className="bg-slate-300 px-[6px] py-[2px] rounded-[5px]"><i class="fa-solid fa-grip"></i></div>
          <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-[14px]'>Category</span>
        </Link>

        <Link to="" className=" flex items-center space-x-3 p-2 rounded  text-gray-600">
          <div className="bg-slate-300 px-[6px] py-[2px] rounded-[5px]"><i class="fa-solid fa-bookmark"></i></div>
          <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-[14px]'> My Library</span>
        </Link>

        <Link to="" className=" flex items-center space-x-3 p-2 text-gray-600">
          <div className="bg-slate-300 px-[6px] py-[2px] rounded-[5px]"><i class="fa-solid fa-file"></i></div>
          <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-[14px]'> Download</span>
        </Link>

        <Link to="" className="flex items-center space-x-3 p-2 text-gray-600">
          <div className="bg-slate-300 px-[6px] py-[2px] rounded-[5px]"> <i class="fa-solid fa-heart"></i></div>
          <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-[14px]'> Favorite</span>
        </Link>


        <Link to="/add-new" className="flex items-center space-x-3 p-2 text-gray-600">
          <div className="bg-slate-300 px-[6px] py-[2px] rounded-[5px]"> <i class="fa-regular fa-square-plus"></i></div>
          <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-[14px]'> Add Book</span>
        </Link>

        <div><hr className="border-t-2 border-gray-300" /></div>

      </nav>
      </div>
   
  )
};

export default Navbar;