import React from 'react';
import ActivityList from './ActivityList/ActivityList';
import NavigationBar from '../Navigation/NavigationBar';
import Section from '../Section/Section';
import TopSection from './TopSection/TopSection';

const HomePage = () =>{
    return(
        <div style={{maxWidth:"100vw", overflowX:"hidden"}} className="vw-100 vh-100 py-2 text-pink">
             <div  className="fixed-top bg-white border-bottom w-100 px-3 d-flex justify-content-between ">
                    <div><span className="font-weight-bolder">ribbon</span></div>
                    <div ><i className="bi bi-person-circle bg-red"></i> <i className="bi bi-bell-fill"></i></div>
            </div>
            <div className="mx-1">
               
                <TopSection />
            </div>

            <Section heading="Select Currency: " headingBgColor="bg-lightgrey" headingColor="text-primary">
                <div className="mx-3 mt-3">
                    <div className="border border-light ">
                        <select style={{height: "36px"}} className="form-select w-25 bg-lightgrey">
                            <option>AFYA</option>
                            <option>ZAR</option>
                        </select>
                        <input style={{height: "36px"}}  className="form-input w-75" type="number" step="0.000000001" min="0" />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary m-1 mr-4">SEND</button>
                        <button className="btn btn-primary m-1">RECEIVE</button>
                    </div>
                </div>
            </Section>
            <Section  heading="Recent Activity" headingBgColor="bg-lightgrey" headingColor="text-white">
                <ActivityList />
            </Section>

            <div style={{width:"100vw" , overflow: "hidden"}} className="fixed-bottom ">
            <div className="p-3 bg-lightgrey"></div>
            <NavigationBar  />
            </div>
            
            
           
        </div>
    );
}

export default HomePage;