import "./card.scss";
import React from 'react';
export const Card = (props) => {
    const {name, data} = props;
    return (
        <div className="card">
           {name}
           <h4>{data}</h4>
        </div>
    )
}