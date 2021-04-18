import React from 'react';

const Section = ({children, heading, headingColor, headingBgColor}) =>{
    return(
        <div className="mt-4 w-100">
            <div className={`p-1 pt-2 ${headingBgColor}`}>
                <span className={headingColor}>{heading}</span>
            </div>
            {children}
        </div>
    );

}

export default Section;