import React, { Fragment } from "react";
import nikeLogo from '../../assets/nikeSwoosh.svg';
import { ImCross } from "react-icons/im";
import Button from "../UI/Button";

const Login = (props) => {
    return (
        <Fragment>
            <div className='fixed overflow-scroll h-3/4 bg-white top-24 left-2/4 transform -translate-x-2/4 z-30'>
                <div className='w-80 sm:w-96 p-3'>
                    <div>
                        <div className='flex justify-end'>
                            <button className='mr-5 mt-3' onClick={props.hideModal}>
                                <span className="text-xl">
                                    <ImCross />
                                </span>
                            </button>
                        </div>
                        <div className='flex justify-center'>
                            <img src={nikeLogo} alt="nike logo" className='h-4' />
                        </div>
                    </div>
                    <div className='uppercase text-xl text-center font-bold tracking-tighter my-5 leading-none'>
                        <h1>Your account for <br /> everything nike</h1>
                    </div>
                    <div className='mx-10 my-5'>
                        <form>

                            <input type='email' name='email' className='w-full h-10 pl-4 border border-gray-400 rounded-sm mb-4' placeholder='Email address' required />
                            <br />
                            <input type='password' name='password' className='w-full h-10 pl-4 border border-gray-400 rounded-sm mb-4' placeholder='Password' required />

                            <input type="checkbox" id='checkbox' />
                            <label htmlFor="checkbox" className='pl-3 pr-4 text-xs text-gray-500'>Keep me signed in</label>

                            <p className='text-xs text-gray-500 text-center my-4'>By logging in, you agree to Nike's <span className='border-b border-gray-900 '><a href="/">Privacy Policy</a></span> and <span className='border-b border-gray-900 '><a href="/">Terms of use</a></span>.</p>

                            <span className='mt-5 flex justify-center'>
                                <Button content={'SIGN IN'} />
                            </span>

                            <div className='text-xs flex justify-center'>
                                <p className='mr-3'>Not a Member?</p>
                                <span className='text-gray-500 border-b border-gray-500'><a href="/" id='join'>Join Us</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;