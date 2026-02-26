import React, { useEffect, useState } from "react";
import axios from "axios";
import { OrbitProgress } from "react-loading-indicators";
import Loading from "./Loading.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [perPagepost, setPerPagepost] = useState(5);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handlePage(e) {
    if (
      e.target.innerHTML != "Next" &&
      e.target.innerHTML != "Prev" &&
      e.target.className !== "btnContainer"
    ) {
      setPageNo(Number(e.target.innerHTML));
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
        );
        setIsLoading(false);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    totalepageCalculatio();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    let pageData = [];
    for (
      let i = (pageNo - 1) * perPagepost;
      i < (pageNo - 1) * perPagepost + perPagepost;
      i++
    ) {
      pageData.push(data[i]);
    }
    setPageData(pageData);
  }, [pageNo, data, perPagepost]);

  function totalepageCalculatio() {
    const totalPages = Math.floor(data.length / perPagepost);
    setTotalPage(totalPages);
  }

  return (
    <div className="container">
      <h1>Todo's List</h1>
      {}

      {pageData.map((todo) => (
        <div key={todo.id} className="card">
          <h4>{todo.title}</h4>
          <p className={todo.completed ? "complete" : "pending"}>
            {todo.completed ? "Completed" : "Pending"}
          </p>
        </div>
      ))}

      <div className="btnContainer" onClick={(e) => handlePage(e)}>
        <button
          onClick={() => {
            setPageNo(pageNo - 1);
          }}
          disabled={pageNo == 1 ? true : false}
          className="prev-btn"
        >
          Prev
        </button>
        <span>{pageNo == 1 ? pageNo : pageNo - 1}</span>
        <span>{pageNo}</span>
        <span>{pageNo + 1}</span>
        <button
          onClick={() => {
            setPageNo(pageNo + 1);
          }}
          disabled={pageNo == pageNo - 1 ? true : false}
          className="next-btn"
        >
          Next
        </button>
      </div>
      <Loading props={isLoading ? "flex" : "none"} />
    </div>
  );
};

export default App;
