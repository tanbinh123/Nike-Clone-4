import React, { Fragment } from 'react';
import { BiRun } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";

const DrawerContent = (props) => {
    return (
        <Fragment>
            <div className='block fixed h-screen overflow-scroll bg-white w-60 sm:w-80 top-0 right-0 lg:hidden z-30'>
                <ul className='flex flex-col text-xl sm:text-2xl pt-8'>
                    <li className='mx-4 my-2'>Men</li>
                    <li className='mx-4 my-2'>Women</li>
                    <li className='mx-4 my-2'>Kids</li>
                    <li className='mx-4 my-2'>Customise</li>
                    <li className='mx-4 my-2'>Sale</li>
                    <li className='mx-4 my-2'>SNKRS</li>
                </ul>
                <div className='text-2xl p-5 my-10'><BiRun /></div>
                <div>
                    <button className='text-white bg-black w-28 rounded-full p-2 mb-5 ml-5 hover:bg-gray-800'>Join Us</button>
                    <button className='bg-white text-black w-28 border-2 border-gray-900 rounded-full p-2 mb-10 ml-5 hover:bg-gray-800' onClick={() => {props.showModal(); props.hideModal()}}>Sign In</button>
                    <div className='flex'>
                        <span className='text-2xl mr-5'><BsBag /></span>
                        <span className='text-xl'>Bag</span>
                    </div>
                    <div className='flex mt-5'>
                        <span className='text-2xl mr-5'><BiHelpCircle /></span>
                        <span className='text-xl'>Help</span>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default DrawerContent;