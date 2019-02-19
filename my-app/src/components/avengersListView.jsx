import React from 'react';

export const AvengersListView = ({data}) =>{
    return(
        <ul className="avenger-lits-wrapper">
            {data.length && data.map(item => {
                return(
                    <li className="aveger-list-item" key={item.Name}>
                        <div className="card">
                            <img src={item.avtar} className="card-img-top" alt="Avenger" title="Avenger Image"/>
                            <div className="card-body">
                                <h5 className="card-title"> {item.Name} </h5>
                                <p className="card-text"> {`Powers : ${item.Powers}`} </p>
                                <p className="card-text"> {item.Description} </p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};