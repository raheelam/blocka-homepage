import React from 'react';

const Header = () =>{
    return(
        <>
        <div  className="fixed-top text-pink bg-white border-bottom w-100 px-3 d-flex justify-content-end ">
            <h4 className="mr-auto font-weight-bolder">ribbon</h4>
            <h4 className=" bi bi-person-circle bg-red mr-1"></h4>
            <h4 className="bi bi-bell-fill"></h4>
        </div>
        <div className="mt-5"></div>
        </>

    );
}
export default Header;