import ProjectPeopleInfo from "./ProjectPeopleInfo";
// TODO write PropTypes for project

const ProjectGeneralInfo = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    client,
    startingDate,
    endingDate,
    people,
  } = project;

  return (
    <div>
      <h1>{title}</h1>
      <p>Project description: {description}</p>
      <img src={imageUrl} alt={title} />
      <p>
        <span>Client: </span>
        {client}
      </p>
      <p>
        <span>Starting date: </span>
        {startingDate}
      </p>
      <p>
        <span>Ending date: </span>
        {endingDate}
      </p>
      <ProjectPeopleInfo people={people} />
    </div>
  );
};

export default ProjectGeneralInfo;