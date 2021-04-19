import React from 'react';

const Header = () =>{
    return(
        <>
        <div  className="fixed-top text-pink bg-white border-bottom w-100 pt-1 px-3 d-flex justify-content-end ">
            <h4 className="mr-auto font-weight-bolder">ribbon</h4>
            <h4 ><i className=" bi bi-person-circle bg-red mr-1"></i></h4>
            <h4 ><i className="bi bi-bell-fill"></i></h4>
        </div>
        <div className="mt-5"></div>
        </>

    );
}
export default Header;