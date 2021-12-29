import "./styles.css";
import React from "react";
import { v4 as uuid } from "uuid";
import ListItem from "./Components/ListItem";
export default function App() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTask] = React.useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleAdd = () => {
    const payload = {
      status: "false",
      title: query,
      id: uuid()
    };
    let newItem = [...tasks, payload];
    console.log(newItem);
    setTask(newItem);
  };

  const handleDelete = (id) => {
    let updatedList = tasks.filter((item) => item.id !== id);
    setTask(updatedList);
  };

  function changeStatus(id) {
    var newContainer = [...tasks];

    for (var i = 0; i < newContainer.length; i++) {
      if (newContainer[i].id === id) {
        if (newContainer[i].status === "true") {
          newContainer[i].status = "false";
        } else {
          newContainer[i].status = "true";
        }
        break;
      }
    }
    setTask([...newContainer]);
    console.log("cont " + newContainer);
    console.log("tasks " + tasks);
  }
  return (
    <div className="App">
      <input placeholder="Type something" onChange={handleChange} />
      <button onClick={handleAdd}>ADD</button>
      <div>
        {tasks.map((item) => {
          return (
            <ListItem
              key={item.id}
              handleDelete={handleDelete}
              changeStatus={changeStatus}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}
