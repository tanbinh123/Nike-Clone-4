import React, { Fragment } from "react";

const Button = (props) => {
    return (
        <Fragment>
            <button className='text-white bg-black w-40 rounded-full p-2 mb-10 hover:bg-gray-800'>{props.content}</button>
        </Fragment>
    );
};

export default Button;