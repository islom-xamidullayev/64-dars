import React from 'react';
import "./index.css";

const Button = ({ onClick, children}) => {    
    return (
        <button onClick={onClick}  style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            borderRadius: '5px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
        }}>
            <span>{children}</span>
        </button>
    );
}

export default Button;
