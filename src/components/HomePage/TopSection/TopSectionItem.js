import React from 'react';

const TopSectionItem = ({itemName, nameColor, description,price} ) =>{
    return (
        <div className="w-50 d-flex flex-column align-items-center ">
            <div style={{width:"50px", height: "50px"}} className={`${nameColor} d-flex justify-content-center align-items-center bg-white rounded-circle `} >
                <span>{itemName}</span>
            </div>
            <h4>{price}</h4>
            <p className="mb-0">{description}</p>
        </div>
    );
}

export default TopSectionItem;