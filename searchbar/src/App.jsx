import React, { useState, useMemo } from "react";
import "./index.css";

const users = [
  { name: "Arun Kumar", email: "arun@example.com", role: "Developer", id: 1 },
  { name: "Priya Sharma", email: "priya@example.com", role: "Designer", id: 2 },
  { name: "Rahul Verma", email: "rahul@example.com", role: "Manager", id: 3 },
  { name: "Anjali Mehta", email: "anjali@example.com", role: "Developer", id: 4 },
];

const App = () => {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    const queryText = query.toLowerCase().trim();

    if (!queryText) return users;

    return users.filter((val) => {
      return (
        val.name.toLowerCase().includes(queryText) ||
        val.email.toLowerCase().includes(queryText) ||
        val.role.toLowerCase().includes(queryText)
      );
    });
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredData.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((val) => (
              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No User Found...</div>
      )}
    </div>
  );
};

export default App;