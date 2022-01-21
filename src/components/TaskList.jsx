import React from "react";
import Checkbox from "../components/Checkbox.jsx";
//the data from the input (formTodo) must be in here

const TaskList = props => {
  const { list, setList } = props;
  const onChangeStatus = e => {
  const { name, checked } = e.target;
  const updateList = list.map(item => ({
    ...item,
    done: item.id === name ? checked : item.done
    }));
    setList(updateList);
    };
    
    const onClickRemoveItem = e => {
      const updateList = list.filter(item => !item.done);
      setList(updateList);
      };
  const chk = list.map(item => (
  <Checkbox x key={item.id} data={item} onChange=  {onChangeStatus} />
  ));

  return (
    <div className="todo-list">
      {list.length ? chk : "Nothing to do today?"}
      {list.length ? (
        <p>
          <button className="buttonBlue" onClick={onClickRemoveItem}>Delete finished tasks</button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
