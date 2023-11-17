import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="bg-white flex items-center justify-between h-[80px] p-[0 2rem] ">
      <img
        src="/assets/logo-cafecito-red-transparent.png"
        className="w-[200px] mx-[30px]"
        alt=""
      />
      <nav ref={navRef}>
        <Link to="/" className="text-black -0 mx-4 cursor-pointer ">
          Home
        </Link>
        <Link to="/menu" className="text-black -0 mx-4  cursor-pointer">
          Menu
        </Link>
        <Link to="/find" className="text-black -0 mx-4 cursor-pointer ">
          Find Us
        </Link>
        {/* <a to="/#" className="text-black m-0 mx-4 cursor-pointer">
          Our Story
        </a>
        <a to="/#" className="text-black m-0 mx-4 cursor-pointer ">
          Special Events
        </a>
        <a to="/#" className="text-black m-0 mx-4  cursor-pointer">
          Community
        </a> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
