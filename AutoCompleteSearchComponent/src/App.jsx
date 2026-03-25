import { list } from "postcss";
import React, { useEffect, useMemo, useState } from "react";

const App = () => {
  const [listData, setlistData] = useState([]);
  const [currentData, setcurrentData] = useState(listData);
  const [query, setquery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setlistData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  }

  function handleSearch() {
    let newData = listData.filter((list) => {
      if (list.title.toLowerCase().includes(query.toLowerCase())) return list;
    });
    setcurrentData(newData);
  }

  let getData = debounce(handleSearch,20000);

  return (
    <div>
      <input
        type="text"
        placeholder="Search something......."
        value={query}
        onChange={(e) => {
          setquery(e.target.value);
          getData()
        }}
      />
      {query.trim()
        ? currentData.map((val) => (
            <h2 id={Math.random() * 34234}>{val.title}</h2>
          ))
        : listData.map((val) => <h2 id={Math.random() * 334}>{val.title}</h2>)}
    </div>
  );
};

export default App;

// // Autocomplete Search Component

// Requirements:

// Input field

// Debounce API (300ms)

// Show suggestions list

// Click → fill input
