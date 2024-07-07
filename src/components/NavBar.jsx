import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuery } from "../query/QuerySlice";
import { changeMode } from "../dark/darkSlice";

const NavBar = () => {
  const darkMode = useSelector((state) => state.dark.dark)
  const query = useSelector((state) => state.query.value);
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  function updateQuery() {
    if (inputRef.current.value.length > 0) {
      dispatch(changeQuery(inputRef.current.value));
    }
  }
  
  return (
    
    <nav className={`transition-all duration-300 ease-in-out ${darkMode? "text-[#f1f1f1] bg-[#1b1c1e]": " bg-[#f1f1f1] text-[#1b1c1e]"} w-full h-[70px] border-b-2 border-gray-500`}>
      <div className="flex w-[80%] max-w-[1100px] mx-auto justify-between items-center h-full">
        <a href="#" className="text-green-500 text-5xl">
          <i className="fa-solid fa-globe "></i>
        </a>
        <div className="flex justify-between gap-[100px] items-center">
          <ul className="flex gap-4 font-semibold">
            <li
              onClick={() => dispatch(changeQuery("icc"))}
              className={
                query == "icc"
                  ? "text-blue-500 cursor-pointer"
                  : " cursor-pointer"
              }
              id="icc"
            >
              ICC
            </li>
            <li
              onClick={() => dispatch(changeQuery("ai"))}
              className={
                query == "ai"
                  ? "text-blue-500 cursor-pointer"
                  : " cursor-pointer"
              }
              id="ai"
            >
              Artificial Intelligence
            </li>
            <li
              onClick={() => dispatch(changeQuery("India"))}
              className={
                query == "India"
                  ? "text-blue-500 cursor-pointer"
                  : " cursor-pointer"
              }
              id="India"
            >
              India
            </li>
          </ul>
          <i onClick={()=> dispatch(changeMode())} className={`fa-regular cursor-pointer transition-all duration-300 ease-in-out ${darkMode? "fa-moon": "fa-sun"} text-3xl`}></i>
        </div>
        <div className="flex gap-1">
          <input
            type="text"
            ref={inputRef}
            className="border text-gray-600 border-gray-400 text-sm px-2 rounded-md w-[200px]"
            placeholder="e.g. Technology"
          />
          <button
            onClick={() => {
              updateQuery();
            }}
            className="bg-blue-500 text-white p-1 px-6 rounded-md text-sm"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
