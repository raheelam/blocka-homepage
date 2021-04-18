import React from 'react';

const ListItem = () =>{
    return(
        <li className="list-group-item text-dark d-flex justify-content-between ">
            <i className="bi bi-calendar4-range "></i>
            <p className="m-0 p-0">HIV Blood Draw Test</p>
            <p className="m-0 p-0">A100</p>
        </li>
    );
}

export default ListItem;