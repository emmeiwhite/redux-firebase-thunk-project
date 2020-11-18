import React from "react";
import { Card, CardTitle, CardText, CardHeader } from "reactstrap";

const ProjectSummary = ({ project }) => {
  return (
    <Card body className="text-left" key={project.id}>
      <CardHeader>PROJECT HEADER</CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardText>{project.content}</CardText>
      <CardText>Dated : 30-January-2020</CardText>
    </Card>
  );
};

export default ProjectSummary;
