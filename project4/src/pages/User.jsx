import React, { useEffect, useState } from "react";
import "../App.css";

function User() {
  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  // Delete user
  const del = (id) => {
    fetch(`http://localhost:3000/user/${id}`,{
    method: "DELETE" })
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch(console.error);
  };

  return (
    <div>
      <h3>User List</h3>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => del(user.id)} id="delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default User;
