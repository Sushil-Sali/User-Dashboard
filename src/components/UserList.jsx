import { useState } from "react";

function UserList({ users, deleteUser, updateUser }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEdit = (index, user) => {
    setEditIndex(index);
    setEditValue(user.name);
  };

  const saveEdit = (index) => {
    updateUser(index, { name: editValue });
    setEditIndex(null);
  };

  return (
    <div>
      <h2>User List</h2>

      {users.map((user, index) => (
        <div key={index} style={{ marginBottom: 10 }}>
          {editIndex === index ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                style={{ padding: 6 }}
              />
              <button onClick={() => saveEdit(index)} style={{ marginLeft: 8 }}>
                Save
              </button>
            </>
          ) : (
            <>
              <span>{user.name}</span>
              <button
                onClick={() => startEdit(index, user)}
                style={{ marginLeft: 10 }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(index)}
                style={{ marginLeft: 8, color: "red" }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;
