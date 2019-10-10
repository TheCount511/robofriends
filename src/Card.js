import React from 'react';

const Card = ({name, email, id}) => {
    return (
     <div className="tc bg-light-green dib br3 pa3 ma2 grow bw1 shadow-1">
        <img alt ='robots' src={`https://robohash.org/set_set3/${name}?size=100x100`}/>
        <div>
        <h2 > {name} </h2> 
        <p>{email} </p> 
        </div> 
        </div>
        );
}

export default Card;
