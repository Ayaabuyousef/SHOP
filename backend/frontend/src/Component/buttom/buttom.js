import React from 'react';
import './buttom.styles.scss';

const Button=({children,...otherProps})=>(
    <button className='custom-button' {...otherProps}>
        {children}

    </button>
);
export default Button;