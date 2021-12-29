import React from "react";

export default function ListItem({
  title,
  status,
  id,
  handleDelete,
  changeStatus
}) {
  const style = {
    border: "1px solid black",
    width: "40%",
    margin: "10px auto",
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between"
  };

  return (
    <div>
      <div style={style}>
        <h3>{`${title}`}</h3>
        <h3>{`${status}`}</h3>

        <button
          style={{ width: "4rem", height: "2rem", margin: "0.7rem" }}
          onClick={() => changeStatus(id)}
        >
          Toggle
        </button>
        <button
          style={{ width: "4rem", height: "2rem", margin: "0.7rem" }}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
