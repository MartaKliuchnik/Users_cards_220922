import { useState, useEffect } from "react";
import AddUsers from "../AddUsers";
import CardContainer from "../CardContainer";


function App() {
  const [users, _setUsers] = useState([]);

  const setUsers = (state) => {
    _setUsers(state);
    localStorage.setItem('users', JSON.stringify(state));
  }

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) ?? [];
  }, []);

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

  const addEditCard = (id, name_user, gender_user, link_avatar) => 
    setUsers(users.map(user => {
      if (user.id === id) {
        // user.name = name_user;
        // user.gender = gender_user;
        // user.avatar = link_avatar;
        return { ...users, name: name_user, gender: gender_user, avatar: link_avatar }
      }
    }
    ))
  
  // const addEditCard = (id, name_user, gender_user, link_avatar) => {
  //   console.log(users);
  //   users.map(user => {
  //     const cur_user = user.id === id;
  //     console.log(cur_user.name)
  //     cur_user.push({
  //       name: name_user,
  //       gender: gender_user,
  //       avatar: link_avatar
  //     })
  //   })
  // }
  
  
  const deleteCard = (id) => setUsers(users.filter(user => user.id !== id));

  const deleteGender = (gender) => setUsers(users.filter(user => user.gender !== gender))
  
  return (
    <>
      <AddUsers addUsersCard={addUsersCard}/>
      <CardContainer
        users={users}
        deleteCard={deleteCard}
        deleteGender={deleteGender}
        addEditCard={addEditCard} />
    </>
  );
}

export default App;
