import { useContext, useState } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import { UserContext } from "../../context/UserContext";
import { createProject, updateProject } from "../../api/projects";
import { PROJECTS_ROUTE, PROJECT_ROUTE } from "../../routes/const";

// TODO write PropTypes from project;

const formatDate = (date) => date.split("T")[0]; // yyyy-mm-dd TODO move to date utils

const NewProject = ({ project }) => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState(project?.title || "");
  const [description, setDescription] = useState(project?.description || "");
  const [imageUrl, setImageUrl] = useState(project?.imageUrl || "");
  const [client, setClient] = useState(project?.client || "");
  const [startingDate, setStartingDate] = useState(
    project?.startingDate ? formatDate(project.startingDate) : ""
  );
  const [endingDate, setEndingDate] = useState(
    project?.endingDate ? formatDate(project.endingDate) : ""
  );
  const people = [];
  const isEditing = !!project;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittingProject = {
      userId: user.id,
      title,
      description,
      imageUrl,
      client,
      startingDate,
      endingDate,
      people,
    };

    const saveProject = isEditing ? updateProject : createProject;
    const savingProject = isEditing
      ? { id: project.id, ...submittingProject }
      : submittingProject;

    saveProject(savingProject)
      .then(() => {
        const route = isEditing
          ? generatePath(PROJECT_ROUTE, { id: project.id })
          : PROJECTS_ROUTE;
        navigate(route);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        type="text"
        label="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormItem
        type="text"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormItem
        type="url"
        label="Image ULR"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <FormItem
        label="Client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <FormItem
        type="date"
        label="Starting Date"
        value={startingDate}
        onChange={(e) => setStartingDate(e.target.value)}
      />
      <FormItem
        type="date"
        label="Ending Date"
        value={endingDate}
        onChange={(e) => setEndingDate(e.target.value)}
      />
      <Button>{isEditing ? "Edit" : "Create"} Project</Button>
    </form>
  );
};

export default NewProject;