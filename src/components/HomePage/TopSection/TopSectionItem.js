import React from 'react';

const TopSectionItem = ({itemName, nameColor, description,price} ) =>{
    return (
        <div className="w-50 d-flex flex-column align-items-center ">
            <div style={{width:"42px", height: "42px"}} className={`${nameColor} d-flex justify-content-center align-items-center bg-white rounded-circle `} >
                <span>{itemName}</span>
            </div>
            <h6>{price}</h6>
            <p className="mb-0">{description}</p>
        </div>
    );
}

export default TopSectionItem;