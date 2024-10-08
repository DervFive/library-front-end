import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup,faBookmark, faHeartCircleCheck, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className="h-screen w-[10rem] bg-white flex flex-col p-4 fixed">
         <h3 className="text-black font-bold mb-8">THE BOOKS</h3>
         
         <nav className="flex flex-col space-y-4">
         <p className='text-gray-600'>
          MENU</p>
        
         <Link to="/ Discover" className="flex items-center p-2 space-x-3 font-bold text-black">
         <div> <FontAwesomeIcon icon={faHouse} className="h-5 w-3 rounded-3xl text-white bg-orange-500 p-2 " /></div>
            <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'>Discover</span> 
        </Link>

        <Link to="/Category" className="flex items-center space-x-3 p-2  text-gray-600">
        <div><FontAwesomeIcon icon={faLayerGroup} className="h-5 w-4 rounded-3xl p-1 bg-slate-300" /></div>
          <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'>Category</span>
        </Link>

        <Link to="/my Library" className=" flex items-center space-x-3 p-2 rounded  text-gray-600">
        <div> <FontAwesomeIcon icon={faBookmark} className="h-5 w-3 rounded-3xl p-1 bg-slate-300"/> </div>
        <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'> My Library</span>
        </Link>

        <Link to="/Download" className=" flex items-center space-x-3 p-2 text-gray-600">
        <div><FontAwesomeIcon icon={faFileArrowDown} className="h-5 w-3 rounded-3xl p-1 bg-slate-300"/> </div>
        <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'> Download</span>
        </Link>

        <Link to="/Favorite" className="flex items-center space-x-3 p-2 text-gray-600">
        <div><FontAwesomeIcon icon={faHeartCircleCheck} className="h-5 w-4 rounded-3xl bg-slate-300 p-1"/></div>
         <span className='relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'> Favorite</span>
        </Link>

        <div><hr className="border-t-2 border-gray-300" /></div>

       </nav>
    </div>
  )
};

export default Navbar;