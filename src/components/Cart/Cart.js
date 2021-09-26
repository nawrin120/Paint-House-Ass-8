import React from 'react';
import './Cart.css';
import AddedPariticipent, { } from '../AddedParticipent/AddedPariticipent'

const Cart = (props) => {
    const { cart } = props


    let SubmittedAmount = 0
    let storedPerticipentName = []

    for (const perticipent of cart) {
        SubmittedAmount = SubmittedAmount + perticipent.Fee
        storedPerticipentName.push(perticipent.Name)

    }
    return (
        <div>
            <h3 className='member-len'>Perticipents Number: {cart.length}  </h3>
            <h4>Submiited Amount: ${SubmittedAmount}</h4>
            <div>
                {


                    cart.map(cadidate => <AddedPariticipent
                        key={cadidate.ID}
                        Name={cadidate.Name}
                        Fee={cadidate.Fee}
                    ></AddedPariticipent>





                    )
                }
            </div>

        </div>
    );
};

export default Cart;