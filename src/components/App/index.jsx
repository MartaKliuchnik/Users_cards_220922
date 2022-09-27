import { useState } from "react";
import AddUsers from "../AddUsers";
import CardContainer from "../CardContainer";

function App() {

  const [users, setUsers] = useState([]);

  const addUsersCard = (name_user, gender_user, link_avatar) => {
    setUsers([...users,
    {
      id: Date.now(),
      name: name_user,
      gender: gender_user,
      avatar: link_avatar
    }
    ])
  }
  

  return (
    <>
      <AddUsers addUsersCard={addUsersCard}/>
      <CardContainer users={users} />
    </>
  );
}

export default App;
