import React,{useState,useEffect} from 'react';
import ProjectList from './../projects/ProjectList';
import Notifications from './Notifications'

const Dashboard = ()=>{
    return(
        <main>
            <div className="row dashboard-wrapper">
                <div className="col-md-6">
                    <ProjectList/>
                </div>
                <div className="col-md-6 border">
                    <Notifications/>
                </div>
            </div>
        </main>
    )
}
export default Dashboard;