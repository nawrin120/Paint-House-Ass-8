import React from 'react';
import './Participents.css'

const Perticipents = (props) => {
    const { ID, Name, Age, Class, Fee, img } = props.periticipent;
    return (
        <div className='participents-cart'>
            <div className="Paticipent-img">
                <img src={img} alt="" />

            </div>
            <div className="Paticipent-details">
                <h3>Name : {Name}</h3><br />
                <div className='others-details'>
                    <div>
                        <p>ID : {ID} </p>
                        <p>Age :{Age} </p>
                    </div>
                    <div>
                        <p>Class : {Class}</p>
                        <p>Fee : {Fee}</p>
                    </div>

                </div>


            </div>
            <div>
                <div className="icon-div">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a>



                </div>

                <button

                    onClick={() => props.handleToCart(props.periticipent)}
                    className='button-parti'><i className="fas fa-shopping-cart"></i> Add To Cart</button>

            </div>

        </div>
    );
};

export default Perticipents;