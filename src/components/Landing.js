import React, { useCallback, useRef } from 'react';
import '../assets/landing.css';
import ErrorMessage from './ErrorMessage';

const Landing = ({missingPage}) => {
    let renderError = missingPage;
    const submissionRef = useRef(null);
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            
            if (submissionRef.current.value) {
                window.location.href = `http://localhost:3000/build/${submissionRef.current.value}`;
            }

        },[],);

    return (
        <div className='landing-page'>
            <div className='error-box'>
                {renderError ? <ErrorMessage message='Build not found. Please try another ID.' /> : null}
            </div>
            <form onSubmit={handleSubmit}>
                <input ref={submissionRef} type='text' className='submit-box' placeholder='Enter build ID' />
                <input type='submit' className='submit-button' value='Search' />
            </form>
        </div>
    )
}

export default Landing;