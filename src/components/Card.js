import React from "react";

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img
                alt={`${name} profile`}
                src={`https://randomuser.me/api/portraits/women/${id % 100}.jpg`}
                loading="lazy"
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;