import React from 'react';
import ActivityList from './ActivityList/ActivityList';
import Section from '../Section/Section';
import TopSection from './TopSection/TopSection';


const HomePage = () =>{
    return(
        <div style={{maxWidth:"100vw", overflowX:"hidden"}} className="vw-100 vh-100 py-2 text-pink">
            
            <TopSection />
            <Section heading="Select Currency: " headingBgColor="bg-lightgrey" headingColor="text-primary">
                <div className="mx-3 mt-3">
                    <div className="border border-light ">
                        <select style={{height: "26px"}} className="form-select w-25 bg-lightgrey">
                            <option>AFYA</option>
                            <option>ZAR</option>
                        </select>
                        <input style={{height: "26px"}}  className="form-input w-75" type="number" step="0.000000001" min="0" />
                    </div>
                    <div className="mt-2">
                        <button className="btn btn-primary btn-sm m-1 mr-4">SEND</button>
                        <button className="btn btn-primary btn-sm m-1">RECEIVE</button>
                    </div>
                </div>
            </Section>
            <Section  heading="Recent Activity" headingBgColor="bg-lightgrey" headingColor="text-white">
                <ActivityList />
            </Section>

            
        </div>
    );
}

export default HomePage;