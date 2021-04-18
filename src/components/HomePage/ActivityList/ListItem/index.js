import React from 'react';

const ListItem = ({description, code, children}) =>{
    return(
        <li className="list-group-item text-dark d-flex justify-content-between ">
            {children}
            <p className="m-0 p-0">{description}</p>
            <p className="m-0 p-0">{code}</p>
        </li>
    );
}

export default ListItem;