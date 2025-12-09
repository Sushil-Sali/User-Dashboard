import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  // ADD (CREATE)
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // UPDATE
  const updateUser = (index, updatedUser) => {
    const updatedList = users.map((u, i) => (i === index ? updatedUser : u));
    setUsers(updatedList);
  };

  // DELETE
  const deleteUser = (index) => {
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Horizontal center
        alignItems: "center", // Vertical center
        minHeight: "100vh", // Full screen height
        background: "#f2f2f2",
      }}
    >
      <div style={{ padding: 30, background: "white", borderRadius: 10 }}>
        <h1>User Dashboard</h1>
        <h3>Total Users: {users.length}</h3>

        <UserForm addUser={addUser} />
        <UserList
          users={users}
          deleteUser={deleteUser}
          updateUser={updateUser}
        />
      </div>
    </div>
  );
}

export default App;
