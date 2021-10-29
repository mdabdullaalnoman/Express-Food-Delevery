import React from 'react';
import './ContractBanner.css';
import rest from '../../food_delevari_media/rest_01.jpg';

const ContractBanner = () => {
    return (
        <div className="contract-banner-warp">
            <div className="contract-banner-img">
                <img src={rest} alt="" />
            </div>
            <div className="contract-banner-content">
                <h3>Sit At Home</h3>
                <h3><span>We Will Take Care</span></h3>
                <p>Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula. Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.</p>
                <button>see more</button>
            </div>
        </div>
    );
};

export default ContractBanner;