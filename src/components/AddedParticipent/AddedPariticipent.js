import React from 'react';
import './AddedParticipent.css'

const AddedPariticipent = (props) => {

    return (
        <div className='cadidate-added'>

            <h2>{props.Name}</h2>
            <p>Subbmitted Fee: {props.Fee}</p>

        </div>
    );
};

export default AddedPariticipent;