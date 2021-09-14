import React, { Fragment } from 'react';
import { BiRun } from "react-icons/bi";

const Header = (props) => {

    return (
        <Fragment>
            <div className='bg-gray-100 h-9 px-14 hidden lg:flex lg:justify-between lg:items-center'>
                <span className='text-2xl'><BiRun /></span>
                <ul className='text-xs flex'>
                    <li className='mr-6 cursor-pointer hover:text-gray-400'>Help</li>
                    <li className='mr-6 cursor-pointer hover:text-gray-400'>Join Us</li>
                    <li className='cursor-pointer hover:text-gray-400'><button onClick={props.showModal}>Sign In</button></li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Header;