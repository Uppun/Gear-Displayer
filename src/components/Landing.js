import React, { useRef } from 'react';
import '../assets/landing.css';
import ErrorMessage from './ErrorMessage';
import {navigate} from 'hookrouter';

const Landing = ({missingPage}) => {
    let renderError = missingPage;
    const submissionRef = useRef(null);

    function handleSubmit(e) {
            e.preventDefault();
            
            if (submissionRef.current.value) {
                navigate(`http://localhost:3000/build/${submissionRef.current.value}`);
            }
        };

        const onPress = () => {
            window.location.href = 'https://ffxiv.ariyala.com/'; 
        }

    return (
        <div className='landing-page'>
            <div className='error-box'>
                {renderError ? <ErrorMessage message='Build not found. Please try another ID.' /> : <TitleMessage />}
            </div>
            <form onSubmit={handleSubmit}>
                <input ref={submissionRef} type='text' className='submit-box' placeholder='Enter build ID' />
                <input type='submit' className='submit-button' value='Search' />
            </form>
            <div className='help-text'>
                <text>To search for a build, enter the build ID from <text onClick={onPress} className='link-text'>Ariyala</text>. Example: 17L25</text>
            </div>
        </div>
    )
}

const TitleMessage = () => {
    return (
        <div className='page-title'>
            FFXIV Gearset Viewer
        </div>
    )
}

export default Landing;