import React from 'react';
import TopSectionItem from './TopSectionItem';

const TopSection = () =>{
    return(
        <div style={{borderRadius: "20px"}} className="text-white shadow mx-2 d-flex justify-content-between p-2 bg-pink ">   
            <TopSectionItem description="Balance" itemName="AFYA" price="143.00" nameColor="text-danger" />
            <div className="border-right border-white"></div>
            <TopSectionItem description="Equivalent" itemName="ZAR" price="R21.00" nameColor="text-primary" />      
        </div>
    );
    
}

export default TopSection;