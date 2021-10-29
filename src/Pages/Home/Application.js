import React from 'react';
import './Application.css';

const Application = () => {
    return (
        <div className="application-warp">
             <div className="application">
                <h1>Get More With <span>Our Application</span></h1>
                <p>Nunc pellentesque orci sed tempor pharetra. Morbi molestie purus in interdum facilisis. Mauris commodo mi a egestas sollicitudin. Mauris pharetra placerat sem vel fringilla.</p>
                <ol>
                    <li>Flow Oder Status</li>
                    <li>Order From Any Location</li>
                    <li>Get Important Notices</li>
                </ol>
            </div>
            
            <div className="application-img">
                <img src="https://i.imgur.com/D5HUywB.png" alt="" />
            </div>
           
        </div>
    );
};

export default Application;