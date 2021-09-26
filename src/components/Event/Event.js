import React, { useEffect, useState } from 'react';
import './Event.css';
import Perticipents, { } from '../Participents/Perticipents';
import Cart, { } from '../Cart/Cart'


const Event = () => {
    const [participents, setPerticipent] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setPerticipent(data))
    }, [])

    const handleToCart = (perticipent) => {

        const addedPerticipent = [...cart, perticipent];
        setCart(addedPerticipent)

    }
    return (
        <div>

            <h3>Total Amount: $14400</h3>
            <div className="event-container">
                <div className="perticipents">
                    {

                        participents.map(periticipent => <Perticipents
                            key={periticipent.ID}
                            periticipent={periticipent}
                            handleToCart={handleToCart}
                        ></Perticipents>)
                    }


                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>


            </div>


        </div>
    );
};

export default Event;

