import React, { Fragment } from "react";
import mainImage from '../../assets/mainImage.JPG'
import Button from "../UI/Button";

const MainContent = () => {

    const btnContent = 'Get Your Great';

    return (
        <Fragment>
            <div>
                <div className='bg-gray-100 h-14 text-center'>
                    <h1 className='text-gray-800 pt-2'>HELLO NIKE APP</h1>
                    <p className='text-sm'>Download the app to access everything Nike</p>
                </div>
                <div className='sm:px-14 h-2/5 shadow'>
                    <img src={mainImage} alt="Nike shoes images" className='object-cover object-center h-full' />
                </div>
                <div className='text-center mt-10'>
                    <h1 className='uppercase font-black text-3xl sm:text-6xl tracking-tighter'>Your Nike Connection</h1>
                    <p className='mt-5 mb-5'>More sport, more inspiration, more Nike!</p>
                    <Button content={btnContent} />
                </div>
            </div>
        </Fragment>
    );
};

export default MainContent;