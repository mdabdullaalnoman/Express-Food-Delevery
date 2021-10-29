import React from 'react';
import './NotFound.css';

const NotFound = () => {
    const goBack = () => {
        window.history.go(-1)
    }

    return (
        <div className="not-found">
            <div className="go-back">
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
};

export default NotFound;