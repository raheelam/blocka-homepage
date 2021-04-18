import React from 'react';
import TopSectionItem from './TopSectionItem';

const TopSection = () =>{
    return(
        <div style={{borderRadius: "20px"}} className="text-white d-flex justify-content-between mt-4 p-2 bg-pink w-100">   
            <TopSectionItem description="Balance" itemName="AFYA" price="143.00" nameColor="text-danger" />
            <TopSectionItem description="Equivalent" itemName="ZAR" price="R21.00" nameColor="text-primary" />      
        </div>
    );
    
}

export default TopSection;