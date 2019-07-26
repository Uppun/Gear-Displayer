import React from 'react';
import '../assets/error.css';

const ErrorMessage = ({message}) => {
    return (
        <div className='error-message'>
            {message}
        </div>
    );
}

export default ErrorMessage;