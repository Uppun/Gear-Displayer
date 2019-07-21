import React, { useCallback, useRef } from 'react';

const Landing = () => {
    const submissionRef = useRef(null);
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            window.location.href = `http://localhost:3000/build/${submissionRef.current.value}`;
        },
        [],
    );

    return (
        <div className='landing-page'>
            <form onSubmit={handleSubmit}>
                <input ref={submissionRef} type='text' className='submit-box' placeholder='Enter build ID' />
            </form>
        </div>
    )
}

export default Landing;