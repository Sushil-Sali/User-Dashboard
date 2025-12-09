import { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    addUser({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 8 }}
      />
      <button style={{ padding: 8, marginLeft: 10 }}>Add User</button>
    </form>
  );
}

export default UserForm;
