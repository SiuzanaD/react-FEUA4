import "./Project.scss";
// TODO write PropTypes for people

const ProjectPeopleInfo = ({ people }) => {
  if (people.length === 0) {
    return <div>No info about people... :(</div>;
  }

  return (
    <div className="people">
      <p>
        <span>People: </span>
      </p>
      <div>
        {people.map((person, index) => (
          <div key={index}>
            <p>
              <span>Name: </span> {person.name}
            </p>
            <p>
              <span>Surname: </span> {person.surname}
            </p>
            <p>
              <span>Position: </span>
              {person.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPeopleInfo;