import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const ProjectDetails = ({match})=>{
    return(
        <Card body className="text-left" >
            <CardTitle>Project Title - {match.params.id}</CardTitle>
            <CardText>
                <p>
                    It is just the beginning of time or the end of time. 
                    All I know is that without peace nothing is pleasant.
                    Nothing at oll. !!!
                </p>
            </CardText>
            <CardText>Project by Emmeisoft</CardText>
            <CardText>Dated : 30-January-2020</CardText>
        </Card>
    )
}

export default ProjectDetails;