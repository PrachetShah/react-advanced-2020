import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// Once we create Context, we have access to 2 components, the provider and the consumer
// We dont use Consumer now as React has useContext hook now, previosuly we needed it

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  // PersonContext.Provider is needed on root of the tree to use it later
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>ContextAPI / useContext Hook</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // We can directly destructure it from object {people: PEOPLE, removePerson: function}
  const { removePerson } = useContext(PersonContext);
  console.log(data);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
