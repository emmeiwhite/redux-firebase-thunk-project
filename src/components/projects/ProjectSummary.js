import React from 'react'
import { Card, CardTitle, CardText, CardHeader } from 'reactstrap';

const ProjectSummary = ()=>{
    return(
        <Card body className="text-left" >
            <CardHeader>Header</CardHeader>
            <CardTitle>Project Title</CardTitle>
            <CardText>Project by Emmeisoft</CardText>
            <CardText>Dated : 30-January-2020</CardText>
        </Card>
    )
}

export default ProjectSummary;