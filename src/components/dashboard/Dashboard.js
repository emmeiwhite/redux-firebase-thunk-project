import React, { useState, useEffect } from "react";
import ProjectList from "./../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { projects } = props;
  return (
    <main>
      <div className="row dashboard-wrapper">
        <div className="col-md-6">
          <ProjectList projects={projects} />
        </div>
        <div className="col-md-6 border">
          <Notifications />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
  };
};
export default connect(mapStateToProps)(Dashboard);
