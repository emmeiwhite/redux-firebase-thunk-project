import React from 'react'
import {connect} from 'react-redux'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects})=>{
    const projectList = projects.map(project=>{
        return <ProjectSummary project={project} />
    })
    return(
        <div className="Project-list-wrapper">
           {projectList}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects
    }
}
export default connect(mapStateToProps)(ProjectList);