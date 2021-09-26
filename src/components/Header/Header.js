import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="heading"> <span className="header-one">Paint House </span> art competition 2021</h1>
            <p>
               <span className="organize"> painthouse1.com</span> is organizing an Drawing and Painting Competition all across Bangladesh. The competition is open to all interested candidates with no age limitations.
            </p><br />
            <h5>All the participants will receive a Digital Certificate of Participation and Appreciation signed by the founder of <span className="organize">painthouse1.com</span> </h5>
        </div>
    );
};
export default Header;