import React, { useState } from "react";
import FormTodo from "../components/FormTodo.jsx";
import TaskList from "../components/TaskList.jsx";

const Container = () => {
  const [list, setList] = useState([]);
  const handleAddItem = addItem => {
    setList([...list, addItem]);
    };

  return (
    <div>
      <h1 className="title">Let's plan our day!</h1>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;

