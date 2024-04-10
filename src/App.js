import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [lists, setLists] = useState(() => {
    const storageLists = JSON.parse(localStorage.getItem("lists"));
    return storageLists ?? [];
  });

  const handleAdd = () => {
    setLists((prev) => {
      const newLists = [...prev, job];

      // Save to local storage
      const jsonLists = JSON.stringify(newLists);

      localStorage.setItem("lists", jsonLists);

      return newLists;
    });
    setJob("");
  };

  const handleDelete = (index) => {
    const newLists = lists.filter((list, i) => i !== index);
    localStorage.setItem("lists", JSON.stringify(newLists));
    setLists(newLists);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Job List</h1>
      <input
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button style={{ marginLeft: 10 }} onClick={handleAdd}>
        Add
      </button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>
            {list}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
