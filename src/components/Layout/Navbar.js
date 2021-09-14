import React, { Fragment } from 'react';
import nikeSwoosh from '../../assets/nikeSwoosh.svg';
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import SearchBox from './SearchBox';

const Navbar = (props) => {

    return (
        <Fragment>
            <div className='h-14 px-5 sm:px-14 flex justify-between items-center '>
                <div>
                    <span className='cursor-pointer'>
                        <img src={nikeSwoosh} alt="nike logo" className='h-3 sm:h-5' />
                    </span>
                </div>

                <div className='hidden lg:block'>
                    <ul className='flex'>
                        <li className='mx-4'>Men</li>
                        <li className='mx-4'>Women</li>
                        <li className='mx-4'>Kids</li>
                        <li className='mx-4'>Customise</li>
                        <li className='mx-4'>Sale</li>
                        <li className='mx-4'>SNKRS</li>
                    </ul>
                </div>

                <div className='flex'>
                    <SearchBox />
                    <span className='hidden lg:block text-2xl cursor-pointer p-2 lg:ml-5 rounded-full hover:bg-gray-200'><FaRegHeart /></span>
                    <span className='text-2xl cursor-pointer ml-2 p-2 rounded-full hover:bg-gray-200'><BsBag /></span>
                    <button onClick={props.showDrawer}><span className='ml-6 text-2xl cursor-pointer p-2 lg:hidden'>☰</span></button>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;