import React from 'react';

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
}

const Landing = () => {
    return (
        <div className='landing-page'>
            <form onSubmit={handleSubmit}>
                <input type='text' className='submit-box' placeholder='Enter build ID' />
            </form>
        </div>
    )
}