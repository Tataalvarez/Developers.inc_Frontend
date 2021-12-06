import { useLazyQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECT } from "../../graphql/project";

export default function Project({ title, projectId, clickCallback }) {
  const {getProject} = useLazyQuery(GET_PROJECT, {
    variables: { id: projectId },
    onCompleted({ project }) {
      clickCallback(project);
    },
  });
  return (
    <li className="cursor-pointer" onClick={() => getProject()}>
      {title}
    </li>
  );
}