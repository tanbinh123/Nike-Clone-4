import React from 'react';
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
    return (
        <>
            <div className='flex sm:relative'>
                <span className='text-2xl lg:text-xl cursor-pointer p-2 rounded-full hover:bg-gray-200 lg:absolute top-1 left-0'>
                    <BsSearch />
                </span>
                <input type="text" className='hidden lg:block lg:w-40 h-10 pl-10 bg-gray-100 rounded-full focus:outline-none hover:bg-gray-200' placeholder='Search'/>
            </div>
        </>
    );
};

export default SearchBox;